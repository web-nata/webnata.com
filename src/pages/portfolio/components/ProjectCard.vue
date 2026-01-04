<template>
  <section class="relative w-full">
    <div
      class="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
    >
      <!-- IMAGE -->
      <div
        class="flex justify-center"
        :class="reverse ? 'lg:order-2' : 'lg:order-1'"
      >
        <!-- width lock -->
        <div class="relative w-full max-w-xl group">
          <img
            :src="image"
            :alt="title"
            class="w-full rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          />

          <div
            class="absolute inset-0 -z-10 bg-accent/20 blur-3xl rounded-full opacity-70"
          />
        </div>
      </div>

      <!-- TEXT -->
      <div
        class="flex justify-center"
        :class="reverse ? 'lg:order-1' : 'lg:order-2'"
      >
        <!-- width lock -->
        <div class="w-full max-w-xl text-white flex flex-col justify-center">
          <span class="uppercase tracking-widest text-sm text-white/60 mb-4">
            UX · Performance · Conversion
          </span>

          <h3 class="text-4xl lg:text-5xl font-playfair mb-6">
            {{ title }}
          </h3>

          <p class="text-lg lg:text-xl leading-relaxed text-white/85 mb-10">
            {{ description }}
          </p>

          <div class="flex items-center gap-6">
            <a
              v-if="liveUrl"
              :href="liveUrl"
              target="_blank"
              class="inline-flex items-center gap-2 bg-accent px-8 py-3 rounded-lg font-semibold transition
                     hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(236,72,153,0.35)]"
            >
              View Live →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  liveUrl: String,
  caseStudyUrl: String,
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>
