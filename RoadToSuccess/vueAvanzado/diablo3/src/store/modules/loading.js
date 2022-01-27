export default {
  namespaced: true,
  state: {
    isLoading: false
  },
  mutotions: {
    SET_LOADING (state, payload) {
      state.isLoading = payload
    }
  }
}
