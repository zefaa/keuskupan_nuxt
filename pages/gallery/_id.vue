<template>
  <div class="main-container mx-auto">
    <v-breadcrumbs :items="items" />
    <h1 class="text-center page-title mx-auto">
      {{ detailContent.fields.title }}
    </h1>
    <LabelContainer :data="detailContent" />
    <section
      v-if="detailContent.fields.description"
      class="content-section mt-5"
    >
      <div class="post-content mx-auto">
        {{ detailContent.fields.description }}
      </div>
    </section>
    <section v-if="detailContent.fields.youtube" class="section-post-video">
      <v-responsive
        class="ml-auto mr-auto mx-16 text-center"
        :aspect-ratio="16 / 9"
        max-width="540"
        max-height="240"
      >
        <iframe
          id="testimony-embed"
          class="youtube-embed"
          :src="'https://www.youtube.com/embed/' + newsDetail.fields.youtube"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </v-responsive>
    </section>
    <section class="gallery-section">
      <no-ssr>
        <v-container>
          <v-row id="gallery-masonry" v-masonry>
            <v-col
              v-for="(item, i) in detailContent.fields.images"
              :key="i"
              v-masonry-tile
              cols="12"
              sm="4"
            >
              <v-card height="100%" class="pt-1 pb-1">
                <v-img :src="item.fields.file.url" @click="index = i" />
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </no-ssr>

      <client-only placeholder="Loading...">
        <vgs :images="images" :index="index" @close="index = null" />
      </client-only>
    </section>
    <ShareSection :data="detailContent" />
  </div>
</template>

<script>
// import NoSSR from 'vue-no-ssr'
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()
export default {
  components: {
    'no-ssr': 'NoSSR'
  },

  data: () => ({
    detailContent: {},
    type: 'gallery',
    items: [
      {
        text: 'Beranda',
        disabled: false,
        href: '/'
      },
      {
        text: 'Galleria',
        disabled: false,
        href: '/gallery'
      }
    ],
    images: []
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
//       content_type: 'gallery',
//       'fields.slug': params.id
//     })
//     return {
//       detailContent: detailContent.items[0]
//     }
//   } catch (e) {
//     // eslint-disable-next-line
//     console.error(e)
//     error({ statusCode: 404, message: 'Post not found' })
//   }
// },
// data: () => ({
//   index: null,
//   items: [
//     {
//       text: 'Beranda',
//       disabled: false,
//       href: '/'
//     },
//     {
//       text: 'Galleria',
//       disabled: false,
//       href: '/gallery'
//     }
//   ],
//   images: []
// }),
// mounted () {
//   // if (typeof this.$redrawVueMasonry === 'function') {

//   // }
//   this.$redrawVueMasonry('gallery-masonry')
//   this.items.push({
//     text: this.detailContent.fields.title,
//     disabled: true,
//     href: ''
//   })
//   this.detailContent.fields.images.forEach((element) => {
//     this.images.push({
//       url: element.fields.file.url,
//       alt: element.fields.file.title
//     })
//   })
// }
</script>
