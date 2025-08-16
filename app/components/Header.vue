<template>
  <header
    class="sticky top-0 bg-white border-b border-slate-300 px-6 py-4 z-10 dark:bg-slate-900 dark:border-slate-800">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">

        <!-- Breadcrumbs -->
        <div v-if="route.path === '/DashboardPage'">
            <button class="flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                <span class="text-sm">Lista de módulos</span>
                <span class="text-slate-400">/</span>
                <span class="text-sm">Información del módulo</span>
                <span class="text-slate-400">/</span>
                <span class="text-sm">Estudiantes</span>
                <span class="text-slate-400">/</span>
                <span class="text-sm"><b>Información de la práctica</b></span>
            </button>
        </div>
        <div v-else-if="route.path === '/VoiceChatPage'">
            <button class="flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                <span class="text-sm">Home</span>
                <span class="text-slate-400">/</span>
                <span class="text-sm"><b>Voice Chat</b></span>
            </button>
        </div>
      </div>

      <div class="flex items-center gap-1">
        <div class="relative mr-2">
          <Icon name="heroicons:magnifying-glass" class="w-5 h-5 text-slate-400 absolute left-3 top-2" />
          <input type="text" placeholder="Busca o escribe un comando"
            class="pl-10 pr-4 py-2 bg-white border border-slate-300 w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-slate-800 dark:border-slate-700 dark:text-white">
        </div>

        <HeadlessMenu as="div" class="relative inline-block text-left mt-1">
          <div>
            <HeadlessMenuButton class=" text-slate-400 hover:text-slate-600">
              <Icon name="circle-flags:es" class="w-5 h-5" />
            </HeadlessMenuButton>
          </div>

          <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <HeadlessMenuItems
              class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-slate-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 dark:ring-slate-700">
              <div class="px-1 py-1">
                <HeadlessMenuItem v-slot="{ active }">
                  <button
                    :class="[active ? 'bg-slate-100 dark:bg-slate-700' : '', 'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white',]">
                    <Icon name="circle-flags:us" class="w-5 h-5 mr-2" />
                    English
                  </button>
                </HeadlessMenuItem>
                <HeadlessMenuItem v-slot="{ active }">
                  <button
                    :class="[active ? 'bg-slate-100 dark:bg-slate-700' : '', 'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white',]">
                    <Icon name="circle-flags:es" class="w-5 h-5 mr-2" />
                    Español
                  </button>
                </HeadlessMenuItem>
                <HeadlessMenuItem v-slot="{ active }">
                  <button
                    :class="[active ? 'bg-slate-100 dark:bg-slate-700' : '', 'group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white',]">
                    <Icon name="circle-flags:fr" class="w-5 h-5 mr-2" />
                    Français
                  </button>
                </HeadlessMenuItem>
              </div>
            </HeadlessMenuItems>
          </transition>
        </HeadlessMenu>
        <button class="p-2 text-slate-400 mt-1 hover:text-slate-600" @click="toggleColorMode">
          <Icon v-if="colorMode.value === 'dark'" name="heroicons:sun" class="w-5 h-5" />
          <Icon v-else name="heroicons:moon" class="w-5 h-5" />
        </button>
        <div class="flex items-center justify-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&faceindex=1&facepad=2&auto=format&ixlib=rb-4.0.3"
            alt="User" class="w-8 h-8 rounded-full">
          <div>
            <div class="text-xs text-slate-800 dark:text-white"><b>Teacher Danny</b></div>
            <button class="text-xs text-slate-500 dark:text-slate-400" @click="logout">Cerrar sesión</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

function logout() {
  navigateTo('/')
}

const route = useRoute()
</script>
