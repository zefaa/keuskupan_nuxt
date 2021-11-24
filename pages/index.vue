<template>
  <div class="main-container mx-auto">
    <section class="news-section grey lighten-4">
      <h1 class="mb-3 pt-5 mx-auto">
        Berita Terkini
      </h1>
      <div class="d-flex flex-column mx-auto card-container">
        <!-- <IndexCard1 /> -->
        <IndexCard2
          v-for="(item, i) in newsContent"
          :key="i"
          :data="item"
        />
        <v-btn class="primary white--text mt-5 mb-15">
          Tampilkan lebih banyak
        </v-btn>
      </div>
    </section>
    <section class="download-section mt-15">
      <div class="d-flex jubi-rehan-column">
        <div class="d-flex flex-column mr-md-10">
          <img :src="jubileum" class="download-banner">
          <div
            v-for="(item, i) in jubileumContent"
            :key="i"
            class="d-flex flex-row download-item pa-3"
          >
            <span>{{ item.fields.label }}</span>
            <a
              :href="item.fields.file.fields.file.url"
              class="primary--text text-bold d-flex ml-auto"
            >Download</a>
          </div>
        </div>
        <div class="d-flex flex-column second">
          <img :src="rehan" class="download-banner">
          <div
            v-for="(item, i) in rehanContent"
            :key="i"
            class="d-flex flex-row download-item pa-3"
          >
            <span>{{ item.fields.label }}</span>
            <a
              :href="item.fields.file.fields.file.url"
              class="primary--text text-bold d-flex ml-auto"
            >Download</a>
          </div>
        </div>
      </div>
    </section>
    <section class="omk-section mt-15 mx-auto">
      <div class="d-flex flex-column">
        <v-img
          height="100"
          width="200"
          :src="omk"
          class="mx-auto omk-banner"
        />
        <v-card
          v-for="(item, i) in omkContent"
          :key="i"
          class="news-card mx-auto mt-5"
          :href="item.fields.link"
        >
          <div
            class="d-flex flex-md-row flex-sm-column"
          >
            <v-img
              height="100"
              width="200"
              class="card-image"
              :src="item.fields.thumbnail"
            />
            <div class="d-flex flex-column align-self-center ml-md-3">
              <p class="card-title mb-0">
                {{ item.fields.label }}
              </p>

              <p class="card-subtitle mb-0">
                {{ convertDate(item.sys.createdAt) }}
              </p>
            </div>
          </div>
        </v-card>
      </div>
    </section>

    <section
      class="article-section mt-16"
    >
      <h1 class="mb-3 pt-5 mx-auto">
        Artikel
      </h1>
      <div class="d-flex flex-column mx-auto card-container">
        <v-card
          v-for="(item, i) in articleContent"
          :key="i"
          :href="'/article/' + item.fields.slug"
          class="news-card mx-auto mt-5"
        >
          <div class="secondary d-flex label-container">
            <div class="d-flex label-inner flex-sm-shrink-0 ma-2">
              <span
                v-for="(data, j) in item.fields.categories"
                :key="j"
                class="primary white--text px-3 py-1 text-subtitle-2"
              >
                {{ data.fields.label }}
              </span>
            </div>
            <span class="info white--text ml-auto px-3 py-1 ma-2 text-subtitle-2 font-weight-bold">
              {{ convertDate(item.sys.createdAt) }}
            </span>
          </div>

          <div class="d-flex flex-row mt-2 ml-2">
            <img
              v-if="item.fields.image !== undefined"
              class="news-image-small"
              :src="item.fields.image.fields.file.url"
            >
            <img
              v-if="item.fields.image === undefined"
              class="news-image-small"
              :src="defaultThumbnail"
            >
            <div class="d-flex flex-column align-self-center ml-3">
              <p class="card-title mb-0">
                {{ item.fields.title }}
              </p>

              <p class="card-subtitle mb-0 grey--text lighten-4">
                {{ item.fields.subtitle }}
              </p>
            </div>
          </div>

          <v-btn
            text
            class="open-button primary--text d-flex ml-auto"
          >
            <i>Lihat</i>
          </v-btn>
        </v-card>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    newsContent: [],
    jubileumContent: [],
    rehanContent: [],
    omkContent: [],
    articleContent: []
  }),

  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/landing', {})
    }
    this.newsContent = payload.newsContent
    this.jubileumContent = payload.jubileumContent
    this.rehanContent = payload.rehanContent
    this.omkContent = payload.omkContent
    this.articleContent = payload.articleContent
  },

  methods: {
    convertDate (date) {
      date = new Date(date)
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return date.toLocaleDateString('id-ID', options)
    }
  }
}

// async asyncData ({ store, env, params }) {
//   try {
//     // ambil 5 saja
//     const newsContent = await client.getEntries({
//       content_type: 'news',
//       limit: 5
//     })
//     const jubileumContent = await client.getEntries({
//       content_type: 'jubileum',
//       limit: 5
//     })
//     const rehanContent = await client.getEntries({
//       content_type: 'rehan',
//       limit: 5
//     })
//     const omkContent = await client.getEntries({
//       content_type: 'omk',
//       limit: 5
//     })
//     omkContent.items.forEach((element) => {
//       const getCode = element.fields.link.split('v=')[1]
//       element.fields.thumbnail = 'https://img.youtube.com/vi/' + getCode + '/maxresdefault.jpg'
//     })
//     const articleContent = await client.getEntries({
//       content_type: 'article',
//       limit: 5
//     })
//     return {
//       newsContent: newsContent.items,
//       jubileumContent: jubileumContent.items,
//       rehanContent: rehanContent.items,
//       omkContent: omkContent.items,
//       articleContent: articleContent.items
//     }
//   } catch (e) {
//     // eslint-disable-next-line
//     console.error(e)
//   }
// },
// data: () => ({
//   jubileum: require('~/assets/images/jubileum.jpg'),
//   rehan: require('~/assets/images/rehan.jpg'),
//   omk: require('~/assets/images/omksuroboyo.png'),
//   menuColumn1: [{ title: 'Beranda' }, { title: 'Arah Dasar', items: ['Arial', 'Calibri'] }, { title: 'Informasi', items: ['Arial', 'Calibri'] }],
//   menuColumn2: [{ title: 'Profil', items: ['Arial', 'Calibri'] }, { title: 'Karya Pastoral', items: ['Arial', 'Calibri'] }, { title: 'Dokumen', items: ['Arial', 'Calibri'] }]
// }),

</script>
