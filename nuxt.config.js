import colors from 'vuetify/es5/util/colors'
import dotenv from 'dotenv'
const axios = require('axios')
dotenv.config()

const useLocal = process.env.USE_LOCAL

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
      let cimUrl = 'http://localhost:3005/cim/'
      let imaviUrl = 'http://localhost:3005/imavi/'
      if (useLocal === 'false') {
        cimUrl = 'https://api.imavi.org/cim/'
        imaviUrl = 'https://api.imavi.org/imavi/'
      }
      const allArticles = await axios.get(imaviUrl + 'articles/get-all', {
        headers: {
          Id: process.env.APP_ID,
          Secret: process.env.APP_SECRET,
          Partner: process.env.PARTNER
        }
      }).then((res) => {
        return res.data
      }).catch(callback)

      const allNews = await axios.get(imaviUrl + 'news/get-all', {
        headers: {
          Id: process.env.APP_ID,
          Secret: process.env.APP_SECRET,
          Partner: process.env.PARTNER
        }
      }).then((res) => {
        return res.data
      }).catch(callback)

      const routeList =
      [
        {
          route: '/articles/list',
          payload: allArticles
        },
        {
          route: '/news/list',
          payload: allNews
        }
      ]

      const ujianSingle = await axios.get(cimUrl + 'ujians/view/616634a20ed367297d87e26b', {
        headers: {
          Id: process.env.APP_ID,
          Secret: process.env.APP_SECRET
        }
      }).then((res) => {
        const payload = res.data
        return {
          route: '/member/ujians/do',
          payload
        }
      }).catch(callback)
      routeList.push(ujianSingle)

      const coursesAll = await axios.get(cimUrl + 'courses/get-all', {
        headers: {
          Id: process.env.APP_ID,
          Secret: process.env.APP_SECRET,
          Partner: process.env.PARTNER
        }
      }).then((res) => {
        const payload = res.data
        const innerRoutes = [{
          route: '/courses/list',
          payload
        }]
        payload.forEach((subElement) => {
          innerRoutes.push({
            route: '/courses/' + subElement.slug,
            payload: subElement
          })
        })
        return innerRoutes
      }).catch(callback)
      coursesAll.forEach((element) => {
        routeList.push(element)
      })

      allArticles.forEach((element) => {
        routeList.push({
          route: '/articles/' + element.slug,
          payload: element
        })
      })

      allNews.forEach((element) => {
        routeList.push({
          route: '/news/' + element.slug,
          payload: element
        })
      })
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
