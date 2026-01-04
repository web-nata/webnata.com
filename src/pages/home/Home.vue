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

  <div class="flex justify-center mt-60 bg-background/40 backdrop-blur-md shadow-2xl overflow-hidden
           w-full">
    <div class="relative max-w-7xl  grid grid-cols-1 lg:grid-cols-2 gap-10 py-28
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
      <div class="">
        <a href="#portfolio" class="bg-accent text-white px-6 py-3 font-semibold
            hover:bg-accent/90 transition">
          See Our Work
        </a>
      </div>

    </div>
  </div>

<!-- About Us Section - Alternative Design -->
<section class="relative px-6 py-28">
  <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
    
    <!-- Text Column -->
    <div class="flex-1 text-white">
      <h2 class="text-5xl lg:text-6xl font-playfair italic mb-6">
        Who We Are
      </h2>
      <p class="text-xl lg:text-2xl leading-relaxed mb-8">
        We’re a <span class="font-playfair italic text-accent">Brisbane-based duo</span> passionate about helping small businesses shine online.  
        We combine <span class="font-playfair italic text-accent">creative design</span> and <span class="font-playfair italic text-accent">smart development</span> 
        to build websites that are <span class="font-playfair italic text-accent">fast</span>, <span class="font-playfair italic text-accent">modern</span>, and <span class="font-playfair italic text-accent">affordable</span>.
      </p>

      <!-- CTA -->
      <a href="#our-team"
         class="inline-block bg-accent text-white px-6 py-3 font-semibold
                hover:bg-accent/90 transition transform hover:scale-105">
        Meet Our Team
      </a>
    </div>

    <!-- Image Column -->
    <div class="flex-1 relative">
      <div class="relative w-full max-w-md mx-auto">
        <img src="/images/brisbane.webp" alt="Our Team" 
             class="rounded-3xl shadow-2xl animate-fadeUp" />
        <!-- subtle floating effect -->
        <div class="absolute -inset-6 -z-10 bg-primary-500/20 blur-3xl rounded-2xl animate-fadeUp"></div>
      </div>
    </div>

  </div>
</section>



</template>

<script setup>
import VantaBackground from '@/components/VantaBackground.vue'
</script>
