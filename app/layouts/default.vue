<template>
    <div class="min-h-screen flex">
        <Sidebar />
        <div class="flex-1 flex flex-col min-h-screen ml-72">
            <Header />
            <slot />
        </div>
    </div>
</template>

<script setup>
// Los componentes Sidebar y Header son auto-importados por Nuxt.
</script>

<style>
/* Estilos globales para el layout si son necesarios */
</style>