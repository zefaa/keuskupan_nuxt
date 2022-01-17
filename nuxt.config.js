import colors from 'vuetify/es5/util/colors'
import dotenv from 'dotenv'
const axios = require('axios')
dotenv.config()

const useLocal = process.env.USE_LOCAL
async function getPayload (url, callback) {
  return await axios
    .get(url, {
      headers: {
        Id: process.env.APP_ID,
        Secret: process.env.APP_SECRET,
        Partner: process.env.PARTNER
      }
    })
    .then((res) => {
      return res.data
    })
    .catch(callback)
}
const setting = {
  head: {
    titleTemplate: 'Keuskupan Surabaya',
    title: 'Keuskupan Surabaya',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cinzel&display=swap'
      }
    ]
  },
  // Global page headers: https://go.nuxtjs.dev/config-head

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss',
    '@/assets/_mq.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gallery', ssr: false },
    { src: '~/plugins/masonry', ssr: false },
    { src: '~/plugins/underscore', ssr: false },
    '~/plugins/client/cu.client.js'
  ],

  // Auto  components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/cards'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-sass-resources-loader',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#be272c',
          secondary: '#ffe100',
          info: '#178ecf'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  target: 'static',
  generate: {
    async routes (callback) {
      let imaviUrl = 'http://localhost:3005/imavi/'
      if (useLocal === 'false') {
        imaviUrl = 'https://api.imavi.org/imavi/'
      }
      const allArticles = await getPayload(imaviUrl + 'articles/get-all', callback)
      const allNews = await getPayload(imaviUrl + 'news/get-all', callback)

      const routeList =
      [
        {
          route: '/articles/',
          payload: allArticles
        },
        {
          route: '/news/',
          payload: allNews
        },
        {
          route: '/',
          payload: {
            allArticles,
            allNews
          }
        }
      ]
      callback(null, routeList)
    }

  }
}
let baseURL
if (useLocal === 'true') {
  baseURL = 'http://localhost:8888'
} else {
  baseURL = ''
}
setting.axios = {
  baseURL
}

export default setting
