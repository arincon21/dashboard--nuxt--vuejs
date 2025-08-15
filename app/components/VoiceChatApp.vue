<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { useAuth } from '~/composables/useAuth';

const { getCurrentUser } = useAuth();

const nickname = ref('');
const messages = ref([]);
const isRecording = ref(false);
const recordingTime = ref(0);
const recordedBlob = ref(null);
const mediaRecorder = ref(null);
const audioChunks = ref([]);
const recordingTimer = ref(null);
const hasPermission = ref(false);
const permissionDenied = ref(false);
const audioContext = ref(null);
const messagesContainer = ref(null);
const mediaStream = ref(null);
const broadcastChannel = ref(null);

// State for the currently playing audio
const activeAudio = ref(null); // { audio: HTMLAudioElement, messageId: number }

onMounted(() => {
    const user = getCurrentUser();
    if (user && user.name) {
        nickname.value = user.name;
    }
    requestPermission();
    initializeBroadcastChannel();
});

onBeforeUnmount(() => {
    if (broadcastChannel.value) {
        broadcastChannel.value.close();
    }
    if (activeAudio.value) {
        activeAudio.value.audio.pause();
    }
    if (mediaStream.value) {
        mediaStream.value.getTracks().forEach(track => track.stop());
    }
    if (recordingTimer.value) {
        clearInterval(recordingTimer.value);
    }
});

const initializeBroadcastChannel = () => {
    broadcastChannel.value = new BroadcastChannel('voice-chat');
    broadcastChannel.value.onmessage = (event) => {
        if (event.data.type === 'voice-message' && event.data.sender !== nickname.value) {
            // Para mensajes de otras pestañas, necesitamos recrear el audio desde los datos
            const messageData = {
                ...event.data,
                audioUrl: null, // Lo recrearemos desde audioData si está disponible
                isPlaying: false,
                progress: 0,
                currentTime: 0
            };
            
            // Si tenemos los datos del audio, recrear el blob
            if (event.data.audioData) {
                try {
                    const blob = new Blob([new Uint8Array(event.data.audioData)], { 
                        type: event.data.audioType || 'audio/webm' 
                    });
                    messageData.audioUrl = URL.createObjectURL(blob);
                } catch (error) {
                    console.error('Error recreating audio blob:', error);
                }
            }
            
            addMessage(messageData);
        }
    };
};

const requestPermission = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44100
            } 
        });
        mediaStream.value = stream;
        hasPermission.value = true;
        permissionDenied.value = false;
        audioContext.value = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
        console.error('Error requesting microphone permission:', error);
        hasPermission.value = false;
        permissionDenied.value = true;
    }
};

const startRecording = async () => {
    if (!hasPermission.value || !mediaStream.value) {
        await requestPermission();
        if (!hasPermission.value) return;
    }
    
    try {
        // Limpiar grabación anterior si existe
        if (recordedBlob.value) {
            discardRecording();
        }
        
        // Usar MP4 como formato principal para evitar problemas de duración con WebM
        let options = {
            mimeType: 'audio/mp4',
            audioBitsPerSecond: 128000
        };
        
        // Fallback para navegadores que no soportan mp4
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            options = {
                mimeType: 'audio/webm',
                audioBitsPerSecond: 128000
            };
            
            // Si tampoco webm, usar el default
            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                options = { audioBitsPerSecond: 128000 };
            }
        }
        
        console.log('Using recording format:', options.mimeType || 'default');
        
        mediaRecorder.value = new MediaRecorder(mediaStream.value, options);
        audioChunks.value = [];
        recordingTime.value = 0;
        
        mediaRecorder.value.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunks.value.push(event.data);
            }
        };
        
        mediaRecorder.value.onstop = () => {
            processRecording();
        };
        
        mediaRecorder.value.onerror = (event) => {
            console.error('MediaRecorder error:', event.error);
            isRecording.value = false;
            stopRecordingTimer();
        };
        
        // Iniciar grabación inmediatamente
        mediaRecorder.value.start(100); // Capturar datos cada 100ms
        isRecording.value = true;
        startRecordingTimer();
        
    } catch (error) {
        console.error('Error starting recording:', error);
        isRecording.value = false;
    }
};

