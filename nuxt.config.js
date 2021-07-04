export default {
  buildDir: 'dist',
  srcDir: 'src/',
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: 'PUSAT JERSEY MURAH - JERSEY KW',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/reset.min.css' },
      { rel: 'stylesheet', href: '/css/animate.min.css' }
    ]
  },
  css: [
    '@/assets/css/_package.scss'
  ],
  plugins: [
    '~/plugins/third-party'
  ],
  components: {
    dirs: [
      '~/components',
      '~/components/atoms',
      '~/components/molecules'
    ]
  },
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  axios: {},
  build: {
  },
  serverMiddleware: ['~/server/middleware/init'],
  loading: '~/components/atoms/PageLoader.vue'
}
