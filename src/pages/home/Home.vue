<template>
  <VantaBackground />

  <div class="relative flex flex-col justify-center items-center mt-80">
    <h1 class="text-gray-100 text-9xl italic font-semibold font-playfair text-center">
      Web Nata
    </h1>
    <h2 class="text-gray-200 font-sans text-3xl mt-6 text-center">
      Crafting digital solutions for small businesses.
    </h2>

  </div>
  <div class="flex mt-8 gap-6 justify-center">
    <a href="#contact" class="bg-accent text-white px-8 py-4 text-xl font-semibold
            hover:bg-accent/90 transition">
      Get a Free Quote
    </a>
    <a href="#portfolio" class="border border-accent text-accent px-8 py-4 text-xl font-bold
            hover:bg-accent/10 transition">
      View Our Work
    </a>
  </div>

  <div class="flex justify-center mt-80 px-6">
    <div class="relative bg-background/20 backdrop-blur-md border border-background shadow-2xl overflow-hidden
           max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-10
           ">
      <!-- Text -->
      <div class="flex flex-col justify-center text-white">
        <h3 class="text-4xl lg:text-5xl font-sans leading-snug">
          We help small businesses<br />
          find their place online with
          <span class=" text-accent italic text-5xl ">
            fast
          </span>,
          <span class="font-bold text-accent text-5xl ">
            modern
          </span> &
          <span class="underline text-accent text-5xl ">
            affordable
          </span>websites
        </h3>
      </div>

      <!-- Image -->
      <div class="relative flex justify-center items-center">
        <img src="/images/responsive.png" alt="Website Showcase"
          class="w-[300px] lg:w-[420px] drop-shadow-2xl rounded-xl animate-fadeUp" />
        <!-- subtle glow behind image -->
        <div class="absolute -inset-8 -z-10 bg-primary-500/20 blur-3xl rounded-full"></div>
      </div>
      <div class="mt-6">
  <a href="#portfolio"
     class="bg-accent text-white px-6 py-3 font-semibold
            hover:bg-accent/90 transition">
    See Our Work
  </a>
</div>

    </div>
  </div>

  <div class="min-h-screen"></div>
</template>

<script setup>
import VantaBackground from '@/components/VantaBackground.vue'
</script>
