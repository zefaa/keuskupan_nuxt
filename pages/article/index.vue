<template>
  <div class="main-container mx-auto">
    <v-breadcrumbs :items="items" />
    <h1 class="text-center page-title mx-auto">
      Daftar Artikel
    </h1>
    <!-- <SearchContainer
      :data="categoryList"
    /> -->

    <section class="news-section grey lighten-4">
      <div class="d-flex flex-column mx-auto card-container">
        <!--ambil data yang ada di dataList-->
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
    <!-- {{ changeCategory(selectedCategory) }}
    {{ changeSort(selectedSort) }}
    {{ changeSearch(searchQuery) }} -->
  </div>
</template>

<script>
// import { createClient } from "~/plugins/contentful.js";

// const client = createClient();
export default {
  // imavi
  // data yang mau diambil
  data: () => ({
    dataList: [],
    items: [
      {
        text: 'Beranda',
        disabled: false,
        href: '/'
      },
      {
        text: 'Artikel',
        disabled: true,
        href: ''
      }
    ]
  }),

  // ambil data dari API
  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/get-list', {
        type: 'articles'
      })
    }
    console.log(payload)
    this.dataList = payload
  }

  // keuskupan
  // async asyncData({ store, env, params }) {
  //   try {
  //     // TODO ambil semua artikelnya lalu filter di client
  //     // aman harusnya meski di static
  //     const articleList = await client.getEntries({
  //       content_type: "article",
  //     });
  //     const categoryList = await client.getEntries({
  //       content_type: "category",
  //       "fields.parent.sys.contentType.sys.id": "category",
  //       "fields.parent.fields.slug": "category-article",
  //       order: "fields.slug",
  //     });
  //     store.commit("users/setTemp", {
  //       articleList: articleList.items,
  //     });
  //     return {
  //       // articleList: articleList.items,
  //       categoryList: categoryList.items,
  //     };
  //   } catch (e) {
  //     // eslint-disable-next-line
  //     console.error(e);
  //   }
  // },

  // data: () => ({
  //   pages: 0,
  //   page: 1,
  //   pageSize: 5,
  //   mainList: [],
  //   dataList: [],
  //   categoryQuery: "",
  //   sortQuery: "",
  //   searchQueryText: "",
  //   items: [
  //     {
  //       text: "Beranda",
  //       disabled: false,
  //       href: "/",
  //     },
  //     {
  //       text: "Artikel",
  //       disabled: true,
  //       href: "",
  //     },
  //   ],
  // }),

  // computed: {
  //   selectedCategory () {
  //     return this.$store.state.users.selectedCategory
  //   },
  //   selectedSort () {
  //     return this.$store.state.users.selectedSort
  //   },
  //   searchQuery () {
  //     return this.$store.state.users.searchQuery
  //   }
  // },
  // mounted () {
  //   const articleList = this.$store.state.users.tempItems.articleList
  //   articleList.forEach((element) => {
  //     this.mainList.push(element)
  //   })
  //   this.pages = Math.ceil(this.mainList.length / this.pageSize)
  //   this.fillPages()
  // },
  // // TODO lanjut lagi sini
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
  //   },
  //   changeCategory (value) {
  //     console.log('Kategori:' + value)
  //     this.categoryQuery = value
  //     this.filterData()
  //   },
  //   changeSort (value) {
  //     console.log('Sort:' + value)
  //     this.sortQuery = value
  //   },
  //   changeSearch (value) {
  //     console.log('Kategori:' + value)
  //     this.searchQueryText = value
  //   },
  //   filterData () {
  //     this.$_.sortBy(this.mainList, 'fields.title')
  //   }
  // }
}
</script>
