<template>
  <VantaBackground />

  <section class="relative px-6 py-32">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
    >
      <!-- LEFT: Intro / reassurance -->
      <div class="text-white max-w-xl">
        <p class="uppercase tracking-widest text-sm text-white/60 mb-4">
          Contact
        </p>

        <h1 class="text-4xl md:text-5xl font-playfair mb-6">
          Tell us about your website
        </h1>

        <p class="text-lg text-white/80 mb-4">
          Whether you’re starting from scratch or updating an existing site,
          we’d love to hear what you’re working on.
        </p>

        <p class="text-lg text-white/70 mb-8">
          Share as much or as little as you like – we’ll get back to you
          within one business day with next steps. No pressure, no hard sell.
        </p>

        <div class="space-y-2 text-white/70 text-sm">
          <p>
            Prefer email? Reach us at
            <a
              href="mailto:hello@webnata.com"
              class="text-accent underline underline-offset-4"
            >
              hello@webnata.com
            </a>
          </p>
        </div>
      </div>

      <!-- RIGHT: Form -->
      <div
        class="bg-background/40 backdrop-blur-lg shadow-2xl rounded-3xl px-6 py-8 md:px-8 md:py-10 text-white"
      >
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name -->
          <div>
            <label class="block text-sm font-semibold mb-2" for="name">
              Name
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your name"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-semibold mb-2" for="email">
              Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="you@example.com"
            />
          </div>

          <!-- Business name (optional) -->
          <div>
            <label class="block text-sm font-semibold mb-2" for="business">
              Business name <span class="text-white/40">(optional)</span>
            </label>
            <input
              id="business"
              v-model="form.business"
              type="text"
              class="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your business or project name"
            />
          </div>

          <!-- Budget + timeframe -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold mb-2" for="budget">
                Budget <span class="text-white/40">(approx.)</span>
              </label>
              <select
                id="budget"
                v-model="form.budget"
                class="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Not sure yet</option>
                <option value="<1000">Up to $1,500</option>
                <option value="1000-3000">$1,500 – $3,000</option>
                <option value=">3000">$3,000+</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2" for="timeframe">
                Timeframe
              </label>
              <select
                id="timeframe"
                v-model="form.timeframe"
                class="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Flexible / not sure</option>
                <option value="asap">As soon as possible</option>
                <option value="1-2 months">Within 1–2 months</option>
                <option value="3+ months">In 3+ months</option>
              </select>
            </div>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-sm font-semibold mb-2" for="message">
              Tell us about your project
            </label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="4"
              class="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="What do you need help with? Any goals, ideas, or links are welcome."
            ></textarea>
          </div>

          <!-- Status message -->
          <p v-if="success" class="text-sm text-emerald-400">
            Thanks! Your message has been sent. We’ll get back to you soon.
          </p>
          <p v-if="error" class="text-sm text-red-400">
            Something went wrong. You can also email us directly at
            <a href="mailto:hello@webnata.com" class="underline">
              hello@webnata.com
            </a>.
          </p>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="submitting"
            class="w-full bg-accent text-white px-6 py-3 rounded-lg font-semibold
                   transition hover:-translate-y-1 hover:shadow-xl
                   disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {{ submitting ? 'Sending...' : 'Send message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import VantaBackground from '@/components/VantaBackground.vue'

const form = ref({
  name: '',
  email: '',
  business: '',
  budget: '',
  timeframe: '',
  message: ''
})

const submitting = ref(false)
const success = ref(false)
const error = ref(false)

const handleSubmit = async () => {
  submitting.value = true
  success.value = false
  error.value = false

  try {
    // TODO: plug in EmailJS / Formspree / your form backend here.
    // e.g. await emailjs.send(/* ... */)

    console.log('Form submitted', form.value)

    await new Promise(resolve => setTimeout(resolve, 500))

    success.value = true
    // optionally clear form:
    // form.value = { name: '', email: '', business: '', budget: '', timeframe: '', message: '' }
  } catch (e) {
    console.error(e)
    error.value = true
  } finally {
    submitting.value = false
  }
}
</script>
