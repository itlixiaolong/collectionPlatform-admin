export const router = [
  {
    path: '/home',
    // component: Home,
    children: [
      {
        path: '/product',
        name: '产品管理',
        redirect: '/product-list',
        icon: 'icon-briefcase',
        children: [
          {
            path: '/product-list',
            name: '产品列表',
            icon: 'icon-stack'
            // component: ProductList
          },
          {
            path: '/product-add',
            name: '添加产品',
            icon: 'icon-indent-increase'
            // component: ProductList
          },
          {
            path: '/product-version-add',
            name: '添加产品版本',
            // component: ProductVersionAdd
            icon: 'icon-files-empty'
          },
          {
            path: '/product-version-history',
            name: '产品历史版本',
            icon: 'icon-git'
            // component: ProductVersionHistory
          }
        ]
      },
      {
        path: '/copyright',
        name: '版权管理',
        icon: 'icon-barcode',
        // component: ViewPort,
        redirect: '/copyright-apply',
        children: [
          {
            path: '/copyright-apply',
            name: '版权申请',
            icon: 'icon-playlist_add'
            // component: CopyrightApply
          },
          {
            path: '/copyright-approve',
            name: '版权审批',
            icon: 'icon-playlist_add_check'
            // component: CopyrightApprove
          },
          {
            path: '/copyright-list',
            name: '版权列表',
            icon: 'icon-format_list_numbered'
            // component: CopyrightList
          }
        ]
      }
    ]
  }
]
