<template>
    <div class="w-80 bg-white border-r border-slate-300 p-6 dark:bg-slate-900 dark:border-slate-800">
          <!-- Student Profile -->
          <div class="text-center mb-6">
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-white text-2xl font-bold">NT</span>
            </div>
            <h2 class="text-xl font-bold text-slate-800 dark:text-white">Nombre del Estudiante</h2>
            <p class="text-slate-500 text-sm dark:text-slate-400">Grupo | #F528352</p>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-2 mb-6">
            <button
              class="flex-1 text-xs rounded flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
              <Icon name="heroicons:envelope" class="w-4 h-4" />
              Correo
            </button>
            <button
              class="flex-1 text-xs rounded flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 hover:bg-green-600">
              <Icon name="heroicons:phone" class="w-4 h-4" />
              WhatsApp
            </button>
            <button class="px-2 py-2 border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
              <Icon name="heroicons:ellipsis-vertical" class="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </button>
          </div>

          <!-- Last Activity -->
          <div class="mb-6 text-center">
            <p class="text-sm text-slate-500 mb-2 dark:text-slate-400">
              Última actividad
            </p>
            <p class="text-sm text-slate-500 mb-2 dark:text-slate-400">
              <strong>28 de julio de 2024 a las 09:00 a.m.</strong>
            </p>
          </div>

          <!-- Tabs -->
          <div class="flex border-y border-slate-300 mb-6 -mx-6 dark:border-slate-800">
            <button class="px-9 py-2 text-sm font-medium text-slate-800 border-b-2 border-blue-600 dark:text-white dark:border-white">
              Comentarios
            </button>
            <button class="px-9 py-2 text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white">
              Actividades
            </button>
          </div>

          <!-- Activity Timeline -->
          <div class="flex flex-col justify-between gap-5">

            <div class="space-y-4 min-h-[330px]">
              <div class="flex gap-3">
                <div
                  class="w-7 h-7 bg-gradient-to-br from-blue-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span class="text-white text-xs font-bold">NT</span>
                </div>
                <div class="flex-1">
                  <p class="text-sm text-slate-800 dark:text-white">
                    <strong>Estudiante</strong> compartió el progreso de la práctica
                  </p>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Hoy 12:00 PM</p>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Nuevo</span>
                    <span class="text-xs text-slate-400">→</span>
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">En progreso</span>
                  </div>
                </div>
              </div>

              <div class="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&faceindex=1&facepad=2&auto=format&ixlib=rb-4.0.3"
                  alt="User" class="w-7 h-7 rounded-full">
                <div class="flex-1">
                  <p class="text-sm text-slate-800 dark:text-white">
                    <strong>Profesor</strong> Si tienes alguna duda, revisa la última clase
                  </p>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Hoy 12:00 PM</p>
                </div>
              </div>

              <div class="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&faceindex=1&facepad=2&auto=format&ixlib=rb-4.0.3"
                  alt="User" class="w-7 h-7 rounded-full">
                <div class="flex-1">
                  <p class="text-sm text-slate-800 dark:text-white">
                    <strong>Profesor</strong> clase 23
                  </p>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Hoy 4:00 AM</p>
                </div>
              </div>
            </div>

            <div class="border-t border-slate-300 pt-5 dark:border-slate-800">
              <div class="flex flex-row gap-5">
                <input type="text" placeholder="Crear un comentario"
                  class="flex-1 px-2 py-2 bg-white border border-slate-300 w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                <button class="text-blue-600 hover:text-blue-700 mt-[5px] dark:text-white">
                  <Icon name="heroicons:paper-airplane" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
</template>
