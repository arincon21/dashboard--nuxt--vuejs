<template>
  <div :class="{ 'dark': colorMode.value === 'dark' }">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>

<style>
body {
  @apply bg-white dark:bg-gray-900;
}
</style>