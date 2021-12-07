<template>
  <div class="main-container mx-auto">
    <!-- <FetchStateHandler
      v-if="$fetchState.pending || $fetchState.error"
      :fetch-state="$fetchState"
      :fetch-function="$fetch"
    /> -->
    <!-- <div v-else> -->
    <!-- berita start -->
    <section class="news-section  mt-16">
      <h1 class="mb-3 pt-5 mx-auto text-center">
        Berita Utama
      </h1>
      <div class="d-flex flex-column mx-auto card-container">
        <div class="d-flex flex-column mx-auto card-container">
          <IndexMain
            v-for="(item, i) in newsMain"
            :key="i"
            :item="item"
          />
        </div>
        <!-- api -->
        <!-- <IndexCard2
            v-for="(item, i) in newsContent"
            :key="i"
            :item="item"
          /> -->
        <!-- <v-btn class="primary white--text mt-5 mb-15">
            Tampilkan lebih banyak
          </v-btn> -->

        <!-- static -->
        <v-row no-gutters class="inner-contain">
          <v-col
            v-for="(item, i) in newsContent"
            :key="i"
            cols="4"
            class="card-column mx-10"
          >
            <IndexCard2
              :item="item"
              class="dflex mx-auto"
            />
          </v-col>
        </v-row>
      </div>
    </section>
    <!-- berita end -->

    <!-- <section class="omk-section mt-15 mx-auto">
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
          :href="item.link"
        >
          <div
            class="d-flex flex-md-row flex-sm-column"
          >
            <v-img
              height="100"
              width="200"
              class="card-image"
              :src="item.thumbnail"
            />
            <div class="d-flex flex-column align-self-center ml-md-3">
              <p class="card-title mb-0">
                {{ item.label }}
              </p>

              <p class="card-subtitle mb-0">
                {{ $moment(item.publishDate).locale('id').format('DD MMMM YYYY') }}
              </p>
            </div>
          </div>
        </v-card>
      </div>
    </section> -->

    <!-- artikel start -->
    <section
      class="article-section  mt-16"
    >
      <h1 class="mb-3 pt-5 mx-auto text-center">
        Artikel Utama
      </h1>
      <!-- static -->

      <div class="d-flex flex-column mr-md-5 ml-md-5 card-container">
        <!-- api -->
        <!-- <v-card
            v-for="(item, i) in articleContent"
            :key="i"
            :href="'/article/' + item.slug"
            class="news-card mx-auto mt-5"
          > -->
        <!-- <div class="secondary d-flex label-container">
              <div class="d-flex label-inner flex-sm-shrink-0 ma-2">
                <span
                  v-for="(item, j) in item.categories"
                  :key="j"
                  class="primary white--text px-3 py-1 text-subtitle-2"
                >
                  {{ item.label }}
                </span>
              </div>
              <span class="info white--text ml-auto px-3 py-1 ma-2 text-subtitle-2 font-weight-bold">
                {{ $moment(item.publishDate).locale('id').format('DD MMMM YYYY') }}
              </span>
            </div> -->

        <!-- <div class="d-flex flex-row mt-2 ml-2">
              <img
                v-if="item.image !== undefined"
                class="news-image-small"
                :src="item.image.file.url"
              >
              <img
                v-if="item.image === undefined"
                class="news-image-small"
                :src="defaultThumbnail"
              >
              <div class="d-flex flex-column align-self-center ml-3">
                <p class="card-title mb-0">
                  {{ item.title }}
                </p>

                <p class="card-subtitle mb-0 grey--text lighten-4">
                  {{ item.subtitle }}
                </p>
              </div>
            </div> -->

        <!-- static -->
        <v-row no-gutters class="inner-contain">
          <v-col
            v-for="(item, i) in articleContent"
            :key="i"
            cols="4"
            class="card-column mx-10"
          >
            <IndexCard2
              :item="item"
              class="dflex mx-auto"
            />
            <!-- <v-btn
          text
          class="open-button primary--text d-flex ml-auto"
        >
          <i>Lihat</i>
        </v-btn> -->
            <!-- </v-card> -->
          </v-col>
        </v-row>
      </div>
    </section>
    <!-- artikel end -->
    <!-- </div> -->

    <!-- jubi rehan start -->
    <!-- api -->
    <!-- <section class="download-section mt-15">
        <div class="d-flex jubi-rehan-column"> -->
    <!-- jubileum start -->
    <!-- <div class="d-flex flex-column mr-md-10">
            <img :src="jubileum" class="download-banner">
            <div
              v-for="(item, i) in jubileumContent"
              :key="i"
              class="d-flex flex-row download-item pa-3"
            >
              <span>{{ item.label }}</span>
              <a
                :href="item.file.file.url"
                class="primary--text text-bold d-flex ml-auto"
              >Download</a>
            </div>
          </div> -->
    <!-- jubileum end -->

    <!-- rehan start -->
    <!-- <div class="d-flex flex-column second">
            <img :src="rehan" class="download-banner">
            <div
              v-for="(item, i) in rehanContent"
              :key="i"
              class="d-flex flex-row download-item pa-3"
            >
              <span>{{ item.label }}</span>
              <a
                :href="item.file.file.url"
                class="primary--text text-bold d-flex ml-auto"
              >Download</a>
            </div>
          </div> -->
    <!-- </div> -->
    <!-- rehan end -->
    <!-- </section> -->

    <!-- static -->
    <!-- jubi rehan start -->
    <section class="download-section  mt-16">
      <div class="d-flex jubi-rehan-column mx-10">
        <!-- jubileum start -->
        <div class="d-flex flex-column mr-md-10 ml-md-5">
          <h1 class="mb-3 pt-5 mx-auto text-center">
            Jubileum
          </h1>
          <div class="d-flex flex-column mr-md-10 ml-md-5 card-container">
            <img src="@/assets/images/rehan.jpg" class="download-banner">
            <a
              class="primary--text text-bold d-flex ml-auto"
            >Download</a>
          <!-- </div> -->
          </div>
        </div>
        <!-- jubileum end -->

        <!-- rehan start -->
        <div class="d-flex flex-column second  ml-md-5">
          <h1 class="mb-3 pt-5 mx-auto text-center">
            Rehan
          </h1>
          <div class="d-flex flex-column mr-md-5 ml-md-5 card-container">
            <img src="@/assets/images/rehan.jpg" class="download-banner">
            <a
              class="primary--text text-bold d-flex ml-auto"
            >Download</a>
          </div>
        </div>
      </div>

    <!-- rehan end -->
    </section>
    <!-- jubi rehan end -->
  </div>
