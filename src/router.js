import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: require('./compontents/login.vue') },
//   { path: '/gpa', component: gpa },
//   { path: '/exam', component: exam },
  { path: '/about', component: require('./compontents/about.vue') },
  { path: '/', redirect: '/login' },
]

const router = new VueRouter({
  routes,
  linkActiveClass: "current"
})

export default router;