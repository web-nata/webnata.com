<template>
  <div ref="vantaRef" class="fixed inset-0 -z-10"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const vantaRef = ref(null);
let vantaEffect = null;

onMounted(() => {
  if (window.VANTA && window.VANTA.FOG) {
    vantaEffect = window.VANTA.FOG({
      el: vantaRef.value,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x88e1ff,
      midtoneColor: 0x6b9cff,
      lowlightColor: 0x3b5eff,
      baseColor: 0x1b2a4a
    });
  }
});

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy();
});
</script>
