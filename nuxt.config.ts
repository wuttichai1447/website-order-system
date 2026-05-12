// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui'],

  ssr: false,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    resendApiKey: '',
    emailTo: '',
    emailFrom: 'onboarding@resend.dev'
  },

  routeRules: {
    // '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    preset: 'vercel'
  },

  vite: {
    optimizeDeps: {
      include: []
    },
    viteNode: {
      requestTimeout: 180000
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
