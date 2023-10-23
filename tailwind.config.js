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
      active: '#2B2B2B',
      primary: '#E9E8FC',
      dark: '#242533',
      table: '#F9F9FC',
      thead: '#F9F9FC',
      tbody: '#F8F8FB',
      'table-line': '#EEEEF2',
      'table-text': '#484964',
    },
    extend: {
      gridTemplateColumns: {
        '5-100px': 'repeat(5, 100px)'
      },
    },
  },
  plugins: [],
}

