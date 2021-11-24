<template>
  <v-card
    class="news-card mx-auto mt-5"
    :href="'/news/' + data.fields.slug"
  >
    <div class="primary d-flex label-container">
      <div class="d-flex label-inner flex-sm-shrink-0 ma-2">
        <span
          v-for="(item, i) in data.fields.categories"
          :key="i"
          class="white primary--text px-3 py-1 caption"
        >
          {{ item.fields.label }}
        </span>
      </div>
      <span class="white blue--text ml-auto px-3 py-1 ma-2 caption">
        {{ convertDate(data.sys.createdAt) }}
      </span>
    </div>

    <div class="d-flex flex-row mt-2 ml-2">
      <img
        v-if="data.fields.image !== undefined"
        class="news-image-small"
        :src="data.fields.image.fields.file.url"
      >
      <img
        v-if="data.fields.youtube !== undefined && data.fields.image === undefined"
        class="news-image-small"
        :src="'https://img.youtube.com/vi/' + data.fields.youtube + '/maxresdefault.jpg'"
      >
      <img
        v-if="data.fields.image === undefined && data.fields.youtube === undefined"
        class="news-image-small"
        :src="defaultThumbnail"
      >
      <div class="d-flex flex-column align-self-center ml-3 card-content">
        <p class="card-title mb-0">
          {{ data.fields.title }}
        </p>

        <p class="card-subtitle mb-0 grey--text lighten-4">
          {{ data.fields.subtitle }}
        </p>

        <v-btn
          text
          plain
          class="open-button primary--text d-flex ml-auto mb-3"
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
  }),
  methods: {
    convertDate (date) {
      date = new Date(date)
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return date.toLocaleDateString('id-ID', options)
    }
  }
}
</script>
