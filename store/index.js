// import { createClient } from '~/plugins/contentful.js'

export const state = () => ({
  featuredDocument: [],
  featuredNews: [],
  featuredArticle: [],
  address: '',
  phone: '',
  facebook: '',
  instagram: ''
})

export const mutations = {
  setFeaturedDocument (state, value) {
    state.featuredDocument = value
  },

  setFeaturedNews (state, value) {
    state.featuredNews = value
  },

  setFeaturedArticle (state, value) {
    state.featuredArticle = value
  },

  setAddress (state, value) {
    state.address = value
  },

  setPhone (state, value) {
    state.phone = value
  },

  setFacebook (state, value) {
    state.facebook = value
  },

  setInstagram (state, value) {
    state.instagram = value
  }

}

// export const actions = {
//   async nuxtServerInit ({ commit }) {
//     const client = createClient()
//     try {
//       const featuredDocument = await client.getEntries({
//         content_type: 'category',
//         'fields.parent.sys.contentType.sys.id': 'category',
//         'fields.parent.fields.slug': 'category-document',
//         'fields.featured': true,
//         order: 'fields.slug'
//       })
//       const featuredNews = await client.getEntries({
//         content_type: 'category',
//         'fields.parent.sys.contentType.sys.id': 'category',
//         'fields.parent.fields.slug': 'category-news',
//         'fields.featured': true,
//         order: 'fields.slug'
//       })
//       const featuredArticle = await client.getEntries({
//         content_type: 'category',
//         'fields.parent.sys.contentType.sys.id': 'category',
//         'fields.parent.fields.slug': 'category-article',
//         'fields.featured': true,
//         order: 'fields.slug'
//       })
//       const address = await client.getEntries({
//         content_type: 'globalVar',
//         'fields.code': 'address'
//       })
//       const phone = await client.getEntries({
//         content_type: 'globalVar',
//         'fields.code': 'phone'
//       })
//       const facebook = await client.getEntries({
//         content_type: 'globalVar',
//         'fields.code': 'facebook'
//       })
//       const instagram = await client.getEntries({
//         content_type: 'globalVar',
//         'fields.code': 'instagram'
//       })
//       //   featuredDocument.items.forEach((element) => {
//       //     // console.log(element.fields.parent.sys.contentType.sys.id)
//       //     // console.log(element.fields.parent.fields.slug)
//       //     console.log(element.fields.slug)
//       //   })
//       commit('setFeaturedDocument', featuredDocument.items)
//       commit('setFeaturedNews', featuredNews.items)
//       commit('setFeaturedArticle', featuredArticle.items)
//       commit('setAddress', address.items[0])
//       commit('setPhone', phone.items[0])
//       commit('setFacebook', facebook.items[0])
//       commit('setInstagram', instagram.items[0])
//     } catch (e) {
//       // eslint-disable-next-line
//       console.error(e)
//     }
//   }
// }
