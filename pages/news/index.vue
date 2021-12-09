<template>
  <!-- static -->
  <div class="main-container mx-auto">
    <!-- <SearchContainer
      :data="categoryList"
    /> -->
    <section class="news-section mt-6">
      <h1 class="text-center page-title mx-auto">
        Daftar Berita
      </h1>
      <div class="d-flex flex-column mr-md-10 ml-md-5">
        <div class="d-flex justify-space-between">
          <v-col
            v-for="(item, i) in historyList"
            :key="i"
          >
            <NewsCard1
              :item="item"
              class="dflex mx-auto"
            />
          </v-col>
        </div>
      </div>
    </section>

    <v-pagination
      v-model="page"
      :length="pages"
      class="pagination mt-5 ml-auto"
      @input="updatePage"
    />
  </div>

  <!-- api -->
<!-- <div class="main-container mx-auto">
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
      </h1> -->
  <!-- <SearchContainer
      :data="categoryList"
    /> -->
  <!-- <section class="news-section grey lighten-4">
        <div class="d-flex flex-column mx-auto card-container">
          <NewsCard1
            v-for="(item, i) in dataList"
            :key="i"
            :item="item"
          />
        </div>
      </section> -->

  <!-- <v-pagination
      v-model="page"
      :total-visible="6"
      class="content-pagination mt-5 ml-auto"
      @input="next"
    /> -->
  <!-- </div>
  </div> -->
</template>

<script>
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()
export default {
  // static
  data: () => ({
    page: 1,
    pageSize: 2,
    dataList: [
      {
        label: 'Komisi Hak',
        title: 'Himbauan Protokol Kesehatan Dalam Perayaan Natal 2021',
        subtitle: 'Himbauan Protokol Kesehatan Dalam Perayaan Natal 2021'
      },
      {
        label: 'Komisi Hak',
        title: 'Himbauan Protokol Kesehatan Dalam Perayaan Natal 2021',
        subtitle: 'Himbauan Protokol Kesehatan Dalam Perayaan Natal 2021'
      },
      {
        label: 'Komisi Kepemudaan',
        title: 'Panduan Untuk Mengikuti Misa Live Streaming',
        subtitle: 'Petunjuk Misa Online'
      },
      {
        label: 'Komisi Liturgi',
        title: 'Melindungi Keluarga Memulihkan Masyarakat',
        subtitle: 'Protokol New Normal Keluarga Katolik Keuskupan Surabaya'
      }

    ],
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
    ],
    listCount: 0,
    historyList: []
  }),

  computed: {
    pages () {
      const _this = this
      if (_this.pageSize == null || _this.listCount == null) { return 0 }
      return Math.ceil(_this.listCount / _this.pageSize)
    }
  },

  created () {
    const _this = this
    _this.initPage()
    _this.updatePage(_this.page)
  },

  methods: {
    initPage () {
      const _this = this
      _this.listCount = _this.dataList.length
      if (_this.listCount < _this.pageSize) {
        _this.historyList = _this.dataList
      } else {
        _this.historyList = _this.dataList.slice(0, _this.pageSize)
      }
    },
    updatePage (pageIndex) {
      const _this = this
      const _start = (pageIndex - 1) * _this.pageSize
      const _end = pageIndex * _this.pageSize
      _this.historyList = _this.dataList.slice(_start, _end)
      _this.page = pageIndex
    }
  }

  // api
  // data: () => ({
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

  // async fetch () {
  //   console.log('masuk')
  //   let payload = this.$nuxt.context.payload
  //   console.log('disini')
  //   if (!payload) {
  //     payload = await this.$axios.$post('/.netlify/functions/get-list', {
  //       type: 'news'
  //     })
  //   }
  //   console.log(payload)
  //   this.dataList = payload
  // }

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
