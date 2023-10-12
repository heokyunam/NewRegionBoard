/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "@/components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  variants: {
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        '5-100px': 'repeat(5, 100px)'
      },
    },
  },
  plugins: [],
}

