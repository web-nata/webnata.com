<template>
  <VantaBackground />

  <!-- HERO -->
  <section class="flex flex-col justify-center items-center text-white mt-32 text-center px-6">
    <!-- Main value proposition -->
    <h1 class="text-4xl md:text-6xl font-semibold font-sans leading-tight max-w-3xl">
      Websites that turn visitors <span class="text-accent">into customers</span>
    </h1>

    <!-- Supporting message -->
    <p class="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
      We may be new as a studio, but not new to building fast,
      conversion-focused websites that perform.
    </p>

    <!-- CTAs -->
    <div class="mt-10 flex gap-6">
      <a
        href="#portfolio"
        class="bg-accent text-white px-8 py-3 rounded-lg font-semibold transition hover:-translate-y-1 hover:shadow-xl"
      >
        View our work
      </a>

      <a
        href="#contact"
        class="border border-white/40 px-8 py-3 rounded-lg font-semibold transition hover:bg-white/10"
      >
        Contact us
      </a>
    </div>

    <!-- Trust signals -->
    <div class="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white bg-background/30
         backdrop-blur-md px-12 py-6 rounded-lg max-w-3xl">
      <span>⚡ Mobile-first</span>
      <span>🚀 Performance-optimised</span>
      <span>🎯 Conversion-focused</span>
      <span>🔍 SEO-ready</span>
    </div>
  </section>

  <!-- PORTFOLIO INTRO -->
<section
  id="portfolio"
  class="relative mt-40 mb-24 px-6"
>
  <!-- background divider -->
  <div class="absolute inset-0 bg-background/40 backdrop-blur-md"></div>

  <div class="relative max-w-6xl mx-auto py-20 text-center">
    <span class="uppercase tracking-widest text-sm text-white/60">
      Proof of work
    </span>

    <h2 class="mt-4 text-4xl md:text-5xl font-playfair text-white">
      Selected projects
    </h2>

    <p class="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
      A curated selection of work focused on clarity, performance,
      and real business outcomes.
    </p>
  </div>
</section>


  <!-- PROJECTS -->
  <section class="space-y-28">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.id"
      :title="project.title"
      :description="project.description"
      :image="project.image"
      :liveUrl="project.liveUrl"
      :reverse="index % 2 === 1"
    />
  </section>
</template>

<script setup>
import VantaBackground from '@/components/VantaBackground.vue'
import ProjectCard from './components/ProjectCard.vue'
import projects from '@/data/projects.json'
</script>
