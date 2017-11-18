import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: require('./compontents/login.vue') },
    { path: '/gpa', component: require('./compontents/gpa.vue') },
    { path: '/exam', component: require('./compontents/exam.vue') },
    { path: '/table', component: require('./compontents/timeTable.vue') },
    { path: '/about', component: require('./compontents/about.vue') },
    { path: '/', redirect: '/login' },
]

const router = new VueRouter({
  routes,
  linkActiveClass: "current"
})

router.beforeEach((to, from, next) => {
  // 用汉堡菜单导航时, 主动关闭菜单
  var document = window.document
  var sidebar = document.querySelector('.sidebar')
  if (sidebar)
    sidebar.classList.remove('open')
  if(to.path === "/" || to.path === "/login"){
    next()
    return
  }
  var store = router.app.$store
  if (store !== undefined) {
    var state = store.state
  } else {
    next('/login')
    return
  }
  if (to.path === '/exam') {
    if (!store.getters.hasExamData) {
      // 尚未获取数据
      store.dispatch('fetchExam')
      return
    }
    next()
  }
  if (to.path === '/gpa') {
    if (!store.getters.hasGPAData) {
      store.dispatch('fetchGPA')
      return
    }
    next()
  }
  if (to.path === '/table') {
    if (!store.getters.hasTableData) {
        store.dispatch('fetchTable')
        return
    }
    next()
  }
  next()
})

export default router;