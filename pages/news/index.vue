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
          <v-row>
            <v-col
              v-for="(item, i) in dataList"
              :key="i"
              xs="12"
              sm="12"
              md="6"
              lg="4"
            >
              <v-card
                class="news-card mx-auto mt-5 mb-5"
              >
                <div class="primary d-flex label-container">
                  <div class="d-flex label-inner flex-sm-shrink-0 ma-2 white primary--text px-3 py-1 caption">
                    {{ item.author }}
                  </div>
                  <span class="white blue--text ml-auto px-3 py-1 ma-2 caption">
                    {{ $moment(item.publishDate).locale('id').format('DD MMMM YYYY') }}
                  </span>
                </div>

                <div class="d-flex flex-row ml-2 py-5 card-inner white primary--text px-3 py-1 caption">
                  <img
                    class="news-image-small mt-4"
                    :src="item.imageLink"
                  >
                  <div class="d-flex flex-column align-self-center ml-3 card-content">
                    <h3 class="card-title ">
                      {{ item.title }}
                    </h3>

                    <p class="card-subtitle mb-0 mt-2 caption grey--text lighten-4">
                      {{ item.excerpt }}
                    </p>
                    <v-btn
                      text
                      plain
                      medium
                      class="open-button primary--text d-md-flex ml-auto"
                      :to="'/news/'+ item.slug"
                    >
                      <i>Lihat</i>
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </section>
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
    dataList: []
  }),

  async fetch () {
    let payload = this.$nuxt.context.payload
    console.log(payload)
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/get-list', {
        type: 'news'
      })
    }
    this.dataList = payload
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
