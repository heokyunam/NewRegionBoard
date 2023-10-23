/** @type {import('tailwindcss').Config} */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
      head: {
          htmlAttrs: {
              lang: 'ko'
          },
          link: [
              {
                  rel: 'stylesheet',
                  type: 'text/css',
                  href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&display=swap'
              }
          ]
      }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/index.css'],
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
