<template>
  <div class="main-container mx-auto">
    <v-breadcrumbs
      :items="items"
    />
    <h1 class="text-center page-title mx-auto">
      {{ categoryDetail.fields.label }}
    </h1>
    <!-- <div class="d-flex flex-md-row flex-sm-column justify-md-space-around mt-5 search-container">
      <div class="d-flex flex-row flex-grow-1 search-select-container">
        <div class="d-flex flex-column flex-grow-1">
          <label>Departemen</label>
          <v-select
            :items="items"
            label=""
            dense
            outlined
          />
        </div>
        <div class="d-flex flex-column flex-grow-1 mx-md-10 article-select">
          <label>Urutkan</label>
          <v-select
            :items="items"
            label=""
            dense
            outlined
          />
        </div>
      </div>
      <div class="d-flex flex-column flex-grow-1">
        <label>Cari</label>
        <v-text-field
          label=""
          placeholder="Ketik untuk mencari"
          outlined
          dense
        />
      </div>
    </div> -->
    <section class="news-section grey lighten-4 mt-5">
      <div
        v-if="contentType !== 'document'"
        class="d-flex flex-column mx-auto card-container"
      >
        <NewsCard1 v-for="(item, i) in dataList" :key="i" :data="item" />
      </div>
      <div
        v-if="contentType === 'document'"
        class="d-flex flex-column mx-auto card-container"
      >
        <v-card
          v-for="(item, i) in dataList"
          :key="i"
          :href="'/document/' + item.fields.slug"
          class="news-card mx-auto mt-6"
        >
          <LabelContainerCard :data="item" />
          <div class="d-flex flex-row ml-2 my-2 font-italic document-title">
            {{ item.fields.title }}
          </div>
        </v-card>
      </div>
    </section>
    <v-pagination
      v-model="page"
      :length="pages"
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
        text: 'Kategori',
        disabled: true,
        href: ''
      }
    ]
  }),

  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/get-list', {
        type: 'category'
      })
    }
    this.dataList = payload
  },

  mounted () {
    this.items.push({
      text: this.categoryDetail.fields.label,
      disabled: true,
      href: ''
    })
    const dataList = this.$store.state.users.tempItems.dataList
    dataList.forEach((element) => {
      this.mainList.push(element)
    })
    this.pages = Math.ceil(this.mainList.length / this.pageSize)
    this.fillPages()
  },

  methods: {
    next (page) {
      this.page = page
      this.dataList = []
      this.fillPages()
    },
    fillPages () {
      const startIndex = (this.page - 1) * this.pageSize
      const endIndex = Math.min(startIndex + this.pageSize - 1, this.mainList.length - 1)
      for (let index = startIndex; index <= endIndex; index++) {
        const element = this.mainList[index]
        this.dataList.push(element)
      }
    }
  }
}
// async asyncData ({ store, env, params, error }) {
//   try {
//     const categoryDetail = await client.getEntries({
//       content_type: 'category',
//       'fields.slug': params.id
//     })
//     // ntah mengapa kategori meski dibeginikan baru kefire 404nya
//     if (!categoryDetail || categoryDetail.items.length === 0) {
//       throw new Error('404', 'Not found')
//     }
//     // ambil semuanya filter local, kosongkan yang ini terus
//     const dataList = []
//     let contentType = 'article'
//     if (categoryDetail.items[0].fields.parent.fields.slug === 'category-news') {
//       contentType = 'news'
//     } else if (categoryDetail.items[0].fields.parent.fields.slug === 'category-document') {
//       contentType = 'document'
//     }
//     const contentList = await client.getEntries({
//       content_type: contentType
//     })
//     contentList.items.forEach((element) => {
//       const categories = element.fields.categories
//       for (let index = 0; index < categories.length; index++) {
//         const category = categories[index]
//         if (category.fields.slug === params.id) {
//           dataList.push(element)
//           break
//         }
//       }
//     })
//     store.commit('users/setTemp', {
//       dataList
//     })
//     return {
//       // dataList,
//       contentType,
//       categoryDetail: categoryDetail.items[0]
//     }
//   } catch (e) {
//     // eslint-disable-next-line
//     console.error(e)
//     error({ statusCode: 404, message: 'Post not found' })
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
//       text: 'Kategori',
//       disabled: true,
//       href: ''
//     }
//   ]
// }),

</script>
