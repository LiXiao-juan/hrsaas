import router, { asyncRoutes, constantRoutes } from '@/router'
export default {
  namespaced: true,
  state: {
    routes: [], //自己维护的路由规则，当前这个用户所拥有的权限
    points: []
  },
  mutations: {
    setRoutes(state, route) {
      state.routes = [...constantRoutes, ...route]
    },
    // 设置按钮权限 
    setPoints(state, points) {
      state.points = points    }
  },
  actions: {
    filterRouters({ commit }, roles) {
      const routes = asyncRoutes.filter((item) =>
        roles.menus.includes(item.meta.id)
      )
      commit('setRoutes', routes)
      // console.log(routes)
      router.addRoutes([
        ...routes,
        { path: '*', redirect: '/404', hidden: true }
      ])
    }
  }
}
