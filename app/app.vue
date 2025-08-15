<template>
  <div :class="{ 'dark': colorMode.value === 'dark' }">
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
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