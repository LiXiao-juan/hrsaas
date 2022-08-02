import router from './router'
import store from './store'

// 白名单----用户未登录也可以访问
const whiteList = ['/login', '/404']
// 全局路由守卫
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
//   判断是否登录
  if (token) {
    // 登录了若想去登录页面---强制去首页
    if (to.path === '/login') return next('/')
    // 不去登录页---放行
    next()
  } else {
    // 判断是否去白名单中----在就放行--不在就去登录页
    const isCludes = whiteList.includes(to.path)
    if (isCludes) return next()
    next('/login')
  }
})
