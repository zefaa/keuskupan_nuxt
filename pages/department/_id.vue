<template>
  <div class="main-container grey lighten-4 mx-auto">
    <h1 class="text-center page-title mx-auto mt-10">
      {{ detailContent.title }}
    </h1>
    <section class="content-section mt-5">
      <div class="mx-5" v-html="content" />
    </section>
    <section class="news-section">
      <div class="d-flex flex-md-row flex-sm-column w-90 mx-auto">
        <div v-if="newsList.length > 0" class="d-flex flex-sm-column w-60 news-column">
          <h1>News</h1>
          <NewsCard1 v-for="(item, i) in newsList" :key="i" :item="item" />
        </div>
        <!-- <div class="d-flex flex-sm-column w-30 ml-md-10 flex-grow-1 news-column">
          <h1>Events</h1>
        </div> -->
      </div>
      <div class="d-flex flex-md-row flex-sm-column w-90 mx-auto">
        <div v-if="documentList.length > 0" class="d-flex flex-sm-column w-30 news-column">
          <h1>Documents</h1>
          <v-card
            v-for="(item, i) in documentList"
            :key="i"
            :href="'/article/' + item.slug"
            class="news-card mx-auto my-5"
          >
            <div class="d-flex primary--border--bottom">
              <span
                v-for="(item, j) in item.categories"
                :key="j"
                class="primary white--text font-italic px-3 py-1 ma-2 caption"
              >
                {{ item.label }}
              </span>
              <span class="ml-auto primary--text darken-2 align-self-center mr-5 caption">
                {{ convertDate(item.sys.createdAt) }}
              </span>
            </div>

            <div class="d-flex flex-row mt-2 ml-2 mt-7">
              <div class="d-flex flex-column align-self-center ml-3 card-content">
                <h3 class="card-title primary--text">
                  {{ item.title }}
                </h3>

                <v-btn
                  text
                  plain
                  medium
                  class="open-button primary--text d-flex ml-auto"
                >
                  Lihat
                </v-btn>
              </div>
            </div>
          </v-card>
        </div>
        <div v-if="articleList.length > 0" class="d-flex flex-sm-column w-60 ml-md-10 flex-grow-1 news-column">
          <h1>Articles</h1>
          <NewsCard1 v-for="(item, i) in articleList" :key="i" :item="item" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import { BLOCKS } from '@contentful/rich-text-types'
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()
export default {
  data: () => ({
    newsList: [],
    documentList: [],
    articleList: [],
    items: [
      {
        text: 'Beranda',
        disabled: false,
        href: '/'
      },
      {
        text: 'Artikel',
        disabled: false,
        href: '/article'
      }
    ]
  }),

  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/get-list', {})
    }
    this.newsList = payload.newsList
    this.documentList = payload.documentList
    this.articleList = payload.articleList
  }

  // mounted () {
  //   this.items.push({
  //     text: this.detailContent.fields.title,
  //     disabled: true,
  //     href: ''
  //   })
  // },
  // methods: {
  //   convertDate (date) {
  //     date = new Date(date)
  //     const options = { year: 'numeric', month: 'long', day: 'numeric' }
  //     return date.toLocaleDateString('id-ID', options)
  //   }
  // }
}

// async asyncData ({ store, env, params, error }) {
//   try {
//     const detailContent = await client.getEntries({
//       content_type: 'department',
//       'fields.slug': params.id
//     })
//     const newsList = await client.getEntries({
//       content_type: 'news',
//       'fields.department.sys.contentType.sys.id': 'department',
//       'fields.department.fields.slug': params.id
//     })
//     const articleList = await client.getEntries({
//       content_type: 'article',
//       'fields.department.sys.contentType.sys.id': 'department',
//       'fields.department.fields.slug': params.id
//     })
//     const documentList = await client.getEntries({
//       content_type: 'document',
//       'fields.department.sys.contentType.sys.id': 'department',
//       'fields.department.fields.slug': params.id
//     })
//     const options = {
//       renderNode: {
//         [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
//               `<img src="${fields.file.url}" class="embed-image" alt="${fields.description}"/>`
//       }
//     }
//     return {
//       detailContent: detailContent.items[0],
//       content: documentToHtmlString(detailContent.items[0].fields.content, options),
//       newsList: newsList.items,
//       articleList: articleList.items,
//       documentList: documentList.items
//     }
//   } catch (e) {
//     // eslint-disable-next-line
//     console.error(e)
//     error({ statusCode: 404, message: 'Post not found' })
//   }
// },
// data: () => ({
//   items: [
//     {
//       text: 'Beranda',
//       disabled: false,
//       href: '/'
//     },
//     {
//       text: 'Artikel',
//       disabled: false,
//       href: '/article'
//     }
//   ]
// }),

</script>
