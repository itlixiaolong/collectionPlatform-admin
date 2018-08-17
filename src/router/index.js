import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/home')
const ViewPort = () => import(/* webpackChunkName: "home" */ '../components/viewport.vue')

// 功能管理
const MenuManage = () => import(/* webpackChunkName: "userrights" */ '../views/userrights-manage/userrights-menus.vue')
const FunctionsManage = () => import(/* webpackChunkName: "userrights" */ '../views/userrights-manage/userrights-functions.vue')
// 用户权限服务
const RoleList = () => import(/* webpackChunkName: "product" */ '../views/rbac/rbac-role/role-list.vue')
const UserList = () => import(/* webpackChunkName: "product" */ '../views/rbac/rbac-user/user-list.vue')
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
          path: '/userrights',
          name: '用户权限服务',
          component: ViewPort,
          children: [
            {
              path: '/userrights-menu',
              name: '菜单管理',
              component: MenuManage
            },
            {
              path: '/userrights-functions',
              name: '功能管理',
              component: FunctionsManage
            }
          ]
        },
        {
          path: '/rbac',
          name: '用户角色管理',
          component: ViewPort,
          children: [
            {
              path: '/role-list',
              name: '角色管理',
              component: RoleList
            },
            {
              path: '/user-list',
              name: '用户管理',
              component: UserList
            }
          ]
        },
        {
          path: '/product',
          name: '产品管理',
          component: ViewPort,
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