const startRecordingTimer = () => {
    recordingTimer.value = setInterval(() => {
        recordingTime.value++;
        if (recordingTime.value >= 120) { // Límite de 2 minutos
            stopRecording();
        }
    }, 1000);
};

const stopRecordingTimer = () => {
    if (recordingTimer.value) {
        clearInterval(recordingTimer.value);
        recordingTimer.value = null;
    }
};

const stopRecording = () => {
    if (mediaRecorder.value && mediaRecorder.value.state === 'recording') {
        mediaRecorder.value.stop();
    }
    isRecording.value = false;
    stopRecordingTimer();
};

const processRecording = async () => {
    if (audioChunks.value.length === 0) {
        alert('No se pudo grabar el audio. Intenta de nuevo.');
        return;
    }
    
    // Usar un tipo MIME más específico para mejor compatibilidad
    let mimeType = 'audio/webm;codecs=opus';
    if (mediaRecorder.value && mediaRecorder.value.mimeType) {
        mimeType = mediaRecorder.value.mimeType;
    }
    
    recordedBlob.value = new Blob(audioChunks.value, { type: mimeType });
    
    console.log('Processed recording:', {
        size: recordedBlob.value.size,
        type: recordedBlob.value.type,
        duration: recordingTime.value
    });
    
    const isValid = await validateAudio(recordedBlob.value);
    if (!isValid) {
        alert('El audio está vacío o muy corto. Intenta grabar de nuevo.');
        discardRecording();
    }
};

const validateAudio = (blob) => {
    return new Promise((resolve) => {
        if (blob.size < 1000) { // Menos de 1KB probablemente está vacío
            resolve(false);
            return;
        }
        
        const audio = new Audio(URL.createObjectURL(blob));
        audio.onloadeddata = () => {
            resolve(audio.duration >= 0.5);
            URL.revokeObjectURL(audio.src);
        };
        audio.onerror = () => {
            resolve(false);
            URL.revokeObjectURL(audio.src);
        };
    });
};

const playPreview = () => {
    if (recordedBlob.value) {
        const audio = new Audio(URL.createObjectURL(recordedBlob.value));
        audio.play();
        audio.onended = () => URL.revokeObjectURL(audio.src);
    }
};

const sendMessage = async () => {
    if (!recordedBlob.value) return;
    
    try {
        const waveform = await generateWaveform(recordedBlob.value);
        
        // Convertir el blob a ArrayBuffer para poder enviarlo por BroadcastChannel
        const audioArrayBuffer = await recordedBlob.value.arrayBuffer();
        const audioType = recordedBlob.value.type;
        
        const message = {
            id: Date.now() + Math.random(), // Más único
            sender: nickname.value,
            audioUrl: URL.createObjectURL(recordedBlob.value),
            duration: recordingTime.value,
            timestamp: new Date(),
            isPlaying: false,
            playbackRate: 1,
            progress: 0,
            currentTime: 0,
            waveform,
            audioData: Array.from(new Uint8Array(audioArrayBuffer)), // Para transferencia
            audioType: audioType
        };
        
        addMessage(message);
        
        // Broadcast con los datos del audio para que otras pestañas puedan reproducir
        const messageForBroadcast = {
            ...message,
            audioUrl: null // Se recreará en cada pestaña
        };
        
        broadcastChannel.value.postMessage({ 
            type: 'voice-message', 
            ...messageForBroadcast 
        });
        
    } catch (error) {
        console.error('Error sending message:', error);
        alert('Error enviando el mensaje. Intenta de nuevo.');
    } finally {
        discardRecording();
    }
};

const addMessage = (message) => {
    messages.value.push(message);
    nextTick(() => {
        scrollToBottom();
    });
};

const discardRecording = () => {
    if (recordedBlob.value) {
        // Limpiar URL object para evitar memory leaks
        const currentMessages = messages.value.filter(m => m.audioUrl && m.audioUrl.startsWith('blob:'));
        currentMessages.forEach(m => {
            if (m.audioUrl !== (recordedBlob.value ? URL.createObjectURL(recordedBlob.value) : null)) {
                // No revocar URLs que aún se usan en mensajes
            }
        });
    }
    recordedBlob.value = null;
    audioChunks.value = [];
    recordingTime.value = 0;
};

