<template>
    <footer class="bg-gray-50 p-4 text-center mt-auto">
        <p>&copy; {{ currentYear }} Your Company Name. All rights reserved.</p>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TheFooter',
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
})
</script>