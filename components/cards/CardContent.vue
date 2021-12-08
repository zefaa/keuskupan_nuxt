<template>
  <v-card
    class="body-card mx-auto mt-5 mb-5"
  >
    <div class="d-flex flex-row mt-2 mr-2">
      <div class="d-flex flex-column align-self-center ml-3  card-content">
        <p class="card-title mb-0 mx-3">
          {{ item.title }}
        </p>
        <img
          class="news-image-big mr-3"
          :src="item.url"
        >
        <p class="card-subtitle mb-0 grey--text lighten-4 text-center">
          {{ item.subtitle }}
        </p>
        <v-card-text class="card-text mb-3 justify-space-around">
          {{ item.text }}
        </v-card-text>
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
}
</script>
