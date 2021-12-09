<template>
  <div class="primary d-flex label-container ">
    <div class="d-flex flex-column justify-between label-inner flex-sm-shrink-0 ma-2 white primary--text px-3 py-1 caption">
      <!-- <span
        v-for="(item, i) in item.categories"
        :key="i"
        class="primary white--text font-italic px-3 py-1 caption"
      > -->
      {{ item.label }}
      <!-- </span> -->
    </div>
    <span class="white blue--text ml-auto px-3 py-1 ma-2 caption">
      <!-- {{ $moment(date).locale('id').format('DD MMMM YYYY') }} -->
      {{ $moment(date).locale('id').format('DD MMMM YYYY') }}
      <!-- {{ convertDate(item.createdAt) }} -->
    </span>
  </div>
</template>
<script>
export default {
  // api
  // props: {
  //   item: {
  //     type: Object,
  //     default () {
  //       return {}
  //     }
  //   }
  // },
  // methods: {
  //   convertDate (date) {
  //     date = new Date(date)
  //     const options = { year: 'numeric', month: 'long', day: 'numeric' }
  //     return date.toLocaleDateString('id-ID', options)
  //   }
  // }

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
