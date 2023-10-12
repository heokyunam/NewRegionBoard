/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
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
    colors: {
      inactive: '#7D7D7D',
      active: '#2B2B2B'
    },
    extend: {
      gridTemplateColumns: {
        '5-100px': 'repeat(5, 100px)'
      },
    },
  },
  plugins: [],
}

