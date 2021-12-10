<template>
  <div class="d-flex flex-md-row flex-sm-column justify-md-space-around mt-5 search-container">
    <div class="d-flex flex-row flex-grow-1 search-select-container">
      <div class="d-flex flex-column flex-grow-1">
        <label>Kategori</label>
        <v-select
          item-text="label"
          item-value="slug"
          :items="data"
          label=""
          dense
          outlined
          @change="changeCategory"
        />
      </div>
      <div class="d-flex flex-column flex-grow-1 mx-md-10 article-select">
        <label>Urutkan</label>
        <v-select
          item-text="label"
          item-value="value"
          :items="ordering"
          label=""
          dense
          outlined
          @change="changeSort"
        />
      </div>
    </div>
    <div class="d-flex flex-column flex-grow-1">
      <label>Cari</label>
      <v-text-field

        label=""
        placeholder="Ketik untuk mencari"
      />
    </div>
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
  data: () => ({
    ordering: [
      {
        label: 'Judul A-Z',
        value: 'title'
      },
      {
        label: 'Judul Z-A',
        value: '-title'
      },
      {
        label: 'Terbaru',
        value: '-created'
      },
      {
        label: 'Terlama',
        value: 'created'
      }
    ]
  }),
  computed: {
    filteredPosts () {
      return this.dataList.filter(item => item.title.includes(this.search))
    }
  },
  methods: {
    changeCategory (state, value) {
      this.$store.commit('users/setCategory', state)
    },
    changeSort (state, value) {
      this.$store.commit('users/setSort', state)
    },
    searchQuery (state, value) {
      this.$store.commit('users/setSearch', state)
    }
  }

}
</script>
