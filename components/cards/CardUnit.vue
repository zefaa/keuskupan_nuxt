<template>
  <v-card
    class="body-card mx-auto mt-5 mb-5"
  >
    <div class="d-flex flex-row mt-2 mr-2">
      <div class="d-flex flex-column align-self-center ml-3  card-content">
        <p class="card-title mb-0 mx-3 ">
          {{ item.title }}
        </p>
        <p class="mb-3  ">
          {{ item.text }}
        </p>
        <p class="card-text mb-3  ">
          {{ item.textItem }}
        </p>
        <p class="card-textsub mb-3 ">
          {{ item.address }}
        </p>
        <p class="card-textsub  mb-3 ">
          {{ item.contact }}
        </p>
        <p class="card-textsub mb-3 ">
          {{ item.mail }}
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
