<template>
  <v-card
    class="news-card mx-auto mt-6"
    :href="'/document/' + item.slug"
  >
    <LabelContainerCard :item="item" />
    <div class="d-flex flex-row ml-2 my-2 font-italic document-title">
      {{ item.title }}
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
  }
}
</script>
