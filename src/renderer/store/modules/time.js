// import timeListener from '@/time-listener'

const state = {
  time: []
}

const mutations = {
  changeTime (state, time) {
    state.time = time
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
