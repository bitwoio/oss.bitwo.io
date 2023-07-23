// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/device',
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
  ],
  devtools: { enabled: true },
  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '',
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
        file: 'fr.json'
      }
    ],
    langDir: 'locales/',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'oss_bitwo_i18n_redirected',
      alwaysRedirect: false,
      cookieCrossOrigin: true,
      redirectOn: 'no prefix',
    }
  },
  CookieControl: {
    cookieNameIsConsentGiven: 'oss_bitwo_ncc_c',
    cookieNameCookiesEnabledIds: 'oss_bitwo_ncc_e',
    cookies: {
      necessary: [],
      optional: [],
    },
    isAcceptNecessaryButtonEnabled: false,
    isControlButtonEnabled: false,
    locales: ['en', 'fr'],
  },
  tailwindcss: {
    config: {
      plugins: [
        require("daisyui")
      ],
      daisyui: {
        themes: true,
      }
    }
  }
})
