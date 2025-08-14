<template>
  <div class="min-h-screen flex">
    <Sidebar />
    <div class="flex-1 flex flex-col min-h-screen ml-72">
      <Header />
      <div class="flex-1 flex">
        <StudentInfo />
        <MainContent />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue';
import Header from '~/components/Header.vue';
import StudentInfo from '~/components/StudentInfo.vue';
import MainContent from '~/components/MainContent.vue';
</script>
