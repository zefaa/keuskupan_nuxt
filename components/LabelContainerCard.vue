<template>
  <div class="d-flex label-container primary--border--bottom">
    <div class="d-flex label-inner flex-sm-shrink-0 ma-2">
      <span
        v-for="(item, i) in item.categories"
        :key="i"
        class="primary white--text font-italic px-3 py-1 caption"
      >
        {{ item.label }}
      </span>
    </div>
    <span class="ml-auto grey--text darken-2 align-self-center mr-5 my-3 caption">
      {{ convertDate(item.createdAt) }}
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
  },
  methods: {
    convertDate (date) {
      date = new Date(date)
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return date.toLocaleDateString('id-ID', options)
    }
  }
}
</script>
