<template>
  <section class="relative w-full">
    <div class="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <!-- IMAGE / CAROUSEL -->
      <div class="flex justify-center" :class="reverse ? 'lg:order-2' : 'lg:order-1'">
        <div class="relative w-full max-w-xl group">
          <transition name="fade" mode="out-in">
            <img
              :key="currentImage"
              :src="currentImage"
              :alt="title"
              class="w-full rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </transition>

          <!-- Glow behind image -->
          <div class="absolute inset-0 -z-10 bg-accent/20 blur-3xl rounded-full opacity-70" />

          <!-- Carousel Controls -->
          <button
            v-if="images.length > 1"
            @click="prevImage"
            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-accent/40 text-white rounded-full p-2 hover:bg-accent/70 transition"
          >
            <ChevronLeft class="w-6 h-6" />
          </button>
          <button
            v-if="images.length > 1"
            @click="nextImage"
            class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-accent/40 text-white rounded-full p-2 hover:bg-accent/70 transition"
          >
            <ChevronRight class="w-6 h-6" />
          </button>

          <!-- Dots -->
          <div v-if="images.length > 1" class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            <span
              v-for="(img, idx) in images"
              :key="idx"
              class="w-2 h-2 rounded-full"
              :class="idx === currentIndex ? 'bg-accent' : 'bg-accent/40'"
            ></span>
          </div>
        </div>
      </div>

      <!-- TEXT -->
      <div class="flex justify-center" :class="reverse ? 'lg:order-1' : 'lg:order-2'">
        <div class="w-full max-w-xl text-white flex flex-col justify-center">
          <span class="uppercase tracking-widest text-sm text-white/60 mb-4">
            {{ keywords?.join(' · ') }}
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
import { ref, computed } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const props = defineProps({
  title: String,
  description: String,
  image: String, // fallback for single image
  images: {
    type: Array,
    default: () => []
  },
  liveUrl: String,
  reverse: {
    type: Boolean,
    default: false
  },
  keywords: Array
});

// Combine single image + images array
const allImages = computed(() =>
  props.images && props.images.length
    ? props.images
    : props.image
    ? [props.image]
    : []
);

const images = allImages.value;
const currentIndex = ref(0);

const currentImage = computed(() => images[currentIndex.value] || "");

const nextImage = () => {
  if (!images.length) return;
  currentIndex.value = (currentIndex.value + 1) % images.length;
};
const prevImage = () => {
  if (!images.length) return;
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
