<template>
  <v-card
    class="news-card mx-auto mt-5 mb-5"
  >
    <LabelContainerCard
      :item="item"
      :href="'/article/'+item.slug"
    />
    <!-- mengisi card dengan data dari item yang diberikan oleh pages yang menggunakan card ini  -->
    <div class="d-flex flex-row ml-2 py-5 card-inner white primary--text px-3 py-1 caption">
      <!-- <img
        v-if="item.image !== undefined"
        class="news-image-small"
        :src="item.imageLink"
      >
      <img
        v-if="item.image === undefined"
        class="news-image-small"
        :src="defaultThumbnail"
      > -->
      <img
        class="news-image-small mt-4"
        :src="item.url"
      >
      <div class="d-flex flex-column align-self-center ml-3 card-content">
        <h3 class="card-title ">
          {{ item.title }}
        </h3>

        <p class="card-subtitle mb-0 mt-2 caption grey--text lighten-4">
          {{ item.subtitle }}
        </p>
        <v-btn
          text
          plain
          medium
          class="open-button primary--text d-md-flex ml-auto"
          href="/page_"
        >
          <i>Lihat</i>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
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
  // api
  // props: {
  //   item: {
  //     type: Object,
  //     default () {
  //       return {}
  //     }
  //   }
  // },
  // data: () => ({
  //   defaultThumbnail: require('~/assets/images/default-card-thumbnail.svg')

  // })
}
</script>
