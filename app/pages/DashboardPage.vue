<template>
    <div class="flex-1 flex">
        <StudentInfo />
        <MainContent />
    </div>
</template>

<script setup lang="ts">
// El layout por defecto se encarga del Header y el Sidebar.
useHead({
  title: 'Lingo Questo - Dashboard',
  meta: [
    { name: 'description', content: 'Dashboard de Lingo Questo' }
  ]
})
</script>