const togglePlay = (message) => {
    if (activeAudio.value && activeAudio.value.messageId === message.id) {
        pauseAudio(message);
    } else {
        playAudio(message);
    }
};

const playAudio = (message) => {
    // Pausar audio activo si existe
    if (activeAudio.value) {
        const currentlyPlayingMessage = messages.value.find(m => m.id === activeAudio.value.messageId);
        if (currentlyPlayingMessage) {
            pauseAudio(currentlyPlayingMessage);
        }
    }

    // Verificar si tenemos audioUrl, si no, intentar recrearlo desde audioData
    if (!message.audioUrl && message.audioData && message.audioType) {
        try {
            const blob = new Blob([new Uint8Array(message.audioData)], { 
                type: message.audioType 
            });
            message.audioUrl = URL.createObjectURL(blob);
        } catch (error) {
            console.error('Error recreating audio from data:', error);
        }
    }

    if (!message.audioUrl) {
        console.error('No audio URL available for message');
        alert('No se puede reproducir este audio. Es posible que el archivo no esté disponible.');
        return;
    }

    const audio = new Audio(message.audioUrl);
    audio.preload = 'metadata';
    audio.playbackRate = message.playbackRate || 1;
    audio.currentTime = 0;
    
    activeAudio.value = { audio, messageId: message.id };
    
    // Resetear progreso al iniciar
    message.progress = 0;
    message.currentTime = 0;
    
    // Usar la duración de grabación como fallback si el audio no tiene duración válida
    const fallbackDuration = message.duration || recordingTime.value || 0;

    // Actualizar progreso
    const updateProgress = () => {
        let audioDuration = audio.duration;
        
        // Si la duración del audio es Infinity o inválida, usar fallback
        if (!audioDuration || isNaN(audioDuration) || !isFinite(audioDuration)) {
            audioDuration = fallbackDuration;
        }
        
        if (audioDuration > 0) {
            const currentTime = audio.currentTime || 0;
            const progress = (currentTime / audioDuration) * 100;
            
            console.log('Progress Debug:', {
                currentTime: currentTime,
                audioDuration: audioDuration,
                fallbackDuration: fallbackDuration,
                progress: progress,
                messageId: message.id
            });
            
            message.progress = Math.max(0, Math.min(100, progress));
            message.currentTime = currentTime;
            
            // Actualizar la duración del mensaje si usamos fallback
            if (message.duration !== audioDuration) {
                message.duration = Math.floor(audioDuration);
            }
        }
    };

    const cleanup = () => {
        message.isPlaying = false;
        message.progress = 0;
        message.currentTime = 0;
        if (activeAudio.value && activeAudio.value.messageId === message.id) {
            activeAudio.value = null;
        }
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('ended', cleanup);
        audio.removeEventListener('error', cleanup);
        audio.removeEventListener('loadedmetadata', onMetadataLoaded);
        audio.removeEventListener('canplay', onCanPlay);
        audio.removeEventListener('durationchange', onDurationChange);
    };

    const onMetadataLoaded = () => {
        console.log('Metadata loaded:', {
            duration: audio.duration,
            readyState: audio.readyState,
            currentTime: audio.currentTime,
            fallbackDuration: fallbackDuration
        });
        
        audio.currentTime = 0;
        message.currentTime = 0;
        message.progress = 0;
    };

    const onDurationChange = () => {
        console.log('Duration changed:', {
            newDuration: audio.duration,
            fallbackDuration: fallbackDuration
        });
        
        // Si obtenemos una duración válida, usarla
        if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
            message.duration = Math.floor(audio.duration);
        }
    };

    const onCanPlay = () => {
        console.log('Can play - starting playback', {
            currentTime: audio.currentTime,
            duration: audio.duration,
            fallback: fallbackDuration
        });
        
        if (audio.currentTime > 0) {
            audio.currentTime = 0;
        }
        
        message.isPlaying = true;
        updateProgress();
    };

    // Agregar event listeners
    audio.addEventListener('loadedmetadata', onMetadataLoaded);
    audio.addEventListener('canplay', onCanPlay);
    audio.addEventListener('durationchange', onDurationChange);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', cleanup);
    audio.addEventListener('error', (e) => {
        console.error('Audio playback error:', e);
        cleanup();
    });
    
    // Reproducir inmediatamente
    audio.play().then(() => {
        console.log('Playback started successfully at:', audio.currentTime);
        message.isPlaying = true;
        updateProgress();
    }).catch(error => {
        console.error('Error playing audio:', error);
        cleanup();
    });
};

