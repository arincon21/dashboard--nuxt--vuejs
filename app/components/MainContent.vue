<template>
  <div class="flex-1 p-6 bg-white dark:bg-slate-900">

    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-slate-800 mb-2 dark:text-white">Preparing for a Startup Interview</h1>
      <div class="flex items-center gap-4 text-sm text-slate-600 mb-2 dark:text-slate-400">
        <span>Creado el: <strong>7 Agosto 2025 a las 11:46 AM</strong></span>
        <div class="flex items-center gap-2">
          <div class="flex -space-x-1">
            Profesor asignado:
          </div>
          <button
            class="text-blue-600 text-sm font-medium hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Teacher
            Danny</button>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <span class="text-slate-500 dark:text-slate-400">Nota para esta práctica: <b>10 Pts.</b></span>
        <span class="text-green-500 border border-green-500 rounded-full px-4 py-1">
          Completado
        </span>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="flex gap-2 border-y border-slate-300 mb-6 -mx-6 dark:border-slate-800">
      <button
        class="px-7 py-3 text-sm font-medium text-slate-800 border-b-2 border-blue-600 dark:text-white dark:border-white">Resumen</button>
      <button
        class="px-7 py-3 text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white">Palabras
        y frases</button>
      <button
        class="px-7 py-3 text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white">Conversación</button>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-4 gap-6 mb-8">

      <div class="p-6 border border-slate-300 bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
        <div class="flex items-center gap-2 mb-2">
          <Icon name="heroicons:document-text" class="w-5 h-5 text-slate-400" />
          <span class="text-sm text-slate-500 dark:text-slate-400">Duración total</span>
        </div>
        <div class="text-3xl font-bold text-slate-800 dark:text-white">5 Min</div>
      </div>

      <div class="p-6 border border-slate-300 bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
        <div class="flex items-center gap-2 mb-2">
          <Icon name="heroicons:clock" class="w-5 h-5 text-slate-400" />
          <span class="text-sm text-slate-500 dark:text-slate-400">Tiempo hablando</span>
        </div>
        <div class="text-3xl font-bold text-slate-800 dark:text-white">4 Min</div>
      </div>

      <div class="p-6 border border-slate-300 bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
        <div class="flex items-center gap-2 mb-2">
          <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 text-slate-400" />
          <span class="text-sm text-slate-500 dark:text-slate-400">Mensajes</span>
        </div>
        <div class="text-3xl font-bold text-slate-800 dark:text-white">12</div>
      </div>

      <div class="p-6 border border-slate-300 bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
        <div class="flex items-center gap-2 mb-2">
          <Icon name="heroicons:check-circle" class="w-5 h-5 text-slate-400" />
          <span class="text-sm text-slate-500 dark:text-slate-400">Palabras por minuto</span>
        </div>
        <div class="text-3xl font-bold text-slate-800 dark:text-white">121</div>
      </div>
    </div>

    <h1
      class="text-lg font-semibold text-slate-800 mb-5 pt-5 border-t border-slate-300 dark:text-white dark:border-slate-800">
      Ayudas proporcionadas
    </h1>

    <!-- Documents List -->
    <div class="flex flex-col gap-4">
      <!-- Document Item 1 -->
      <div class="flex items-center justify-between p-4 border border-slate-300 dark:border-slate-800">
        <div class="flex items-center gap-3">
          <Icon name="heroicons:document-text" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <div>
            <h4 class="font-medium text-slate-800 dark:text-white">Ver transcripción</h4>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-600" />
          </div>
        </div>
      </div>

      <!-- Document Item 2 -->
      <div class="flex items-center justify-between p-4 border border-slate-300 dark:border-slate-800">
        <div class="flex items-center gap-3">
          <Icon name="heroicons:document-text" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <div>
            <h4 class="font-medium text-slate-800 dark:text-white">Ver sugerencias</h4>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-600" />
          </div>
        </div>
      </div>

      <!-- Document Item 3 -->
      <div class="flex items-center justify-between p-4 border border-slate-300 dark:border-slate-800">
        <div class="flex items-center gap-3">
          <Icon name="heroicons:document-text" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <div>
            <h4 class="font-medium text-slate-800 dark:text-white">Ver traducción</h4>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-600" />
          </div>
        </div>
      </div>

      <!-- Document Item 3 -->
      <div class="flex items-center justify-between p-4 border border-slate-300 dark:border-slate-800">
        <div class="flex items-center gap-3">
          <Icon name="heroicons:document-text" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <div>
            <h4 class="font-medium text-slate-800 dark:text-white">Usar idioma nativo</h4>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-600" />
          </div>
        </div>
      </div>

      <div class="h-screen p-4">
        <VoiceChatApp />
      </div>

    </div>
  </div>
</template>

<script setup>
  import VoiceChatApp from '@/components/VoiceChatApp.vue'
</script>