</template>

<script>
export default {
  data: () => ({
    // api
    // newsContent: [],
    // jubileumContent: [],
    // rehanContent: [],
    // omkContent: [],
    // articleContent: []

    // static
    newsContent: [
      {
        label: 'Komisi Hak',
        title: 'Himbauan Protokol Kesehatan Dalam Perayaan Natal 2021',
        subtitle: 'Himbauan Protokol Kesehatan Dalam Perayaan Natal 2021'

      },

      {
        label: 'Komisi Hak',
        title: 'Himbauan Protokol Kesehatan Dalam Perayaan Natal 2021',
        subtitle: 'Himbauan Protokol Kesehatan Dalam Perayaan Natal 2021'
      }
    ],

    newsMain: [
      {
        label: 'Komisi Komunikasi Sosial',
        title: 'Temu Tim Media Keuskupan Surabaya',
        subtitle: 'Temu Tim Media Keuskupan Surabaya',
        url: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      }
    ],

    articleContent: [
      {
        label: 'Komisi Liturgi',
        title: 'Melindungi Keluarga Memulihkan Masyarakat',
        subtitle: 'Protokol New Normal Keluarga Katolik Keuskupan Surabaya'
      },

      {
        label: 'Komisi Liturgi',
        title: 'Melindungi Keluarga Memulihkan Masyarakat',
        subtitle: 'Protokol New Normal Keluarga Katolik Keuskupan Surabaya'
      }
    ]
  }),

  // async fetch () {
  //   let payload = this.$nuxt.context.payload
  //   if (!payload) {
  //     payload = await this.$axios.$post('/.netlify/functions/landing', {})
  //   }
  //   this.newsContent = payload.newsContent
  //   this.jubileumContent = payload.jubileumContent
  //   this.rehanContent = payload.rehanContent
  //   this.omkContent = payload.omkContent
  //   this.articleContent = payload.articleContent
  // },

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