const pauseAudio = (message) => {
    if (activeAudio.value && activeAudio.value.messageId === message.id) {
        activeAudio.value.audio.pause();
        activeAudio.value = null;
    }
    message.isPlaying = false;
};

const updatePlaybackRate = (message) => {
    if (activeAudio.value && activeAudio.value.messageId === message.id) {
        activeAudio.value.audio.playbackRate = message.playbackRate;
    }
};

const seekAudio = (message, event) => {
    if (!activeAudio.value || activeAudio.value.messageId !== message.id) return;
    
    const audio = activeAudio.value.audio;
    if (!audio.duration || isNaN(audio.duration) || !isFinite(audio.duration)) return;
    
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * audio.duration;
    
    audio.currentTime = newTime;
    message.progress = percentage * 100;
    message.currentTime = newTime;
};

const generateWaveform = async (blob) => {
    if (!audioContext.value) {
        return Array(40).fill(20); // Fallback más visible
    }
    
    try {
        const buffer = await blob.arrayBuffer();
        const audioBuffer = await audioContext.value.decodeAudioData(buffer);
        const data = audioBuffer.getChannelData(0);
        const bars = 40;
        const step = Math.floor(data.length / bars);
        
        if (step === 0) return Array(40).fill(20);
        
        const amps = [];
        for (let i = 0; i < bars; i++) {
            let sum = 0;
            for (let j = 0; j < step; j++) {
                const index = i * step + j;
                if (index < data.length) {
                    sum += Math.abs(data[index]);
                }
            }
            amps.push(sum / step);
        }
        
        const maxAmp = Math.max(...amps);
        if (maxAmp === 0) return Array(40).fill(20);
        
        // Normalizar entre 10 y 80 para mejor visibilidad
        return amps.map(amp => Math.max(10, Math.min(80, (amp / maxAmp) * 80)));
        
    } catch (e) {
        console.error("Error generating waveform:", e);
        return Array(40).fill(20);
    }
};

const formatDuration = (seconds) => {
    // Manejar casos edge
    if (!seconds || isNaN(seconds) || !isFinite(seconds) || seconds < 0) {
        return "0:00";
    }
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
};

const scrollToBottom = () => {
    if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
};
</script>

