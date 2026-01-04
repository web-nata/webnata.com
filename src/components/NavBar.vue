<template>
  <nav class="fixed top-0 left-0 w-full z-20 bg-transparent">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-16 relative">
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-12 uppercase font-mono text-white text-lg tracking-widest">
        <a href="#home" class="hover:text-secondary transition">Home</a>
        <a href="#portfolio" class="hover:text-secondary transition">Portfolio</a>
        <a href="#our-team" class="hover:text-secondary transition">Our Team</a>
        <a href="#contact" class="hover:text-secondary transition">Contact</a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center z-50">
        <button @click="toggleMenu" class="focus:outline-none">
          <!-- Hamburger -->
          <svg v-if="!isOpen" class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- X icon -->
          <svg v-else class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Fullscreen Mobile Overlay -->
    <transition name="fade-slide">
      <div v-if="isOpen"
        class="fixed inset-0 bg-black/90 flex flex-col justify-center items-center text-2xl text-white z-40"
        @click="toggleMenu">
        <transition-group name="link-slide" tag="div" class="flex flex-col items-center space-y-8" :key="isOpen">
          <a v-for="link in links" :key="link.id" :href="`#${link.id}`" class="hover:text-secondary transition"
            @click.prevent="scrollTo(link.id)">
            {{ link.label }}
          </a>
        </transition-group>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'our-team', label: 'Our Team' },
  { id: 'contact', label: 'Contact' }
]

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function scrollTo(id) {
  const element = document.getElementById(id)
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Overlay fade animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
}

.fade-slide-leave-to {
  opacity: 0;
}

/* Link slide animation */
.link-slide-enter-active,
.link-slide-leave-active {
  transition: all 0.4s ease;
}

.link-slide-enter-from,
.link-slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Optional staggered delay for each link */
.link-slide-enter-active>*:nth-child(1) {
  transition-delay: 0.05s;
}

.link-slide-enter-active>*:nth-child(2) {
  transition-delay: 0.15s;
}

.link-slide-enter-active>*:nth-child(3) {
  transition-delay: 0.25s;
}

.link-slide-enter-active>*:nth-child(4) {
  transition-delay: 0.35s;
}
</style>
