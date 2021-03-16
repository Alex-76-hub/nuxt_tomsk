export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({commit, dispatch}, formData) {
    try {
      const {token} = await this.$axios.$post('/api/admin/login', formData)
      console.log({token})
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async createUser({commit, dispatch}, formData) {

    try {
      const {user} = await this.$axios.$post('/api/admin/create', formData)
      console.log({user})
      //dispatch('setToken', token)
    } catch (e) {
      this.$message.warning('Такой пользователь уе существует!')
      throw e
    }
  },
  setToken({commit}, token) {
    commit('setToken', token)
  },
  logout({commit}) {
    commit('clearToken')
  },
}

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}
