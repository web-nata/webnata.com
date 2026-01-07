<template>
  <VantaBackground />

  <section class="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
    <!-- Brand accent -->
    <div class="mb-6 flex items-center gap-3 text-white/70">
      <span class="w-10 h-px bg-accent"></span>
      <span class="tracking-widest uppercase text-sm">
        Web Nata
      </span>
      <span class="w-10 h-px bg-accent"></span>
    </div>

    <!-- Value proposition (serif) -->
    <h1 class="text-white text-4xl md:text-6xl lg:text-7xl font-playfair leading-tight max-w-4xl">
      Websites for small businesses that want to grow
    </h1>

    <!-- Supporting copy (sans) -->
    <p class="mt-6 text-lg md:text-xl text-white/80 max-w-2xl font-sans">
      We design and build fast, modern, and affordable websites
      that help your business stand out online.
    </p>

    <!-- CTAs -->
    <div class="mt-10 flex flex-wrap gap-6 justify-center">
      <router-link to="/contact" class="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold
             transition hover:-translate-y-1 hover:shadow-xl">
        Get a Free Quote
      </router-link>

      <router-link to="/portfolio" class="border border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold
             transition hover:bg-white/10">
        View Our Work
      </router-link>

    </div>
    <p class="mt-4 text-sm text-white/60">
      We usually reply within one business day.
    </p>
  </section>


  <!-- WHAT WE DO -->
  <section class="relative bg-background/30 backdrop-blur-lg shadow-2xl overflow-hidden w-full">
    <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6 py-32">
      <!-- TEXT -->
      <div class="flex flex-col justify-center text-white max-w-xl">
        <p class="uppercase tracking-widest text-sm text-white/60 mb-6">
          What we do
        </p>

        <h3 class="text-4xl lg:text-5xl font-sans leading-tight">
          We help small businesses<br />
          grow online with
          <span class="text-accent italic">fast</span>,
          <span class="font-semibold text-accent">modern</span> &
          <span class="underline text-accent">affordable</span>
          websites
        </h3>

        <p class="mt-8 text-lg text-white/80 leading-relaxed">
          From landing pages to full websites, we design and build experiences
          that look great, load fast, and actually convert visitors into
          customers.
        </p>

        <div class="mt-10">
          <router-link to="/portfolio" class="inline-block bg-accent text-white px-8 py-4 font-semibold rounded-lg
                 transition hover:-translate-y-1 hover:shadow-xl">
            See our work
          </router-link>
        </div>
      </div>

      <!-- IMAGE (SECONDARY) -->
      <div class="relative hidden lg:flex justify-center items-center">
        <img src="/images/responsive.png" alt="Responsive website showcase"
          class="w-[380px] drop-shadow-2xl rounded-xl" />

        <!-- subtle glow -->
        <div class="absolute -inset-12 -z-10 bg-primary-500/20 blur-3xl rounded-full"></div>
      </div>
    </div>
  </section>

  <section class="relative px-6 py-24">
    <!-- Heading -->
    <div class="max-w-6xl mx-auto text-center text-white">
      <p class="uppercase tracking-widest text-sm text-white/60 mb-4">
        How it works
      </p>

      <h2 class="text-3xl md:text-4xl font-playfair mb-4">
        A simple process from idea to launch
      </h2>

      <p class="text-lg text-white/80 max-w-2xl mx-auto">
        No jargon, no chaos. Just a clear path to getting your website live and
        working for your business.
      </p>
    </div>

    <!-- Timeline -->
    <div class="relative max-w-6xl mx-auto mt-16">
      <!-- horizontal line (desktop only) -->
      <div class="hidden md:block absolute top-8 left-0 right-0 h-px bg-white/15"></div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        <!-- Step 1 -->
        <div class="flex flex-col items-start md:items-center text-left md:text-center">
          <!-- Number badge -->
          <div class="relative mb-4">
            <div class="w-10 h-10 rounded-full border-2 border-accent bg-background/70
                   flex items-center justify-center text-sm font-semibold">
              01
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-2 font-sans">
            Understand your business
          </h3>
          <p class="text-sm text-white/80 leading-relaxed max-w-xs">
            We start with a short chat to learn about your business, your goals,
            and what a “good website” means for you.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="flex flex-col items-start md:items-center text-left md:text-center">
          <div class="relative mb-4">
            <div class="w-10 h-10 rounded-full border-2 border-accent bg-background/70
                   flex items-center justify-center text-sm font-semibold">
              02
            </div>
          </div>

          <h3 class="text-xl font-semibold font-sans mb-2">
            Design & build
          </h3>
          <p class="text-sm text-white/80 leading-relaxed max-w-xs">
            We plan the structure, design the key pages, and build a fast,
            responsive website with clean, maintainable code.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col items-start md:items-center text-left md:text-center">
          <div class="relative mb-4">
            <div class="w-10 h-10 rounded-full border-2 border-accent bg-background/70
                   flex items-center justify-center text-sm font-semibold">
              03
            </div>
          </div>

          <h3 class="text-xl font-semibold font-sans mb-2">
            Launch & support
          </h3>
          <p class="text-sm text-white/80 leading-relaxed max-w-xs">
            We handle launch, basic SEO setup, and small tweaks after go-live so
            you’re not left alone with the tech.
          </p>
        </div>
      </div>
    </div>
  </section>



  <!-- ABOUT US -->
  <section class="relative px-6 py-28 bg-background/30 backdrop-blur-lg shadow-2xl">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- TEXT -->
      <div class="text-white max-w-xl">
        <p class="uppercase tracking-widest text-sm text-white/60 mb-4">
          About us
        </p>

        <h2 class="text-5xl lg:text-6xl font-playfair mb-6">
          Who we are
        </h2>

        <p class="text-lg lg:text-xl leading-relaxed text-white/85 mb-6">
          We’re a
          <span class="italic text-accent">
            Brisbane-based duo
          </span>
          with backgrounds in software engineering and biomedical engineering.
          We approach websites the same way we approach technical projects —
          with clarity, structure, and a focus on solving real problems for
          small businesses.
        </p>

        <p class="text-lg lg:text-xl leading-relaxed text-white/80 mb-8">
          Instead of flashy gimmicks or over-designed templates, we build
          websites that are reliable, easy to maintain, and perform well in the
          real world.
        </p>

        <ul class="space-y-3 text-white/85 text-base lg:text-lg mb-10">
          <li class="flex gap-3">
            <span class="text-accent font-semibold">•</span>
            <span>Practical engineering-first approach</span>
          </li>
          <li class="flex gap-3">
            <span class="text-accent font-semibold">•</span>
            <span>Clear communication & transparent process</span>
          </li>
          <li class="flex gap-3">
            <span class="text-accent font-semibold">•</span>
            <span>Websites built to be fast, stable, and future-proof</span>
          </li>
        </ul>

        <router-link to="/team" class="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold
               transition hover:-translate-y-1 hover:shadow-xl">
          Meet our team
        </router-link>
      </div>

      <!-- IMAGE -->
      <div class="relative flex justify-center">
        <div class="relative w-full max-w-md mx-auto">
          <img src="/images/brisbane.webp" alt="Brisbane city skyline" class="rounded-3xl shadow-2xl" />
          <div class="absolute -inset-6 -z-10 bg-primary-500/20 blur-3xl rounded-2xl"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="relative px-6 py-24 ">
    <div class="max-w-4xl mx-auto text-center text-white">

      <p class="uppercase tracking-widest text-sm text-white/60 mb-3">
        Ready to get started?
      </p>

      <h2 class="text-3xl md:text-4xl font-playfair mb-4">
        Let’s talk about your website
      </h2>

      <p class="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
        Tell us a little about your business and what you’re looking for.
        We’ll get back to you within one business day with a rough timeline
        and price range — no pressure, no hard sell.
      </p>

      <div class="flex flex-wrap gap-6 justify-center">
        <router-link to="/contact" class="bg-accent text-white px-8 py-4 rounded-lg font-semibold
               transition hover:-translate-y-1 hover:shadow-xl">
          Get a Free Quote
        </router-link>

        <router-link to="/portfolio" class="border border-white/40 text-white px-8 py-4 rounded-lg font-semibold
               transition hover:bg-white/10">
          View Our Work
        </router-link>
      </div>
    </div>
  </section>




</template>

<script setup>
import VantaBackground from '@/components/VantaBackground.vue'
</script>
