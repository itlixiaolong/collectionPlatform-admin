import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/home')
const SubNav = () => import(/* webpackChunkName: "navmenu" */ '../components/submenu.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      children: [
        {
          path: '/sub-nav',
          name: '二级导航',
          component: SubNav
        }
      ]

    }
  ]
})
