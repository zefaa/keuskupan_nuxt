<template>
  <div class="main-container mx-auto article-detail">
    <v-breadcrumbs :items="items" />
    <h1 class="text-center page-title mx-auto">
      {{ detailContent.title }}
    </h1>
    <LabelContainer :item="detailContent" />
    <section class="image-section">
      <v-img
        v-if="detailContent.image"
        width="270"
        height="270"
        class="mx-auto news-image"
        :src="detailContent.image.file.url"
      />
    </section>
    <section class="content-section mt-5">
      <div class="post-content mx-auto" v-html="detailContent.content" />
    </section>
    <ShareSection :item="detailContent" />
  </div>
</template>

<script>
// import { BLOCKS } from '@contentful/rich-text-types'
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()
export default {
  data: () => ({
    detailContent: {},
    type: 'articles',
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
    console.log('masuk')
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/get-detail', {
        type: this.type,
        code: 'id'
        // code: this.$nuxt.context.params.id
      })
    }

    this.detailContent = payload
    console.log(payload)
  }
}

// keuskupan
// async asyncData ({ store, env, params, error }) {
//   try {
//     const detailContent = await client.getEntries({
//       content_type: 'article',
//       'fields.slug': params.id
//     })
//     const options = {
//       renderNode: {
//         [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
//               `<img src="${fields.file.url}" class="embed-image" alt="${fields.description}"/>`
//       }
//     }
//     return {
//       detailContent: detailContent.items[0],
//       content: documentToHtmlString(detailContent.items[0].fields.content, options)
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
// mounted () {
//   this.items.push({
//     text: this.detailContent.fields.title,
//     disabled: true,
//     href: ''
//   })
// }

</script>
