import { login } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    // 赋值token
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    // 发请求获取token
    async getToken({ commit }, payload) {
      const res = await login(payload)
      commit('setToken', res)
    }
  }
}
