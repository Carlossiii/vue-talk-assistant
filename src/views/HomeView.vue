<template>
  <div class="min-h-screen flex flex-col bg-[#f5f7fa]">
    <TheHeader />

    <!-- Main Content -->
    <main class="flex-1 p-8 max-w-[1200px] mx-auto w-full">
      <!-- Welcome Section -->
      <section
        class="text-center py-12 px-8 bg-white rounded-lg shadow-md mb-8 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg"
      >
        <h1 class="text-4xl text-[#2c3e50] mb-4">Welcome to Our Platform</h1>
        <p class="text-[#666] text-lg">
          Discover amazing features that will transform your experience
        </p>
      </section>

      <!-- Features Grid -->
      <section class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 my-8">
        <feature-card
          v-for="feature in features"
          :key="feature.id"
          :title="feature.title"
          :description="feature.description"
        />
      </section>

      <!-- Statistics Section -->
      <section
        class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-9 text-center py-12 px-8 bg-white rounded-lg shadow-md mb-8 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg"
      >
        <div class="stat-item" v-for="stat in statistics" :key="stat.id">
          <h3 class="text-4xl text-[#42b883] mb-2">{{ stat.value }}</h3>
          <p>{{ stat.label }}</p>
        </div>
      </section>

      <!-- Call to Action -->
      <section
        class="text-center py-12 px-8 bg-gradient-to-br from-[#42b883] to-[#347474] text-white rounded-lg shadow-md mb-8 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg"
      >
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied customers today</p>
        <div class="flex gap-4 justify-center mt-8">
          <button
            class="bg-white text-[#42b883] px-8 py-3 rounded font-bold transition-transform hover:-translate-y-[2px]"
          >
            Sign Up Now
          </button>
          <button
            class="bg-transparent border-2 border-white text-white px-8 py-3 rounded font-bold transition-transform hover:-translate-y-[2px]"
          >
            Contact Sales
          </button>
        </div>
      </section>
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/common/TheHeader.vue";
import FeatureCard from "@/components/FeatureCard.vue";
import TheFooter from "@/components/common/TheFooter.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TheHeader,
    FeatureCard,
    TheFooter,
  },
  data() {
    return {
      features: [
        {
          id: 1,
          title: "Smart Analytics",
          description: "Powerful insights for data-driven decisions",
        },
        {
          id: 2,
          title: "Cloud Integration",
          description: "Seamless connectivity across platforms",
        },
        {
          id: 3,
          title: "Advanced Security",
          description: "Enterprise-grade protection for your data",
        },
        {
          id: 4,
          title: "24/7 Support",
          description: "Round-the-clock expert assistance",
        },
      ],
      statistics: [
        { id: 1, value: "10K+", label: "Active Users" },
        { id: 2, value: "95%", label: "Satisfaction Rate" },
        { id: 3, value: "24/7", label: "Support Available" },
        { id: 4, value: "50+", label: "Countries Served" },
      ],
    };
  },
});
</script>

<style scoped>
/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    height: 300px;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-buttons {
    flex-direction: column;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
    margin: 0.5rem 0;
  }
}
</style>
