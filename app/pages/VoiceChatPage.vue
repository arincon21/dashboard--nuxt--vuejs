<template>
       <div class="h-screen p-4 bg-white dark:bg-slate-900">
        <VoiceChatApp />
      </div>
</template>

<script setup>
  import VoiceChatApp from '@/components/VoiceChatApp.vue'
  useHead({
    title: 'Lingo Questo - Voice Chat',
    meta: [
      { name: 'description', content: 'Voice Chat de Lingo Questo' }
    ]
  })
</script>
