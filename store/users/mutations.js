export default {
  setLoading (state, loading) {
    state.loading = loading
  },

  setCategory (state, value) {
    state.selectedCategory = value
  },

  setSort (state, value) {
    state.selectedSort = value
  },

  setSearch (state, value) {
    state.searchQuery = value
  },

  setTemp (state, value) {
    state.tempItems = value
  }

}
