<template>
  <div class="main-container mx-auto">
    <section class="slideshow mt-8">
      <v-carousel
        class="v-carousel"
        cycle
        height="400"

        hide-delimiter-background
        :show-arrows="true"
      >
        <v-carousel-item
          v-for="(item,i) in slideItems"
          :key="i"
          class="v-carousel_item"
          :src="item.src"
        />
      </v-carousel>
    </section>
    <section class="news-section  mt-16">
      <h1 class="mb-3 pt-5 mx-auto text-center">
        Berita Utama
      </h1>
      <div class="d-flex flex-column mx-auto card-container py-5 mt-6 ">
        <div class="d-flex flex-column mx-auto card-container">
          <IndexMain
            v-for="(item, i) in newsMain"
            :key="i"
            :item="item"
            type="news"
          />
        </div>
      </div>

      <div class="text-center">
        <v-btn
          class="primary white--text mt-5 mb-15"
          :to="'/news'"
        >
          Tampilkan lebih banyak
        </v-btn>
      </div>
    </section>
    <!-- berita end -->

    <!-- artikel start -->
    <section
      class="news-section  mt-16"
    >
      <h1 class="mb-3 pt-5 mx-auto text-center">
        Artikel Utama
      </h1>

      <div class="d-flex flex-column mx-auto card-container py-5 mt-6 ">
        <div class="d-flex flex-column mx-auto card-container">
          <IndexMain
            v-for="(item, i) in articleMain"
            :key="i"
            :item="item"
            type="article"
          />
        </div>
      </div>

      <div class="text-center">
        <v-btn
          class="primary white--text mt-5 mb-15"
          :to="'/article'"
        >
          Tampilkan lebih banyak
        </v-btn>
      </div>
    </section>

    <!--<div class="d-flex flex-column mx-auto card-container py-5 mt-6 ">
        <div class="d-flex flex-column mx-auto card-container">
          <v-card
            v-for="(item, i) in articleContent"
            :key="i"
            :href="'/article/' + item.slug"
            class="news-card mx-auto mt-5"
          >
            <div class="secondary d-flex label-container">
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
            </div>

            <div class="d-flex flex-row mt-2 ml-2">
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
            </div>

            <v-btn
              text
              class="open-button primary--text d-flex ml-auto"
            >
              <i>Lihat</i>
            </v-btn>
          </v-card>
        </div>
      </div>
    </section> -->
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
        <div class="d-flex flex-column mr-md-10 ml-md-5">
          <h1 class="mb-3 pt-5 mx-auto text-center">
            Jubileum
          </h1>
          <div class="d-flex flex-column mr-md-10 ml-md-5 card-container">
            <img src="@/assets/images/jubileum.jpg" class="download-banner">
            <a
              href="/jubileum/"
              class="primary--text text-bold d-flex ml-auto"
            >Selengkapnya</a>
          </div>
        </div>

        <div class="d-flex flex-column second  ml-md-5">
          <h1 class="mb-3 pt-5 mx-auto text-center">
            Rehan
          </h1>
          <div class="d-flex flex-column mr-md-5 ml-md-5 card-container">
            <img src="@/assets/images/rehan.jpg" class="download-banner">
            <a
              href="/jubileum/"
              class="primary--text text-bold d-flex ml-auto"
            >Selengkapnya</a>
          </div>
        </div>
      </div>
    </section>
    <!-- jubi rehan end -->
  </div>
</template>

<script>
export default {
  data: () => ({
    newsMain: [],
    articleMain: [],
    slideItems: [
      {
        src: require('../assets/images/mupas.jpeg')
      },
      {
        src: require('../assets/images/cathedral.jpeg')
      }
    ]

  }),

  async fetch () {
    let payload = this.$nuxt.context.payload

    if (!payload) {
      payload = {}
      payload.allArticles = await this.$axios.$post('/.netlify/functions/get-list', {
        type: 'articles'
      })
      payload.allNews = await this.$axios.$post('/.netlify/functions/get-list', {
        type: 'news'
      })
    }
    this.articleMain = payload.allArticles
    this.newsMain = payload.allNews
  }
}

// methods: {
//   convertDate (date) {
//     date = new Date(date)
//     const options = { year: 'numeric', month: 'long', day: 'numeric' }
//     return date.toLocaleDateString('id-ID', options)
//   }
// }

</script>
