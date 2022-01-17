<template>
  <div class="main-container mx-auto">
    <section class="news-section  mt-6">
      <h1 class="text-center page-title mx-auto">
        Daftar Artikel
      </h1>

      <div class="d-flex flex-column mx-auto card-container mt-6">
        <div class="d-flex justify-space-between">
          <v-col
            v-for="(item, i) in dataList"
            :key="i"
            xs="12"
            sm="12"
            md="6"
            lg="4"
          >
            <v-card
              class="news-card mx-auto mt-5 mb-5"
            >
              <div class="primary d-flex label-container">
                <div class="d-flex label-inner flex-sm-shrink-0 ma-2 white primary--text px-3 py-1 caption">
                  {{ item.author }}
                </div>
                <span class="white blue--text ml-auto px-3 py-1 ma-2 caption">
                  {{ $moment(item.publishDate).locale('id').format('DD MMMM YYYY') }}
                </span>
              </div>
              <!-- mengisi card dengan data dari item yang diberikan oleh pages yang menggunakan card ini  -->
              <div class="d-flex flex-row ml-2 py-5 card-inner white primary--text px-3 py-1 caption">
                <img
                  class="news-image-small mt-4"
                  :src="item.imageLink"
                >
                <div class="d-flex flex-column align-self-center ml-3 card-content">
                  <h3 class="card-title ">
                    {{ item.title }}
                  </h3>

                  <p class="card-subtitle mb-0 mt-2 caption grey--text lighten-4">
                    {{ item.content }}
                  </p>
                  <v-btn
                    text
                    plain
                    medium
                    class="open-button primary--text d-md-flex ml-auto"
                    :to="'/article/'+ item.slug"
                  >
                    <i>Lihat</i>
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

  data: () => ({
    dataList: [],

    items: [
      {
        text: 'Beranda',
        disabled: false,
        href: '/'
      },
      {
        text: 'Artikel',
        disabled: true,
        href: ''
      }
    ]

  }),

  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/get-list', {
        type: 'articles'
      })
    }
    this.dataList = payload
  }
}
</script>
