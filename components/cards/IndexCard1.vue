<template>
  <v-card
    class="news-card mx-auto"
    :href="'/news/' + slug + '/'"
  >
    <div class="primary d-flex label-container">
      <div class="d-flex label-inner flex-sm-shrink-0 ma-2">
        <span
          v-for="(item, i) in tags"
          :key="i"
          class="white primary--text px-3 py-1 caption"
        >{{ item }}</span>
      </div>
      <span class="white blue--text ml-auto px-3 py-1 ma-2 caption">{{ date }}</span>
    </div>

    <v-img
      class="news-image"
      :src="image"
    />

    <v-card-title class="card-title">
      {{ title }}
    </v-card-title>

    <v-card-subtitle class="card-subtitle grey--text lighten-4">
      {{ subtitle }}
    </v-card-subtitle>

    <v-btn
      text
      plain
      class="open-button primary--text d-flex ml-auto font-weight-regular"
    >
      <i>Lihat</i>
    </v-btn>
  </v-card>
</template>
<script>
export default {
  props: {
    tags: Array,
    date: String,
    image: String,
    title: String,
    subtitle: String,
    slug: String
  }
}
</script>
