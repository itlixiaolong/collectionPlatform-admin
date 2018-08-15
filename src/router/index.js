import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/home')
const ViewPort = () => import(/* webpackChunkName: "home" */ '../components/viewport.vue')
const ProductList = () => import(/* webpackChunkName: "product" */ '../views/product-manage/product-list.vue')
const ProductAdd = () => import(/* webpackChunkName: "product" */ '../views/product-manage/product-add.vue')
const ProductVersionAdd = () => import(/* webpackChunkName: "product" */ '../views/product-manage/product-version/version-add.vue')
const ProductVersionHistory = () => import(/* webpackChunkName: "product" */ '../views/product-manage/product-version/version-history.vue')
const CopyrightApply = () => import(/* webpackChunkName: "copyright" */ '../views/copyright-manage/copyright-apply.vue')
const CopyrightApprove = () => import(/* webpackChunkName: "copyright" */ '../views/copyright-manage/copyright-approve/approve-list.vue')
const CopyrightList = () => import(/* webpackChunkName: "copyright" */ '../views/copyright-manage/copyright-list.vue')

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
            },
            {
              path: '/product-version-add',
              name: '添加产品版本',
              component: ProductVersionAdd
            },
            {
              path: '/product-version-history',
              name: '产品历史版本',
              component: ProductVersionHistory
            }
          ]
        },
        {
          path: '/copyright',
          name: '版权管理',
          component: ViewPort,
          redirect: '/copyright-apply',
          children: [
            {
              path: '/copyright-apply',
              name: '版权申请',
              component: CopyrightApply
            },
            {
              path: '/copyright-approve',
              name: '版权审批',
              component: CopyrightApprove
            },
            {
              path: '/copyright-list',
              name: '版权列表',
              component: CopyrightList
            }
          ]
        }

      ]

    }
  ]
})
