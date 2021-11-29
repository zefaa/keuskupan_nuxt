<template>
  <div class="main-container mx-auto">
    <v-breadcrumbs
      :items="items"
    />
    <FetchStateHandler
      v-if="$fetchState.pending || $fetchState.error"
      :fetch-state="$fetchState"
      :fetch-function="$fetch"
    />
    <div v-else>
      <h1 class="text-center page-title mx-auto">
        News
      </h1>
      <!-- <SearchContainer
      :data="categoryList"
    /> -->
      <section class="news-section grey lighten-4">
        <div class="d-flex flex-column mx-auto card-container">
          <NewsCard1
            v-for="(item, i) in dataList"
            :key="i"
            :item="item"
          />
        </div>
      </section>

    <!-- <v-pagination
      v-model="page"
      :total-visible="6"
      class="content-pagination mt-5 ml-auto"
      @input="next"
    /> -->
    </div>
  </div>
</template>

<script>
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()
export default {
  data: () => ({
    dataList: [],
    items: [
      {
        text: 'Beranda',
        disabled: false,
        href: '/'
      },
      {
        text: 'News',
        disabled: true,
        href: ''
      }
    ]
  }),

  async fetch () {
    console.log('masuk')
    let payload = this.$nuxt.context.payload
    console.log('disini')
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/get-list', {
        type: 'news'
      })
    }
    console.log(payload)
    this.dataList = payload
  }

  // mounted () {
  //   const dataList = this.$store.state.users.tempItems.dataList
  //   dataList.forEach((element) => {
  //     this.mainList.push(element)
  //   })
  //   this.pages = Math.ceil(this.mainList.length / this.pageSize)
  //   this.fillPages()
  // },
  // methods: {
  //   next (page) {
  //     this.page = page
  //     this.dataList = []
  //     this.fillPages()
  //   },
  //   fillPages () {
  //     const startIndex = (this.page - 1) * this.pageSize
  //     const endIndex = Math.min(startIndex + this.pageSize - 1, this.mainList.length - 1)
  //     for (let index = startIndex; index <= endIndex; index++) {
  //       const element = this.mainList[index]
  //       this.dataList.push(element)
  //     }
  //   }
  // }
}

// keuskupan
// async asyncData ({ store, env, params }) {
//   try {
//     const dataList = await client.getEntries({
//       content_type: 'news'
//     })
//     store.commit('users/setTemp', {
//       dataList: dataList.items
//     })
//     const categoryList = await client.getEntries({
//       content_type: 'category',
//       'fields.parent.sys.contentType.sys.id': 'category',
//       'fields.parent.fields.slug': 'category-news',
//       order: 'fields.slug'
//     })
//     return {
//       // dataList: dataList.items,
//       categoryList: categoryList.items
//     }
//   } catch (e) {
//     // eslint-disable-next-line
//     console.error(e)
//   }
// },
// data: () => ({
//   pages: 0,
//   page: 1,
//   pageSize: 5,
//   mainList: [],
//   dataList: [],
//   items: [
//     {
//       text: 'Beranda',
//       disabled: false,
//       href: '/'
//     },
//     {
//       text: 'News',
//       disabled: true,
//       href: ''
//     }
//   ]
// }),

</script>
