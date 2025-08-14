<template>
    <div class="flex flex-col h-[700px] max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <!-- Header -->
        <div class="bg-white border-b border-gray-200 px-6 py-4">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-lg font-semibold text-gray-900">Chat de Voz</h2>
                    <p class="text-sm text-gray-500 mt-1">Conectado como: {{ nickname }}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex -space-x-2">
                        <div v-if="nickname" class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            {{ nickname.charAt(0).toUpperCase() }}
                        </div>
                    </div>
                    <button class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                        <Icon name="material-symbols:more-horiz" class="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Messages Container -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50" style="min-height: 400px; max-height: 500px;">
            <div v-for="message in messages" :key="message.id" :class="[
                'flex',
                message.sender === nickname ? 'justify-end' : 'justify-start'
            ]">
                <div :class="[
                    'max-w-xs lg:max-w-md rounded-xl shadow-sm border',
                    message.sender === nickname
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-900 border-gray-200'
                ]">
                    <!-- Sender info -->
                    <div class="px-4 pt-3 pb-2">
                        <div :class="[
                            'text-xs font-medium mb-2',
                            message.sender === nickname ? 'text-blue-100' : 'text-gray-500'
                        ]">
                            {{ message.sender === nickname ? 'Tú' : message.sender }}
                        </div>

                        <!-- Audio controls -->
                        <div class="flex items-center space-x-3">
                            <button @click="togglePlay(message)" :class="[
                                'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200',
                                message.sender === nickname
                                    ? 'bg-blue-500 hover:bg-blue-400 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                            ]">
                                <Icon v-if="!message.isPlaying" name="material-symbols:play-arrow" class="w-5 h-5" />
                                <Icon v-else name="material-symbols:pause" class="w-5 h-5" />
                            </button>

                            <div class="flex-1 space-y-2">
                                <div class="flex items-center justify-between">
                                    <div :class="[
                                        'text-xs font-medium',
                                        message.sender === nickname ? 'text-blue-100' : 'text-gray-500'
                                    ]">
                                        {{ formatDuration(message.duration) }}
                                    </div>
                                    
                                    <!-- Speed control -->
                                    <select 
                                        v-model="message.playbackRate" 
                                        @change="updatePlaybackRate(message)"
                                        :class="[
                                            'text-xs border rounded px-2 py-1',
                                            message.sender === nickname
                                                ? 'bg-blue-500 border-blue-400 text-white'
                                                : 'bg-white border-gray-300 text-gray-700'
                                        ]"
                                    >
                                        <option value="1">1x</option>
                                        <option value="1.5">1.5x</option>
                                        <option value="2">2x</option>
                                    </select>
                                </div>

                                <!-- Waveform visualization -->
                                <div :class="[
                                    'h-8 rounded overflow-hidden relative',
                                    message.sender === nickname ? 'bg-blue-500' : 'bg-gray-200'
                                ]">
                                    <div 
                                        v-for="(bar, index) in message.waveform" 
                                        :key="index"
                                        :style="{ height: bar + '%' }"
                                        :class="[
                                            'inline-block w-1 mr-0.5 align-bottom opacity-60',
                                            message.sender === nickname ? 'bg-white' : 'bg-gray-600'
                                        ]"
                                    ></div>

                                    <!-- Progress indicator -->
                                    <div 
                                        v-if="message.isPlaying" 
                                        :style="{ width: message.progress + '%' }"
                                        :class="[
                                            'absolute top-0 left-0 h-full opacity-30',
                                            message.sender === nickname ? 'bg-white' : 'bg-blue-500'
                                        ]"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Timestamp -->
                    <div class="px-4 pb-3">
                        <div :class="[
                            'text-xs',
                            message.sender === nickname ? 'text-blue-100' : 'text-gray-400'
                        ]">
                            {{ formatTime(message.timestamp) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Recording Interface -->
        <div class="border-t bg-white border-gray-200 px-6 py-4">
            <div v-if="!isRecording && !recordedBlob" class="flex justify-center">
                <button 
                    @click="startRecording" 
                    :disabled="!hasPermission"
                    class="bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-colors font-medium shadow-sm"
                >
                    <Icon name="material-symbols:mic" class="w-5 h-5" />
                    <span>Mantén presionado para grabar</span>
                </button>
            </div>

            <div v-if="isRecording" class="text-center">
                <div class="flex justify-center items-center space-x-4 mb-4">
                    <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span class="text-lg font-semibold text-gray-900">Grabando... {{ recordingTime }}s</span>
                </div>

                <div class="flex justify-center space-x-3">
                    <button 
                        @click="stopRecording"
                        class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium"
                    >
                        Detener
                    </button>
                </div>
            </div>

            <div v-if="recordedBlob && !isRecording" class="text-center">
                <div class="flex justify-center items-center space-x-4 mb-4">
                    <button 
                        @click="playPreview"
                        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium"
                    >
                        <Icon name="material-symbols:play-arrow" class="w-4 h-4" />
                        <span>Preview</span>
                    </button>

                    <button 
                        @click="sendMessage"
                        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium"
                    >
                        <Icon name="material-symbols:send" class="w-4 h-4" />
                        <span>Enviar</span>
                    </button>

                    <button 
                        @click="discardRecording"
                        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium"
                    >
                        Descartar
                    </button>
                </div>
            </div>

            <!-- Permission request -->
            <div v-if="!hasPermission && permissionDenied" class="text-center">
                <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p class="text-red-700 mb-2">Se necesita acceso al micrófono para grabar mensajes de voz</p>
                    <button 
                        @click="requestPermission"
                        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                    >
                        Solicitar permiso
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

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
const analyser = ref(null);
const currentPlayingAudio = ref(null);
const broadcastChannel = ref(null);
const messagesContainer = ref(null);

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
    if (currentPlayingAudio.value) {
        currentPlayingAudio.value.pause();
    }
});

