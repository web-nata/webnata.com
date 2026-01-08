<template>
  <VantaBackground />

  <!-- HEADER -->
  <section class="flex flex-col relative px-6 py-24">
    <div class="max-w-6xl mx-auto text-center text-white">
      <div class="mb-6 flex items-center gap-3 text-white/70">
      <span class="w-10 h-px bg-accent"></span>
      <span class="tracking-widest uppercase text-sm">
        Our Team
      </span>
      <span class="w-10 h-px bg-accent"></span>
    </div>
      
      <h1 class="text-4xl md:text-5xl font-playfair">
        The duo behind Web Nata
      </h1>

      <p class="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
        Two brains. One mission. Far too much coffee.
      </p>
    </div>
  </section>

  <!-- LUIS — IMAGE LEFT -->
  <section
    class="relative bg-background/30 backdrop-blur-lg shadow-2xl overflow-hidden w-full"
  >
    <div
      class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6 py-32"
    >
      <!-- IMAGE -->
      <div class="relative flex justify-center items-center">
        <img
          src="/images/team/luis.JPG"
          alt="Luis"
          class="w-[420px] rounded-3xl drop-shadow-2xl"
        />
        <div
          class="absolute -inset-10 -z-10 bg-primary-500/20 blur-3xl rounded-full"
        ></div>
      </div>

      <!-- TEXT -->
      <div class="flex flex-col justify-center text-white max-w-xl">
        <p class="uppercase tracking-widest text-sm text-white/60 mb-4">
          Master Developer
        </p>

        <h3 class="text-4xl lg:text-6xl font-playfair mb-6">
          Luís
        </h3>

        <p class="text-lg text-white/80 mb-2">
          Brains of the operation.
        </p>

        <p class="text-lg text-white/70">
          Master of computers. Breaks things so he can rebuild them faster.
        </p>
      </div>
    </div>
  </section>

  <!-- MARIA — IMAGE RIGHT -->
  <section class="relative px-6 py-32">
    <div
      class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
    >
      <!-- TEXT -->
      <div class="text-white max-w-xl order-2 lg:order-1">
        <p class="uppercase tracking-widest text-sm text-white/60 mb-4">
          The Asset of the Operation
        </p>

        <h3 class="text-4xl lg:text-6xl font-playfair mb-6">
          Maria
        </h3>

        <p class="text-lg text-white/80 mb-2">
          Biomedical engineer with a thing for computers.
        </p>

        <p class="text-lg text-white/70">
          Keeps projects organised.
        </p>

        <p class="text-lg text-white/70">
          Keeps Luís alive.
        </p>

        <p class="text-lg text-white/70">
          Probably the real adult.
        </p>
      </div>

      <!-- IMAGE -->
      <div class="relative flex justify-center order-1 lg:order-2">
        <img
          src="/images/team/maria.JPG"
          alt="Maria"
          class="w-[420px] rounded-3xl drop-shadow-2xl"
        />
        <div
          class="absolute -inset-10 -z-10 bg-primary-500/20 blur-3xl rounded-full"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import VantaBackground from '@/components/VantaBackground.vue'
</script>