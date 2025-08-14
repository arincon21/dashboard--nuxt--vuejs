<template>
  <aside class="fixed h-screen w-72 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col z-10 dark:bg-slate-900 dark:border-slate-800">
      <div class="p-6 flex-1 flex flex-col">
        <div class="flex-grow">
          <!-- Logo -->
          <div class="flex items-center gap-2 mb-8">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">LQ</span>
            </div>
            <span class="font-bold text-[25px] text-slate-800 dark:text-white">Lingo Quest</span>
          </div>

          <!-- Navigation -->
          <nav class="space-y-1">

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
              <Icon name="heroicons:home" class="w-5 h-5" />
              Inicio
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 dark:bg-slate-800 dark:text-white">
              <Icon name="heroicons:user-group" class="w-5 h-5" />
              Estudiantes
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
              <Icon name="heroicons:academic-cap" class="w-5 h-5" />
              Clases
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
              <Icon name="heroicons:presentation-chart-bar" class="w-5 h-5" />
              Escenarios
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
              <Icon name="heroicons:book-open" class="w-5 h-5" />
              Módulo
            </a>

          </nav>

        </div>

        <!-- Bottom Section -->
        <div class="space-y-2  pt-5 border-t border-slate-200 dark:border-slate-800">
          <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
            <Icon name="heroicons:cog" class="w-5 h-5" />
            Configuración
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
            <Icon name="heroicons:question-mark-circle" class="w-5 h-5" />
            Ayuda y Soporte
            <span class="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">3</span>
          </a>
        </div>
      </div>
    </aside>
</template>
