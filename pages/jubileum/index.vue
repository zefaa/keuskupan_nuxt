<template>
  <div class="main-container mx-auto">
    <section class="gallery-section mt-6">
      <h1 class="text-center page-title mx-auto">
        Jubileum
      </h1>
      <div class="d-flex flex-column mr-md-10 ml-md-5">
        <div class="d-flex justify-space-between">
          <v-col v-for="(item, i) in dataList" :key="i">
            <v-card class="news-card mx-auto mt-5 mb-5">
              <div class="primary d-flex label-container">
                <span class="white blue--text ml-auto px-3 py-1 ma-2 caption">
                  {{
                    $moment(item.publishDate)
                      .locale("id")
                      .format("DD MMMM YYYY")
                  }}
                </span>
              </div>

              <div
                class=" d-flex flex-row ml-2 py-5 card-inner white primary--text px-3 py-1"
              >
                <img class="news-image-small mt-4" :src="item.imageLink">
                <div
                  class="d-flex flex-column align-self-center ml-3 card-content"
                >
                  <h3 class="card-title">
                    {{ item.title }}
                  </h3>
                </div>
                <v-btn
                  text
                  plain
                  medium
                  class="open-button primary--text d-md-flex ml-auto"
                  :to="'/news/' + item.slug"
                >
                  <i>Lihat</i>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </div>
      </div>
    </section>
    <!-- <v-pagination
      v-model="page"
      :length="pages"
      :total-visible="6"
      class="content-pagination mt-5 ml-auto"
      @input="next"
    /> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    dataList: [
      {
        title: 'Edisi 247 tahun XXI Januari 2021'
      },
      {
        title: 'Edisi 248 tahun XXI Februari 2021'
      }
    ],
    images: [
      {
        src: require('@/assets/images/rehan.jpg')
      }
    ]
  })
}
</script>