<template>
    <div class="flex flex-col h-[750px] max-w-4xl mx-auto bg-white dark:bg-slate-900 overflow-hidden border border-slate-200 dark:border-slate-800">
        <!-- Header -->
        <div class="bg-white border-b border-slate-300 px-6 py-4 dark:bg-slate-900 dark:border-slate-800">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-xl font-bold text-slate-800 dark:text-white">Chat de Voz</h2>
                    <!-- FIX 1: Cambiar <p> por <div> para evitar error de HTML inválido -->
                    <div class="text-sm text-slate-500 mt-1 flex items-center gap-2 dark:text-slate-400">
                        <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                        Conectado como: {{ nickname }}
                    </div>
                </div>
                <div class="flex items-center space-x-3">
                    <div class="flex -space-x-2">
                        <div v-if="nickname" class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold ring-2 ring-white">
                            {{ nickname.charAt(0).toUpperCase() }}
                        </div>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors duration-200">
                        <Icon name="material-symbols:more-horiz" class="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Messages Container -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-slate-50 dark:bg-slate-900" style="min-height: 400px; max-height: 650px;">
            <div v-for="message in messages" :key="message.id" :class="['flex', message.sender === nickname ? 'justify-end' : 'justify-start']">
                <div :class="[ 'max-w-xs lg:max-w-md rounded-2xl border transition-all duration-300', message.sender === nickname ? 'bg-blue-600 text-white border-blue-500/20' : 'bg-white text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-white dark:border-slate-700' ]">
                    
                    <div class="px-5 pt-4 pb-3 w-[400px]">
                        <div :class="[ 'text-xs font-semibold mb-3 flex items-center gap-2', message.sender === nickname ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400' ]">
                            <div :class="[ 'w-2 h-2 rounded-full', message.sender === nickname ? 'bg-blue-200' : 'bg-slate-400' ]"/>
                            {{ message.sender === nickname ? 'Tú' : message.sender }}
                        </div>

                        <div class="flex items-center space-x-4">
                            <button :class="[ 'w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300', message.sender === nickname ? 'bg-blue-500/30 hover:bg-blue-400/40 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white' ]" @click="togglePlay(message)">
                                <Icon v-if="!message.isPlaying" name="material-symbols:play-arrow" class="w-6 h-6 ml-0.5" />
                                <Icon v-else name="material-symbols:pause" class="w-6 h-6" />
                            </button>

                            <div class="flex-1 space-y-3 min-w-0">
                                <div class="flex items-center justify-between">
                                    <div :class="[ 'text-sm font-medium', message.sender === nickname ? 'text-blue-100' : 'text-slate-600 dark:text-slate-300' ]">
                                        <span v-if="message.isPlaying && message.currentTime && message.currentTime > 0" class="font-mono">
                                            {{ formatDuration(message.currentTime) }} / 
                                        </span>
                                        <span class="font-mono">{{ formatDuration(message.duration || recordingTime) }}</span>
                                    </div>
                                    
                                    <select v-model="message.playbackRate" :class="[ 'text-xs border rounded-lg px-3 py-1 cursor-pointer font-medium transition-colors duration-200', message.sender === nickname ? 'bg-blue-500/20 border-blue-400/30 text-white hover:bg-blue-400/30' : 'bg-white border-slate-300 text-black hover:border-slate-400 dark:bg-white dark:border-slate-600 dark:text-black' ]" @change="updatePlaybackRate(message)">
                                        <option value="0.75">0.75×</option>
                                        <option value="1">1.0×</option>
                                        <option value="1.25">1.25×</option>
                                        <option value="1.5">1.5×</option>
                                        <option value="2">2.0×</option>
                                    </select>
                                </div>

                                <!-- Waveform and Progress -->
                                <div class="relative">
                                    <!-- Waveform -->
                                    <div class="h-10 w-full flex items-end justify-between cursor-pointer rounded-lg p-1 hover:bg-black/5 transition-colors duration-200" @click="seekAudio(message, $event)">
                                        <div v-for="(bar, index) in message.waveform" :key="index" :style="{ height: bar + '%' }" :class="[ 'w-1 rounded-full transition-all duration-200', message.sender === nickname ? (message.progress > (index / message.waveform.length * 100) ? 'bg-blue-200' : 'bg-blue-400/60') : (message.progress > (index / message.waveform.length * 100) ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-600') ]"/>
                                    </div>
                                    
                                    <!-- Progress indicator line -->
                                    <div v-if="message.isPlaying" class="absolute top-1 w-0.5 h-8 bg-red-500 rounded-full pointer-events-none transition-all duration-150 ease-linear" :style="{ left: Math.min(98, Math.max(2, message.progress)) + '%' }"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="px-5 pb-4">
                        <div :class="[ 'text-xs flex items-center justify-between', message.sender === nickname ? 'text-blue-200' : 'text-slate-400 dark:text-slate-500' ]">
                            <span>{{ formatTime(message.timestamp) }}</span>
                            <div v-if="message.isPlaying" class="flex items-center gap-1">
                                <div class="w-1.5 h-1.5 bg-current rounded-full animate-pulse"/>
                                <span class="text-xs font-medium">Reproduciendo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Recording Interface -->
        <div class="border-t border-slate-200/50 bg-white/70 backdrop-blur-sm px-6 py-6 dark:bg-slate-900/70 dark:border-slate-800/50">
            <div v-if="!isRecording && !recordedBlob" class="flex justify-center">
                <button :disabled="!hasPermission" :class="[ 'px-8 py-4 rounded-2xl flex items-center space-x-3 transition-colors duration-300 font-semibold', hasPermission ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-slate-300 text-slate-500 cursor-not-allowed' ]" @click="startRecording">
                    <div :class="[ 'w-6 h-6 rounded-full flex items-center justify-center', hasPermission ? 'bg-white/20' : 'bg-slate-400/20' ]">
                        <Icon name="material-symbols:mic" class="w-4 h-4" />
                    </div>
                    <span>{{ hasPermission ? 'Mantén presionado para grabar' : 'Solicitando permisos...' }}</span>
                </button>
            </div>

            <div v-if="isRecording" class="text-center">
                <div class="flex justify-center items-center space-x-6 mb-6">
                    <div class="flex space-x-2">
                        <div v-for="i in 3" :key="i" class="w-3 h-3 bg-red-500 rounded-full bouncing-dots" :style="{ animationDelay: (i - 1) * 0.2 + 's' }"/>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-red-600 font-mono">{{ formatDuration(recordingTime) }}</div>
                        <div class="text-sm text-slate-500 mt-1 dark:text-slate-400">
                            {{ recordingTime < 120 ? `${120 - recordingTime}s restantes` : 'Máximo alcanzado' }}
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button class="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center gap-3" @click="stopRecording">
                        <Icon name="material-symbols:stop" class="w-5 h-5" />
                        Detener Grabación
                    </button>
                </div>
            </div>

            <div v-if="recordedBlob && !isRecording" class="text-center space-y-4">
                <div class="bg-green-50 border border-green-200 rounded-xl p-4 dark:bg-green-900/20 dark:border-green-800/50">
                    <div class="flex items-center justify-center gap-2 text-green-700 dark:text-green-400">
                        <Icon name="material-symbols:check-circle" class="w-5 h-5" />
                        <span class="font-semibold">Grabación completada: {{ formatDuration(recordingTime) }}</span>
                    </div>
                </div>
                
                <div class="flex justify-center space-x-4">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 font-semibold transition-colors duration-300" @click="playPreview">
                        <Icon name="material-symbols:play-arrow" class="w-5 h-5" />
                        <span>Escuchar</span>
                    </button>

                    <button class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 font-semibold transition-colors duration-300" @click="sendMessage">
                        <Icon name="material-symbols:send" class="w-5 h-5" />
                        <span>Enviar</span>
                    </button>

                    <button class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 font-semibold transition-colors duration-300" @click="discardRecording">
                        <Icon name="material-symbols:delete" class="w-5 h-5" />
                        <span>Descartar</span>
                    </button>
                </div>
            </div>

            <div v-if="!hasPermission && permissionDenied" class="text-center">
                <div class="bg-red-50 border border-red-200 rounded-xl p-6 dark:bg-red-900/20 dark:border-red-800/50">
                    <Icon name="material-symbols:mic-off" class="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 class="text-red-800 font-bold text-lg mb-2 dark:text-red-300">Acceso al micrófono requerido</h3>
                    <p class="text-red-700 mb-4 dark:text-red-400">Por favor, permite el acceso al micrófono en tu navegador para grabar mensajes de voz</p>
                    <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center gap-2 mx-auto" @click="requestPermission">
                        <Icon name="material-symbols:refresh" class="w-5 h-5" />
                        Intentar de nuevo
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Scrollbar moderno */
.overflow-y-auto::-webkit-scrollbar {
    width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: rgba(148, 163, 184, 0.1);
    border-radius: 12px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #94a3b8;
    border-radius: 12px;
    border: 2px solid transparent;
    background-clip: padding-box;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #64748b;
}

/* Animaciones */
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.6;
    }
}

@keyframes bounce-delay {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.0); }
}

.bouncing-dots {
    animation: bounce-delay 1.4s infinite ease-in-out both;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Aplicar animaciones a mensajes */
.flex:nth-child(odd) > div {
    animation: slideInLeft 0.4s ease-out;
}

.flex:nth-child(even) > div {
    animation: slideInRight 0.4s ease-out;
}

/* Efectos de glassmorphism */
.backdrop-blur-sm {
    backdrop-filter: blur(8px);
}

/* Select personalizado */
select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.75rem center;
    background-repeat: no-repeat;
    background-size: 1rem 1rem;
    padding-right: 2.5rem;
    cursor: pointer;
}

/* Focus states */
button:focus-visible,
select:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}
</style>