<template>
  <div id="vanta-bg" class="relative min-h-screen w-full flex justify-center items-center overflow-hidden">
    <!-- Overlay for better contrast -->
    <div class="absolute inset-0 bg-black/30 z-10"></div>

    <!-- Title -->
    <h1 class="relative z-20 text-gray-100 text-9xl italic font-semibold font-playfair text-center">
      Web Nata
    </h1>
    
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

let vantaEffect = null;

onMounted(() => {
  // Make sure the global scripts are loaded
  if (window.VANTA && window.VANTA.FOG) {
    vantaEffect = window.VANTA.FOG({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x88e1ff, // bright accent
      midtoneColor: 0x6b9cff,   // medium fog
      lowlightColor: 0x3b5eff,  // darker fog
      baseColor: 0x1b2a4a        // main background
    });
  }
});

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy();
});
</script>

<!-- Include these in your index.html BEFORE your app script -->
<!--
-->
