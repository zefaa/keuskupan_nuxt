<template>
  <div class="main-container mx-auto">
    <v-breadcrumbs :items="items" />
    <h1 class="text-center page-title mx-auto">
      Galeria
    </h1>
    <!-- <SearchContainer
      :data="categoryList"
    /> -->
    <section class="gallery-section grey lighten-4">
      <div class="mx-auto card-container py-5 mt-5">
        <v-row no-gutters class="inner-container">
          <v-col
            v-for="(item, i) in dataList"
            :key="i"
            cols="4"
            class="card-column"
          >
            <v-card
              :href="'/gallery/' + item.slug"
              class="post-card mx-5"
            >
              <v-img
                class="post-image"
                :src="item.images[0].file.url"
              />

              <LabelContainerCard :item="item" />

              <v-card-title class="card-title primary--text">
                {{ item.title }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </section>
    <v-pagination
      v-model="page"

      :total-visible="6"
      class="content-pagination mt-5 ml-auto"
      @input="next"
    />
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
        text: 'Galleria',
        disabled: true,
        href: ''
      }
    ]
  }),

  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/get-list', {
        type: 'gallery'
      })
    }
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
  //     const endIndex = Math.min(
  //       startIndex + this.pageSize - 1,
  //       this.mainList.length - 1
  //     )
  //     for (let index = startIndex; index <= endIndex; index++) {
  //       const element = this.mainList[index]
  //       this.dataList.push(element)
  //     }
  //   }
  // }
}
// async asyncData ({ store, env, params }) {
//   try {
//     // TODO ambil semua artikelnya lalu filter di client
//     // aman harusnya meski di static
//     const dataList = await client.getEntries({
//       content_type: 'gallery'
//     })
//     store.commit('users/setTemp', {
//       dataList: dataList.items
//     })
//     // const categoryList = await client.getEntries({
//     //   content_type: 'category',
//     //   'metadata.tags.sys.id[in]': 'gallery',
//     //   order: 'fields.slug'
//     // })
//     return {
//       // dataList: dataList.items
//       // categoryList: categoryList.items
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
//       text: 'Galleria',
//       disabled: true,
//       href: ''
//     }
//   ]
// }),
</script>
