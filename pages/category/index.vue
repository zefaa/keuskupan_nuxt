<template>
  <v-app dark class="main-container mx-auto">
    <div>
      <p class="primary--text text-404 text-center mt-16">
        404
      </p>
      <p class="text-404-2 text-center">
        Halaman tidak ditemukan
      </p>
    </div>
    <div />
    <!-- <NuxtLink to="/">
      Home page
    </NuxtLink> -->
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
//   head () {
//     const title =
//       this.error.statusCode === 404 ? this.pageNotFound : this.otherError
//     return {
//       title
//     }
//   }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
