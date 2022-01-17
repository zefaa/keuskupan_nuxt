<template>
  <div class="main-container mx-auto">
    <v-breadcrumbs :items="items" />
    <h1 class="text-center page-title mx-auto">
      {{ newsDetail.title }}
    </h1>
    <LabelContainer :item="newsDetail" />
    <section class="image-section">
      <v-img

        width="270"
        height="270"
        class="mx-auto news-image"
        :src="newsDetail.imageLink"
      />
    </section>
    <section class="content-section mt-5">
      <div class="post-content mx-auto" v-html="newsDetail.content" />
    </section>
    <ShareSection :item="newsDetail" />
  </div>
</template>

<script>
// import { BLOCKS } from '@contentful/rich-text-types'
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()

export default {
  data: () => ({
    newsDetail: {},
    type: 'news',
    items: [
      {
        text: 'Beranda',
        disabled: false,
        href: '/'
      },
      {
        text: 'News',
        disabled: false,
        href: '/news'
      }
    ]
  }),

  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/get-detail', {
        type: this.type,
        code: this.$nuxt.context.params.id
      })
    }
    this.newsDetail = payload
  }
}

// async asyncData ({ store, env, params, error }) {
//   try {
//     const newsDetail = await client.getEntries({
//       content_type: 'news',
//       'fields.slug': params.id
//     })
//     const options = {
//       renderNode: {
//         [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
//             `<img src="${fields.file.url}" class="embed-image" alt="${fields.description}"/>`
//       }
//     }
//     return {
//       newsDetail: newsDetail.items[0],
//       newsContent: documentToHtmlString(newsDetail.items[0].fields.content, options)
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
//       text: 'News',
//       disabled: false,
//       href: '/news'
//     }
//   ]
// }),
// mounted () {
//   this.items.push({
//     text: this.newsDetail.fields.title,
//     disabled: true,
//     href: ''
//   })
// }
</script>
