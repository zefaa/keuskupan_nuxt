<template>
  <v-card
    :href="'/document/' + data.fields.slug"
    class="news-card mx-auto mt-6"
  >
    <LabelContainerCard :data="data" />
    <div class="d-flex flex-row ml-2 my-2 font-italic document-title">
      {{ data.fields.title }}
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    data: Object
  }
}
</script>
