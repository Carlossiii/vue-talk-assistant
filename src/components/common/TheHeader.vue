<template>
    <header class="bg-gray-50 p-4">
        <nav class="flex justify-between items-center max-w-7xl mx-auto">
            <router-link to="/" class="text-gray-800 hover:text-gray-600">Logo</router-link>
            <div class="flex gap-4">
                <router-link to="/" class="text-gray-800 hover:text-gray-600 no-underline">Home</router-link>
                <router-link to="/about" class="text-gray-800 hover:text-gray-600 no-underline">About</router-link>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TheHeader'
})
</script>