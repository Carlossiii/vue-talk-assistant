<template>
    <div class="min-h-screen flex flex-col">
        <TheHeader />
        <main class="flex-1 p-8 max-w-[1200px] mx-auto w-full">
            <h1 class="text-center mb-12 text-[#2c3e50] text-4xl">About Us</h1>

            <section class="mb-12">
                <h2 class="text-[#42b883] mb-4 text-2xl">Our Story</h2>
                <p class="leading-relaxed text-[#34495e]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </section>

            <section class="mb-12">
                <h2 class="text-[#42b883] mb-4 text-2xl">Our Mission</h2>
                <p class="leading-relaxed text-[#34495e]">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>

            <section class="mt-16">
                <h2 class="text-[#42b883] mb-4 text-2xl">Our Team</h2>
                <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-8">
                    <div v-for="member in teamMembers" 
                         :key="member.id"
                         class="text-center p-4 bg-[#f8f9fa] rounded-lg transition-transform duration-300 hover:-translate-y-[5px]">
                        <img :src="member.avatar" 
                             :alt="member.name"
                             class="w-[150px] h-[150px] rounded-full mb-4 mx-auto">
                        <h3 class="text-[#2c3e50] mb-2">{{ member.name }}</h3>
                        <p class="text-[#666]">{{ member.role }}</p>
                    </div>
                </div>
            </section>
        </main>
        <TheFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '@/components/common/TheHeader.vue'
import TheFooter from '@/components/common/TheFooter.vue'

export default defineComponent({
    name: 'AboutView',
    components: {
        TheHeader,
        TheFooter
    },
    data() {
        return {
            teamMembers: [
                {
                    id: 1,
                    name: 'John Doe',
                    role: 'CEO',
                    avatar: 'https://via.placeholder.com/150'
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    role: 'CTO',
                    avatar: 'https://via.placeholder.com/150'
                },
                {
                    id: 3,
                    name: 'Mike Johnson',
                    role: 'Lead Developer',
                    avatar: 'https://via.placeholder.com/150'
                }
            ]
        }
    }
})
</script>