<template>
  <div class="min-h-screen flex">
    <!-- Sidebar -->
    <aside class="fixed h-screen w-72 bg-white border-r border-gray-300 flex-shrink-0 flex flex-col z-10">
      <div class="p-6 flex-1 flex flex-col">
        <div class="flex-grow">
          <!-- Logo -->
          <div class="flex items-center gap-2 mb-8">
            <div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">LQ</span>
            </div>
            <span class="font-bold text-[25px]">Lingo Quest</span>
          </div>

          <!-- Navigation -->
          <nav class="space-y-1">

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
              <Icon name="heroicons:home" class="w-5 h-5" />
              Inicio
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">
              <Icon name="heroicons:user-group" class="w-5 h-5" />
              Estudiantes
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
              <Icon name="heroicons:academic-cap" class="w-5 h-5" />
              Clases
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
              <Icon name="heroicons:presentation-chart-bar" class="w-5 h-5" />
              Escenarios
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
              <Icon name="heroicons:book-open" class="w-5 h-5" />
              Módulo
            </a>

          </nav>

        </div>

        <!-- Bottom Section -->
        <div class="space-y-2  pt-5 border-t border-t-gray-300">
          <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <Icon name="heroicons:cog" class="w-5 h-5" />
            Configuración
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <Icon name="heroicons:question-mark-circle" class="w-5 h-5" />
            Ayuda y Soporte
            <span class="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">3</span>
          </a>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-h-screen ml-72">
      <!-- Header -->
      <header class="sticky top-0 bg-white border-b border-gray-300 px-6 py-4 z-10">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">

            <!-- Back Button -->
            <button class="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <span class="text-sm">Estudiantes</span>
              <span class="text-gray-400">/</span>
              <span class="text-sm">Lista de módulos</span>
              <span class="text-gray-400">/</span>
              <span class="text-sm">Información del módulo</span>
              <span class="text-gray-400">/</span>
              <span class="text-sm"><b>Información de la práctica</b></span>
            </button>
          </div>

          <div class="flex items-center gap-4">
            <div class="relative">
              <Icon name="heroicons:magnifying-glass" class="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input type="text" placeholder="Busca o escribe un comando" class="pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            </div>

            <HeadlessMenu as="div" class="relative inline-block text-left mt-1">
              <div>
                <HeadlessMenuButton class=" text-gray-400 hover:text-gray-600">
                  <Icon name="circle-flags:es" class="w-5 h-5" />
                </HeadlessMenuButton>
              </div>

              <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <HeadlessMenuItems
                  class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="px-1 py-1">
                    <HeadlessMenuItem v-slot="{ active }">
                      <button
                        :class="[active ? 'bg-gray-100' : '', 'group flex w-full items-center rounded-md px-2 py-2 text-sm',]">
                        <Icon name="circle-flags:us" class="w-5 h-5 mr-2" />
                        English
                      </button>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <button
                        :class="[active ? 'bg-gray-100' : '', 'group flex w-full items-center rounded-md px-2 py-2 text-sm',]">
                        <Icon name="circle-flags:es" class="w-5 h-5 mr-2" />
                        Español
                      </button>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <button
                        :class="[active ? 'bg-gray-100' : '', 'group flex w-full items-center rounded-md px-2 py-2 text-sm',]">
                        <Icon name="circle-flags:fr" class="w-5 h-5 mr-2" />
                        Français
                      </button>
                    </HeadlessMenuItem>
                  </div>
                </HeadlessMenuItems>
              </transition>
            </HeadlessMenu>
            <div class="flex items-center justify-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&faceindex=1&facepad=2&auto=format&ixlib=rb-4.0.3"
                alt="User" class="w-8 h-8 rounded-full">
              <div>
                <div class="text-xs"><b>Teacher Danny</b></div>
                <div class="text-xs">Cerrar sesión</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <div class="flex-1 flex">
        <!-- Left Panel - Student Info -->
        <div class="w-80 bg-white border-r border-gray-300 p-6">
          <!-- Student Profile -->
          <div class="text-center mb-6">
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-white text-2xl font-bold">NT</span>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Nombre del Estudiante</h2>
            <p class="text-gray-500 text-sm">Grupo | #F528352</p>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-2 mb-6">
            <button
              class="flex-1 text-xs flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
              <Icon name="heroicons:envelope" class="w-4 h-4" />
              Correo
            </button>
            <button
              class="flex-1 text-xs flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 hover:bg-green-600">
              <Icon name="heroicons:phone" class="w-4 h-4" />
              WhatsApp
            </button>
            <button class="px-2 py-2 border border-gray-300 hover:bg-gray-50">
              <Icon name="heroicons:ellipsis-vertical" class="w-4 h-4" />
            </button>
          </div>

          <!-- Last Activity -->
          <div class="mb-6 text-center">
            <p class="text-sm text-gray-500 mb-2">
              Última actividad
            </p>
            <p class="text-sm text-gray-500 mb-2">
              <strong>28 de julio de 2024 a las 09:00 a.m.</strong>
            </p>
          </div>

          <!-- Tabs -->
          <div class="flex border-y border-gray-300 mb-6 -mx-6">
            <button class="px-9 py-2 text-sm font-medium text-gray-900 border-b-2 border-gray-900">
              Comentarios
            </button>
            <button class="px-9 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">
              Actividades
            </button>
          </div>

          <!-- Activity Timeline -->
          <div class="flex flex-col justify-between gap-5">

            <div class="space-y-4 min-h-[330px]">
              <div class="flex gap-3">
                <div
                  class="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span class="text-white text-xs font-bold">NT</span>
                </div>
                <div class="flex-1">
                  <p class="text-sm text-gray-900">
                    <strong>Estudiante</strong> compartió el progreso de la práctica
                  </p>
                  <p class="text-xs text-gray-500">Hoy 12:00 PM</p>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Nuevo</span>
                    <span class="text-xs text-gray-400">→</span>
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">En progreso</span>
                  </div>
                </div>
              </div>

              <div class="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&faceindex=1&facepad=2&auto=format&ixlib=rb-4.0.3"
                  alt="User" class="w-7 h-7 rounded-full">
                <div class="flex-1">
                  <p class="text-sm text-gray-900">
                    <strong>Profesor</strong> Si tienes alguna duda, revisa la última clase
                  </p>
                  <p class="text-xs text-gray-500">Hoy 12:00 PM</p>
                </div>
              </div>

              <div class="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&faceindex=1&facepad=2&auto=format&ixlib=rb-4.0.3"
                  alt="User" class="w-7 h-7 rounded-full">
                <div class="flex-1">
                  <p class="text-sm text-gray-900">
                    <strong>Profesor</strong> clase 23
                  </p>
                  <p class="text-xs text-gray-500">Hoy 4:00 AM</p>
                </div>
              </div>
            </div>

            <div class="border-t border-t-gray-300 pt-5">
              <div class="flex flex-row gap-5">
                <input type="text" placeholder="Crear un comentario"
                  class="flex-1 px-2 py-2 bg-gray-50 border border-gray-300 w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <button class="text-blue-600 hover:text-blue-800 mt-[5px]">
                  <Icon name="heroicons:paper-airplane" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <!-- Activity Requested 
          <div class="mt-8 p-4 bg-gray-50">
            <div class="flex items-center gap-2 mb-2">
              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                </path>
              </svg>
              <span class="text-sm font-medium text-gray-700">ACTIVIDAD SOLICITADA</span>
            </div>
            <p class="text-sm text-gray-600 mb-1"><strong>Propósito de la Actividad</strong></p>
            <p class="text-sm text-gray-900 font-medium mb-3">Práctica de Entrevista de AWS</p>
            <p class="text-sm text-gray-600 mb-1"><strong>Objetivo de Puntuación</strong></p>
            <p class="text-sm text-gray-900 font-medium">79 Puntos</p>
          </div> -->
        </div>

        <!-- Right Panel - Main Content -->
        <div class="flex-1 p-6">

          <!-- Header -->
          <div class="mb-6">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Preparing for a Startup Interview</h1>
            <div class="flex items-center gap-4 text-sm text-gray-600 mb-2">
              <span>Creado el: <strong>7 Agosto 2025 a las 11:46 AM</strong></span>
              <div class="flex items-center gap-2">
                <div class="flex -space-x-1">
                  Profesor asignado:
                </div>
                <button class="text-blue-600 text-sm font-medium hover:text-blue-800">Teacher Danny</button>
              </div>
            </div>
            <div class="flex items-center gap-5">
              <span class="text-gray-500">Nota para esta práctica: <b>10 Pts.</b></span>
              <span class="text-green-500 border border-green-500 rounded-full px-4 py-1">
                Completado
              </span>
            </div>
          </div>

          <!-- Navigation Tabs -->
          <div class="flex gap-2 border-y border-gray-300 mb-6 -mx-6">
            <button class="px-7 py-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">Resumen</button>
            <button class="px-7 py-3 text-sm font-medium text-gray-500 hover:text-gray-900">Palabras y frases</button>
            <button class="px-7 py-3 text-sm font-medium text-gray-500 hover:text-gray-900">Conversación</button>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-4 gap-6 mb-8">

            <div class="p-6 border border-gray-300 bg-gray-50">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="heroicons:document-text" class="w-5 h-5 text-gray-400" />
                <span class="text-sm text-gray-500">Duración total</span>
              </div>
              <div class="text-3xl font-bold text-gray-900">5 Min</div>
            </div>

            <div class="p-6 border border-gray-300 bg-gray-50">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="heroicons:clock" class="w-5 h-5 text-gray-400" />
                <span class="text-sm text-gray-500">Tiempo hablando</span>
              </div>
              <div class="text-3xl font-bold text-gray-900">4 Min</div>
            </div>

            <div class="p-6 border border-gray-300 bg-gray-50">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 text-gray-400" />
                <span class="text-sm text-gray-500">Mensajes</span>
              </div>
              <div class="text-3xl font-bold text-gray-900">12</div>
            </div>

            <div class="p-6 border border-gray-300 bg-gray-50">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-gray-400" />
                <span class="text-sm text-gray-500">Palabras por minuto</span>
              </div>
              <div class="text-3xl font-bold text-gray-900">121</div>
            </div>
          </div>

          <h1 class="text-lg font-semibold text-gray-900 mb-5 pt-5 border-t border-t-gray-300">Ayudas proporcionadas
          </h1>

          <!-- Documents List -->
          <div class="flex flex-col gap-4">
            <!-- Document Item 1 -->
            <div class="flex items-center justify-between p-4 border border-gray-300">
              <div class="flex items-center gap-3">
                <Icon name="heroicons:document-text" class="w-8 h-8 text-blue-600" />
                <div>
                  <h4 class="font-medium text-gray-900">Ver transcripción</h4>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>

            <!-- Document Item 2 -->
            <div class="flex items-center justify-between p-4 border border-gray-300">
              <div class="flex items-center gap-3">
                <Icon name="heroicons:document-text" class="w-8 h-8 text-blue-600" />
                <div>
                  <h4 class="font-medium text-gray-900">Ver sugerencias</h4>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>

            <!-- Document Item 3 -->
            <div class="flex items-center justify-between p-4 border border-gray-300">
              <div class="flex items-center gap-3">
                <Icon name="heroicons:document-text" class="w-8 h-8 text-blue-600" />
                <div>
                  <h4 class="font-medium text-gray-900">Ver traducción</h4>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>

            <!-- Document Item 3 -->
            <div class="flex items-center justify-between p-4 border border-gray-300">
              <div class="flex items-center gap-3">
                <Icon name="heroicons:document-text" class="w-8 h-8 text-blue-600" />
                <div>
                  <h4 class="font-medium text-gray-900">Usar idioma nativo</h4>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="heroicons:check-circle" class="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>

<style scoped>
/* Additional custom styles if needed */
</style>