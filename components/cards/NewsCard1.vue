<template>
  <v-card
    class="news-card mx-auto my-5"
    :href="'/' + data.sys.contentType.sys.id + '/' + data.fields.slug "
  >
    <LabelContainerCard :data="data" />

    <div class="d-flex flex-row ml-2 py-5 card-inner">
      <img
        v-if="data.fields.image !== undefined"
        class="news-image-small"
        :src="data.fields.image.fields.file.url"
      >
      <img
        v-if="data.fields.image === undefined"
        class="news-image-small"
        :src="defaultThumbnail"
      >
      <div class="d-flex flex-column align-self-center ml-3 card-content">
        <h3 class="card-title ">
          {{ data.fields.title }}
        </h3>

        <p class="card-subtitle mb-0 mt-2 caption grey--text lighten-4">
          {{ data.fields.subtitle }}
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
    data: Object
  },
  data: () => ({
    defaultThumbnail: require('~/assets/images/default-card-thumbnail.svg')
  })
}
</script>
