/* eslint-disable prettier/prettier */
const state = () => ({
  user: {}
})

const mutations = {
  SET_USER: (state, payload) => {
    state.user = payload
  }
}

const actions = {
  async nuxtServerInit({ commit }, { app }) {
    try {
      const { data } = await app.$axios({
        method: 'GET',
        url: '/users/weblw'
      })
      await commit('SET_USER', data)
    } catch(e) {}      
  }
}

export default {state, mutations, actions}
