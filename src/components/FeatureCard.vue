<template>
    <div class="bg-white rounded-lg p-8 mb-6 shadow-lg max-w-2xl">
        <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
        <p class="text-lg text-gray-700 leading-relaxed mb-4">{{ description }}</p>
        <p class="text-gray-600 text-sm">Learn more about how this feature can help improve your workflow and boost productivity.</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FeatureCard',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
})
</script>