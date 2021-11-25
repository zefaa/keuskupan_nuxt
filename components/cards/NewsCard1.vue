<template>
  <v-card
    class="news-card mx-auto my-5"
  >
    <!-- href="'/' + data.sys.contentType.sys.id + '/' + data.fields.slug " -->
    <LabelContainerCard :item="item" />

    <div class="d-flex flex-row ml-2 py-5 card-inner">
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
        >
          <i>Lihat</i>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data: () => ({
    defaultThumbnail: require('~/assets/images/default-card-thumbnail.svg')

  })
}
</script>
