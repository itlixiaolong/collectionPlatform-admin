import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/home')
const ViewPort = () => import(/* webpackChunkName: "home" */ '../components/viewport.vue')
const ProductList = () => import(/* webpackChunkName: "navmenu" */ '../views/product-manage/product-list.vue')
const ProductAdd = () => import(/* webpackChunkName: "navmenu" */ '../views/product-manage/product-add.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      name: '首页',
      component: Home,
      children: [
        {
          path: '/product',
          name: '产品管理',
          component: ViewPort,
          redirect: '/product-list',
          children: [
            {
              path: '/product-list',
              name: '产品列表',
              component: ProductList
            },
            {
              path: '/product-add',
              name: '添加产品',
              component: ProductAdd
            }
          ]
        }

      ]

    }
  ]
})
