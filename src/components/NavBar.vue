<template>
  <nav class="fixed top-0 left-0 w-full z-20 bg-transparent">
    <div class="mx-auto px-6 flex items-center h-16 relative">

      <!-- Brand (left) -->
      <router-link
        to="/"
        class="absolute left-6 text-white/90 font-playfair text-xl tracking-wide hover:text-accent transition"
      >
        Web Nata
      </router-link>

      <!-- Desktop Menu (centered) -->
      <div
        class="hidden md:flex mx-auto space-x-12 uppercase font-mono text-white text-lg tracking-widest"
      >
        <router-link to="/" class="hover:text-accent transition">
          Home
        </router-link>
        <router-link to="/portfolio" class="hover:text-accent transition">
          Portfolio
        </router-link>
        <router-link to="/team" class="hover:text-accent transition">
          Our Team
        </router-link>
        <router-link to="/contact" class="hover:text-accent transition">
          Contact
        </router-link>
      </div>

      <!-- Mobile Menu Button (right) -->
      <div class="md:hidden absolute right-6 flex items-center z-50">
        <button @click="toggleMenu" class="focus:outline-none">
          <!-- Hamburger -->
          <svg
            v-if="!isOpen"
            class="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <!-- Close -->
          <svg
            v-else
            class="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Overlay -->
    <transition name="fade-slide">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/90 flex flex-col justify-center items-center text-white z-40"
      >
        <!-- Brand -->
        <div class="mb-12 font-playfair text-3xl tracking-wide">
          Web Nata
        </div>

        <!-- Links -->
        <transition-group
          name="link-slide"
          tag="div"
          class="flex flex-col items-center space-y-8 text-2xl uppercase font-mono tracking-widest"
        >
          <router-link
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="hover:text-accent transition"
            @click.native="toggleMenu"
          >
            {{ link.label }}
          </router-link>
        </transition-group>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' }
]

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Overlay fade */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
}

/* Link slide */
.link-slide-enter-active,
.link-slide-leave-active {
  transition: all 0.4s ease;
}
.link-slide-enter-from,
.link-slide-leave-to {
  opacity: 0;
  transform: translateY(16px);
}

/* Staggered animation */
.link-slide-enter-active > *:nth-child(1) { transition-delay: 0.05s; }
.link-slide-enter-active > *:nth-child(2) { transition-delay: 0.15s; }
.link-slide-enter-active > *:nth-child(3) { transition-delay: 0.25s; }
.link-slide-enter-active > *:nth-child(4) { transition-delay: 0.35s; }
</style>
