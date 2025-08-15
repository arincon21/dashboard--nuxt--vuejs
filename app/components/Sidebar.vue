<script setup>
const route = useRoute()

function linkClasses(path) {
  const isActive = route.path === path
  return [
    'flex items-center gap-3 px-3 py-2 rounded transition-colors duration-200',
    isActive
      ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:text-white'
      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
  ]
}
</script>

<template>
  <aside class="fixed h-screen w-72 bg-white border-r border-slate-300 flex-shrink-0 flex flex-col z-10 dark:bg-slate-900 dark:border-slate-800">
      <div class="p-6 flex-1 flex flex-col">
        <div class="flex-grow">
          <!-- Logo -->
          <div class="flex items-center gap-2 mb-8">
            <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span class="text-white font-bold">LQ</span>
            </div>
            <span class="font-bold text-[25px] text-slate-800 dark:text-white">Lingo Questo</span>
          </div>

          <!-- Navigation -->
          <nav class="space-y-1">

            <NuxtLink to="/" :class="linkClasses('home')">
              <Icon name="heroicons:home" class="w-5 h-5" />
              Inicio
            </NuxtLink>

            <NuxtLink to="/DashboardPage" :class="linkClasses('/DashboardPage')">
              <Icon name="heroicons:user-group" class="w-5 h-5" />
              Estudiantes
            </NuxtLink>

            <NuxtLink to="/VoiceChatPage" :class="linkClasses('/VoiceChatPage')">
              <Icon name="heroicons:microphone" class="w-5 h-5" />
              Voice Chat
            </NuxtLink>

            <NuxtLink to="#" :class="linkClasses('clases')">
              <Icon name="heroicons:academic-cap" class="w-5 h-5" />
              Clases
            </NuxtLink>

            <NuxtLink to="#" :class="linkClasses('escenarios')">
              <Icon name="heroicons:presentation-chart-bar" class="w-5 h-5" />
              Escenarios
            </NuxtLink>

            <NuxtLink to="#" :class="linkClasses('modulo')">
              <Icon name="heroicons:book-open" class="w-5 h-5" />
              Módulo
            </NuxtLink>

          </nav>

        </div>

        <!-- Bottom Section -->
        <div class="space-y-2  pt-5 border-t border-slate-300 dark:border-slate-800">
          <NuxtLink to="#" :class="linkClasses('configuracion')">
            <Icon name="heroicons:cog" class="w-5 h-5" />
            Configuración
          </NuxtLink>
          <NuxtLink to="#" :class="linkClasses('ayuda')">
            <Icon name="heroicons:question-mark-circle" class="w-5 h-5" />
            Ayuda y Soporte
            <span class="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">3</span>
          </NuxtLink>
        </div>
      </div>
    </aside>
</template>
