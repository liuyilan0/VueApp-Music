import Vue from 'vue'
import Router from 'vue-router'

const Rank = () => import('components/rank')
const Search = () => import('components/search')
const Recommend = () => import('components/recommend')
const Singer = () => import('components/singer')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/rank'
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
  ]
})