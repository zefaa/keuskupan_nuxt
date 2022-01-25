<template>
  <!-- static -->
  <div class="main-container mx-auto">
    <!-- static -->

    <!-- <SearchContainer
      :data="categoryList"
    /> -->

    <section class="news-section  mt-6">
      <h1 class="text-center page-title mx-auto">
        Daftar Dokumen
      </h1>
      <div class="d-flex flex-column mx-auto card-container mt-6">
        <div class="d-flex justify-space-between">
          <v-row>
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
                      {{ item.excerpt }}
                    </p>
                    <v-btn
                      text
                      plain
                      medium
                      class="open-button primary--text d-md-flex ml-auto"
                      :to="'/document/'+ item.slug"
                    >
                      <i>Lihat</i>
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </section>
  </div>

  <!-- api -->
  <!-- <div class="main-container mx-auto">
    <v-breadcrumbs
      :items="items"
    />
    <FetchStateHandler
      v-if="$fetchState.pending || $fetchState.error"
      :fetch-state="$fetchState"
      :fetch-function="$fetch"
    />

    <div v-else>
      <h1 class="text-center page-title mx-auto">
        Daftar Dokumen
      </h1> -->
  <!-- <SearchContainer
      :data="categoryList"
    /> -->
  <!-- <section class="news-section grey lighten-4">
        <div class="d-flex flex-column mx-auto card-container py-5">
          <DocumentCard v-for="(item, i) in dataList" :key="i" :item="item" />
        </div>
      </section> -->
  <!-- <v-pagination
      v-model="page"
      :length="pages"
      :total-visible="6"
      class="content-pagination mt-5 ml-auto"
      @input="next"
    /> -->
  <!-- </div>
  </div> -->
</template>

<script>
export default {

  data: () => ({
    dataList: []

  }),

  async fetch () {
    let payload = this.$nuxt.context.payload

    if (!payload) {
      console.log('disini')
      payload = await this.$axios.$post('/.netlify/functions/get-list', {
        type: 'documents'
      })
    }
    this.dataList = payload
  }
}
</script>
