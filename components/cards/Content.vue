<template>
  <div class="body-card mx-auto mt-5 mb-5">
    <div class="d-flex flex-column align-self-center ml-3">
      <p class="card-title mb-0 mx-3">
        {{ item.title }}
      </p>
      <p class="card-text mb-3">
        {{ item.content }}
      </p>
    </div>
  </div>
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
