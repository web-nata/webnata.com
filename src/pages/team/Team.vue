<template>
  <VantaBackground />

  <!-- HEADER -->
  <section class="relative px-6 py-24">
    <div class="max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white">

      <h1 class="text-4xl md:text-6xl font-playfair leading-tight max-w-3xl">
        The duo behind
      </h1>

      <h1 class="text-4xl md:text-6xl font-playfair leading-tight max-w-3xl">
        <span class="text-accent"> Web Nata </span>
      </h1>

      <p class="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
        Two engineers. Different paths. One shared taste for building things that work.
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
          class="w-[590px] rounded-3xl drop-shadow-2xl"
        />

        <div class="absolute -inset-12 -z-10 bg-accent/15 blur-3xl rounded-full"></div>
      </div>

      <!-- TEXT -->
      <div class="flex flex-col justify-center text-white max-w-xl">
        <p class="uppercase tracking-widest text-sm text-white mb-6">
          Master Developer
        </p>

        <h3 class="text-4xl lg:text-5xl font-playfair leading-tight mb-3">
          Luís
        </h3>

        <p class="text-lg text-white/80 mb-3">
          Software engineer, problem-solver, and the one who insists that good code
          should look good. He builds fast, purposeful websites where
          <span class="underline underline-offset-4 decoration-accent">
            nothing exists “just because”.
          </span>
        </p>

        <p class="text-lg text-white/70">
          The kind of developer who
          treats every project like a puzzle worth getting right, not just a template to fill in.
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
        <p class="uppercase tracking-widest text-sm text-white mb-6">
          The asset of the operation
        </p>

        <h3 class="text-4xl lg:text-5xl font-playfair leading-tight mb-3">
          Maria
        </h3>

        <p class="text-lg text-white/80 mb-3">
          Biomedical engineer turned curious techie — with a talent for seeing
          how ideas translate into the real world. She brings perspective, intuition and
          a sharp eye for what actually matters —
          <span class="underline underline-offset-4 decoration-accent">
            especially when everyone else is overcomplicating things.
          </span>
        </p>

        <p class="text-lg text-white/70">
          Less “project manager”, more “quiet force of good decisions”.
          Balances logic with instinct and asks the questions that lead to better results.
        </p>
      </div>

      <!-- IMAGE -->
      <div class="relative flex justify-center order-1 lg:order-2">
        <img
          src="/images/team/maria.JPG"
          alt="Maria"
          class="w-[590px] rounded-3xl drop-shadow-2xl"
        />

        <div class="absolute -inset-12 -z-10 bg-accent/15 blur-3xl rounded-full"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import VantaBackground from '@/components/VantaBackground.vue'
</script>
