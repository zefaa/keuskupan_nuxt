<template>
  <div class="main-container mx-auto">
    <h1 class="text-center page-title mx-auto">
      {{ detailContent.fields.title }}
    </h1>
    <section class="content-section mt-5">
      <div class="post-content mx-auto" v-html="content" />
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
    detailContent: {},
    type: 'pages'
  }),

  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/get-detail', {
        type: this.type,
        code: this.$nuxt.context.params.id
      })
    }
    this.detailContent = payload
  }
}

// async asyncData ({ store, env, params, error }) {
//   try {
//     const detailContent = await client.getEntries({
//       content_type: 'page',
//       'fields.slug': params.id
//     })
//     const options = {
//       renderNode: {
//         [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
//                 `<img src="${fields.file.url}" class="embed-image" alt="${fields.description}"/>`
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
// }
</script>
