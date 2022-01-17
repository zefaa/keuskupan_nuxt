<template>
  <v-card
    class="news-card-newest mx-auto mt-5 mb-5"
  >
    <!-- :href="'/news/' + item.slug" -->
    <div class="primary d-flex label-container">
      <div class="d-flex label-inner flex-sm-shrink-0 ma-2 white primary--text px-3 py-1 caption">
        {{ item.author }}
      </div>
      <span class="white blue--text ml-auto px-3 py-1 ma-2 caption">
        {{ $moment(item.publishDate).locale('id').format('DD MMMM YYYY') }}
      </span>
    </div>

    <div class="d-flex flex-row mt-2 mr-2">
      <div class="d-flex flex-column align-self-center ml-3  card-content">
        <img
          class="news-image-big mr-3"
          :src="item.imageLink"
        >
        <p class="card-title mb-0">
          {{ item.title }}
        </p>

        <p class="card-subtitle mb-0 grey--text lighten-4">
          {{ item.excerpt }}
        </p>

        <v-btn
          text
          plain
          class="open-button primary--text d-flex ml-auto mb-3"
          :to="'/' +type +'/' + item.slug"
        >
          <i>Lihat</i>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {

  props:
  {
    type: {
      type: String,
      default () {
        return this.type
      }
    },
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }

}
</script>
