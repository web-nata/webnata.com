// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      /* ---------------- Fonts ---------------- */
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
        playfair: ['"Playfair Display"', 'serif'],
      },

      /* ---------------- Colors ---------------- */
      colors: {
        background: '#1B2A4A',
        primary: {
          900: '#1B2A4A', // base
          700: '#3B5EFF', // lowlight
          500: '#6B9CFF', // midtone
          300: '#88E1FF', // highlight
        },
        accent: '#EC368D',
      },

      /* --------------- Animations -------------- */
    },
  },
  plugins: [],
}
