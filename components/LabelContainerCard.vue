<template>
  <div class="d-flex label-container mt-5 mx-auto w-80">
    <span class="ml-auto red--text darken-2 align-self-center mr-5 caption">
      {{ $moment(item.publishDate).format('DD MMMM YYYY') }}
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
