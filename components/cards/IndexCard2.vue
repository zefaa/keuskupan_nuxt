<template>
  <v-card
    class="news-card mx-auto mt-5 mb-5"
  >
    <!-- :href="'/news/' + item.slug" -->
    <div class="primary d-flex label-container">
      <div class="d-flex label-inner flex-sm-shrink-0 ma-2 white primary--text px-3 py-1 caption">
        <!-- <span
          v-for="(item, i) in item.categories"
          :key="i"
          class="white primary--text px-3 py-1 caption"
        > -->
        {{ item.label }}
        <!-- </span> -->
      </div>
      <span class="white blue--text ml-auto px-3 py-1 ma-2 caption">
        {{ $moment(item.publishDate).locale('id').format('DD MMMM YYYY') }}
      </span>
    </div>

    <div class="d-flex flex-row mt-2 mr-2">
      <img
        class="news-image-small mx-2 mt-4"
        :src="item.imageLink"
      >
      <div class="d-flex flex-column align-self-center ml-3 card-content">
        <p class="card-title mb-0">
          {{ item.title }}
        </p>

        <p class="card-subtitle mb-0 mt-2 grey--text lighten-4">
          {{ item.subtitle }}
        </p>

        <v-btn
          text
          plain
          class="open-button primary--text d-flex ml-auto mb-3"
          :href="'/'+type+'/' + item.slug"
        >
          <i>Lihat</i>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  // api
  // props: {
  //   date: String,
  //   item: {
  //     type: Object,
  //     default () {
  //       return {}
  //     }
  //   }
  // }

  // static
  props:
  {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
  // data: () => ({
  //   defaultThumbnail: require('~/assets/images/default-card-thumbnail.svg')
  // })
  // methods: {
  //   convertDate (date) {
  //     date = new Date(date)
  //     const options = { year: 'numeric', month: 'long', day: 'numeric' }
  //     return date.toLocaleDateString('id-ID', options)
  //   }
  // }
}
</script>