const initializeBroadcastChannel = () => {
    // Simular comunicación en tiempo real usando BroadcastChannel
    broadcastChannel.value = new BroadcastChannel('voice-chat');
    broadcastChannel.value.onmessage = (event) => {
        if (event.data.type === 'voice-message' && event.data.sender !== nickname.value) {
            addMessage(event.data);
        }
    };
};

const requestPermission = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        hasPermission.value = true;
        permissionDenied.value = false;

        // Inicializar AudioContext para análisis
        audioContext.value = new (window.AudioContext || window.webkitAudioContext)();
        stream.getTracks().forEach(track => track.stop()); // Liberar el stream inicial
    } catch (error) {
        console.error('Error requesting microphone permission:', error);
        hasPermission.value = false;
        permissionDenied.value = true;
    }
};

const startRecording = async () => {
    if (!hasPermission.value) {
        await requestPermission();
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        mediaRecorder.value = new MediaRecorder(stream);
        audioChunks.value = [];
        recordingTime.value = 0;
        isRecording.value = true;

        // Configurar análisis de audio para validación
        const source = audioContext.value.createMediaStreamSource(stream);
        analyser.value = audioContext.value.createAnalyser();
        analyser.value.fftSize = 256;
        source.connect(analyser.value);

        mediaRecorder.value.ondataavailable = (event) => {
            audioChunks.value.push(event.data);
        };

        mediaRecorder.value.onstop = () => {
            processRecording();
            stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorder.value.start();
        startRecordingTimer();

    } catch (error) {
        console.error('Error starting recording:', error);
        isRecording.value = false;
    }
};

const startRecordingTimer = () => {
    recordingTimer.value = setInterval(() => {
        recordingTime.value++;
        if (recordingTime.value >= 30) {
            stopRecording();
        }
    }, 1000);
};

const stopRecording = () => {
    if (mediaRecorder.value && mediaRecorder.value.state === 'recording') {
        mediaRecorder.value.stop();
    }

    isRecording.value = false;

    if (recordingTimer.value) {
        clearInterval(recordingTimer.value);
        recordingTimer.value = null;
    }
};

const processRecording = async () => {
    if (audioChunks.value.length === 0) return;

    recordedBlob.value = new Blob(audioChunks.value, { type: 'audio/wav' });

    // Validar que el audio no esté vacío
    const isValid = await validateAudio(recordedBlob.value);
    if (!isValid) {
        alert('El audio está vacío o muy silencioso. Intenta grabar de nuevo.');
        discardRecording();
        return;
    }
};

const validateAudio = async (blob) => {
    return new Promise((resolve) => {
        const audio = new Audio();
        audio.onloadeddata = () => {
            // Verificar duración mínima
            if (audio.duration < 0.5) {
                resolve(false);
                return;
            }
            resolve(true);
        };
        audio.onerror = () => resolve(false);
        audio.src = URL.createObjectURL(blob);
    });
};

const playPreview = () => {
    if (recordedBlob.value) {
        const audio = new Audio(URL.createObjectURL(recordedBlob.value));
        audio.play();
    }
};

const sendMessage = () => {
    if (!recordedBlob.value) return;

    const message = {
        id: Date.now(),
        sender: nickname.value,
        audioBlob: recordedBlob.value,
        audioUrl: URL.createObjectURL(recordedBlob.value),
        duration: recordingTime.value,
        timestamp: new Date(),
        isPlaying: false,
        playbackRate: 1,
        progress: 0,
        waveform: generateWaveform()
    };

    addMessage(message);

    // Simular envío a otros usuarios
    broadcastChannel.value.postMessage({
        type: 'voice-message',
        ...message,
        audioBlob: undefined // No enviar el blob por broadcast
    });

    discardRecording();
};

const addMessage = (message) => {
    messages.value.push(message);
    nextTick(() => {
        scrollToBottom();
    });
};

const discardRecording = () => {
    recordedBlob.value = null;
    audioChunks.value = [];
    recordingTime.value = 0;
};

const togglePlay = (message) => {
    if (message.isPlaying) {
        pauseAudio(message);
    } else {
        playAudio(message);
    }
};

const playAudio = (message) => {
    // Pausar cualquier audio que esté reproduciéndose
    messages.value.forEach(msg => {
        if (msg.isPlaying) {
            pauseAudio(msg);
        }
    });

    const audio = new Audio(message.audioUrl);
    audio.playbackRate = message.playbackRate;
    currentPlayingAudio.value = audio;

    message.isPlaying = true;

    audio.ontimeupdate = () => {
        message.progress = (audio.currentTime / audio.duration) * 100;
    };

    audio.onended = () => {
        message.isPlaying = false;
        message.progress = 0;
        currentPlayingAudio.value = null;
    };

    audio.play();
};

const pauseAudio = (message) => {
    if (currentPlayingAudio.value) {
        currentPlayingAudio.value.pause();
        currentPlayingAudio.value = null;
    }
    message.isPlaying = false;
};

const updatePlaybackRate = (message) => {
    if (currentPlayingAudio.value && message.isPlaying) {
        currentPlayingAudio.value.playbackRate = message.playbackRate;
    }
};

const generateWaveform = () => {
    // Generar una forma de onda simulada
    const bars = 20;
    return Array.from({ length: bars }, () => Math.random() * 80 + 20);
};

const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', {
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

<style scoped>
/* Animación de pulso personalizada */
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

/* Scrollbar personalizado */
.overflow-y-auto::-webkit-scrollbar {
    width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: #f8fafc;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
}

/* Transiciones suaves */
button {
    transition: all 0.2s ease-in-out;
}

/* Sombras sutiles */
.shadow-sm {
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
</style>