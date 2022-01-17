<template>
  <div class="d-flex label-container mt-5 mx-auto w-80">
    <div class="d-flex label-inner flex-sm-shrink-0 ma-2">
      <span
        class="ml-auto red--text darken-2 align-self-center mr-5 caption"
      >
        oleh : {{ item.author }}
      </span>
    </div>
    <span class="ml-auto red--text darken-2 align-self-center mr-5 caption">
      {{ $moment(item.publishDate).format('D MMMM YYYY') }}
    </span>
  </div>
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
