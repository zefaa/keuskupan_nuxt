<template>
  <v-card
    class="news-card-newest mx-auto mt-5 mb-5"
  >
    <div class="d-flex flex-row mt-2 mr-2">
      <div class="d-flex flex-column align-self-center ml-3  card-content">
        <img
          class="news-image-big mr-3"
          :src="item.url"
        >
        <p class="card-title mb-0 text-center">
          {{ item.title }}
        </p>

        <p class="card-subtitle mb-0 grey--text lighten-4 text-center">
          {{ item.subtitle }}
        </p>
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
