<template>
  <div class="main-container mx-auto">
    <v-breadcrumbs
      :items="items"
    />
    <h1 class="text-center page-title mx-auto">
      {{ detailContent.title }}
    </h1>
    <LabelContainer :item="detailContent" />
    <section class="download-section text-center">
      <v-btn
        color="primary"
        class="ma-2 white--text"
        :href="detailContent.file.file.url"
        x-large
      >
        <v-icon
          dark
          class="mr-3"
        >
          mdi-cloud-download
        </v-icon>
        Unduh Dokumen
      </v-btn>
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
    type: 'documents',
    items: [
      {
        text: 'Beranda',
        disabled: false,
        href: '/'
      },
      {
        text: 'Dokumen',
        disabled: false,
        href: '/document'
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
    this.detailContent = payload
  }
}

// async asyncData ({ store, env, params, error }) {
//   try {
//     const detailContent = await client.getEntries({
//       content_type: 'document',
//       'fields.slug': params.id
//     })
//     const options = {
//       renderNode: {
//         [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
//             `<img src="${fields.file.url}" class="embed-image" alt="${fields.description}"/>`
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
//       text: 'Dokumen',
//       disabled: false,
//       href: '/document'
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
