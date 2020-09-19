import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/deal',
    name: 'Deal',
    component: () => import(/* webpackChunkName: "about" */ '../views/Deal.vue')
  },
  {
    path: '/dividend',
    name: 'Dividend',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dividend.vue')
  },
  {
    path: '/market',
    name: 'Market',
    component: () => import(/* webpackChunkName: "about" */ '../views/Market.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
