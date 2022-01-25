<template>
  <div class="main-container mx-auto article-detail">
    <div>
      <v-breadcrumbs :item="items" />
    </div>
    <h1 class="text-center page-title mx-auto">
      {{ detailContent.title }}
    </h1>
    <LabelContainerCard :item="detailContent" />
    <section class="image-section">
      <v-img
        width="270"
        height="270"
        class="mx-auto news-image"
        :src="detailContent.imageLink"
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
    type: 'documents',
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
    // console.log('masuk')
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

</script>
