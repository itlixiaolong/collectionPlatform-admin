
const template = {
  'code': 200,
  'data': [
    {
      path: '/home',
      name: '总集平台',
      // component: Home,
      code: '1总集平台',
      status: null,
      menuCode: 1,
      parentMenuCode: 0,
      sortCode: null,
      createTime: null,
      updateTime: null,
      children: [
        {
          path: '/product',
          name: '产品管理',
          icon: 'icon-briefcase',
          code: '100产品管理',
          status: null,
          menuCode: 100,
          parentMenuCode: 1,
          sortCode: null,
          createTime: null,
          updateTime: null,
          children: [
            {
              path: '/product-list',
              name: '产品列表',
              icon: 'icon-stack',
              code: '100100产品列表',
              status: null,
              menuCode: 100100,
              parentMenuCode: 100,
              sortCode: null,
              createTime: null,
              updateTime: null,
              children: [],
              functions: [{
                name: '查看',
                code: '1查看',
                status: null,
                functionCode: 1,
                functionEnName: 'view',
                functionUrl: '',
                menuCode: 100100,
                createTime: null,
                updateTime: null,
                roleId: null
              },
              {
                name: '修改',
                code: '2修改',
                status: null,
                functionCode: 2,
                functionEnName: 'edit',
                functionUrl: '',
                menuCode: 100100,
                createTime: null,
                updateTime: null,
                roleId: null
              },
              {
                name: '删除',
                code: '3删除',
                status: null,
                functionCode: 3,
                functionEnName: 'remove',
                functionUrl: '',
                menuCode: 100100,
                createTime: null,
                updateTime: null,
                roleId: null
              },
              {
                name: '历史版本',
                code: '4历史版本',
                status: null,
                functionCode: 4,
                functionEnName: 'remove',
                functionUrl: '',
                menuCode: 100100,
                createTime: null,
                updateTime: null,
                roleId: null
              }

              ],
              roleId: null
              // component: ProductList
            },
            {
              path: '/product-add',
              name: '添加产品',
              icon: 'icon-indent-increase',
              // component: ProductList
              code: '101100添加产品',
              status: null,
              menuCode: 101100,
              parentMenuCode: 101,
              sortCode: null,
              createTime: null,
              updateTime: null,
              children: [],
              functions: [
                {
                  name: '查看',
                  code: '9查看',
                  status: null,
                  functionCode: 9,
                  functionEnName: 'view',
                  functionUrl: '',
                  menuCode: 101100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                }
              ],
              roleId: null
            },
            {
              path: '/product-version-add',
              name: '添加产品版本',
              // component: ProductVersionAdd
              icon: 'icon-files-empty',
              // component: ProductList
              code: '101100添加产品版本',
              status: null,
              menuCode: 101100,
              parentMenuCode: 101,
              sortCode: null,
              createTime: null,
              updateTime: null,
              children: [],
              functions: [
                {
                  name: '查看',
                  code: '9查看',
                  status: null,
                  functionCode: 9,
                  functionEnName: 'view',
                  functionUrl: '',
                  menuCode: 101100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                }
              ],
              roleId: null

            },
            {
              path: '/product-version-history',
              name: '产品历史版本',
              icon: 'icon-git',
              // component: ProductVersionHistory
              code: '101100产品历史版本',
              status: null,
              menuCode: 101100,
              parentMenuCode: 101,
              sortCode: null,
              createTime: null,
              updateTime: null,
              children: [],
              functions: [
                {
                  name: '查看',
                  code: '9查看',
                  status: null,
                  functionCode: 9,
                  functionEnName: 'view',
                  functionUrl: '',
                  menuCode: 101100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '查询',
                  code: '查询',
                  status: null,
                  functionCode: 9,
                  functionEnName: 'search',
                  functionUrl: '',
                  menuCode: 101100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '修改',
                  code: '9修改',
                  status: null,
                  functionCode: 9,
                  functionEnName: 'edit',
                  functionUrl: '',
                  menuCode: 101100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '删除',
                  code: '9删除',
                  status: null,
                  functionCode: 9,
                  functionEnName: 'remove',
                  functionUrl: '',
                  menuCode: 101100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                }
              ],
              roleId: null

            }
          ],
          functions: []
        },
        {
          name: '版权管理',
          code: '101版权管理',
          icon: 'icon-barcode',
          status: null,
          menuCode: 101,
          parentMenuCode: 1,
          sortCode: null,
          path: '/copyright',
          createTime: null,
          updateTime: null,
          children: [
            {
              name: '版权申请',
              code: '101101版权申请',
              status: null,
              menuCode: 101101,
              parentMenuCode: 101,
              sortCode: null,
              path: '/copyright-apply',
              createTime: null,
              updateTime: null,
              children: [],
              functions: [
                {
                  name: '查看',
                  code: '14查看',
                  status: null,
                  functionCode: 14,
                  functionEnName: 'view',
                  functionUrl: '',
                  menuCode: 101101,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                }
              ],
              roleId: null
            },
            {
              name: '版权审批',
              code: '101100版权审批',
              icon: 'icon-playlist_add_check',
              status: null,
              menuCode: 101100,
              parentMenuCode: 101,
              sortCode: null,
              path: '/copyright-approve',
              createTime: null,
              updateTime: null,
              children: [],
              functions: [
                {
                  name: '查看',
                  code: '9查看',
                  status: null,
                  functionCode: 9,
                  functionEnName: 'view',
                  functionUrl: '',
                  menuCode: 101100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '审批',
                  code: '10审批',
                  status: null,
                  functionCode: 10,
                  functionEnName: 'approve',
                  functionUrl: '',
                  menuCode: 101100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '查询',
                  code: '11查询',
                  status: null,
                  functionCode: 11,
                  functionEnName: 'search',
                  functionUrl: '',
                  menuCode: 101100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                }
              ],
              roleId: null
            },
            {
              name: '版权列表',
              code: '101102版权列表',
              icon: 'icon-format_list_numbered',
              status: null,
              menuCode: 101102,
              parentMenuCode: 101,
              sortCode: null,
              path: '/copyright-list',
              createTime: null,
              updateTime: null,
              children: [],
              functions: [
                {
                  name: '查询',
                  code: '77查询',
                  status: null,
                  functionCode: 77,
                  functionEnName: 'search',
                  functionUrl: '',
                  menuCode: 101102,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '查看',
                  code: '79查看',
                  status: null,
                  functionCode: 79,
                  functionEnName: 'view',
                  functionUrl: '',
                  menuCode: 101102,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '删除',
                  code: '79删除',
                  status: null,
                  functionCode: 79,
                  functionEnName: 'remove',
                  functionUrl: '',
                  menuCode: 101102,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '下载Lisence',
                  code: '79下载Lisence',
                  status: null,
                  functionCode: 79,
                  functionEnName: 'downLoad',
                  functionUrl: '',
                  menuCode: 101102,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '查看版权详情',
                  code: '79查看版权详情',
                  status: null,
                  functionCode: 79,
                  functionEnName: 'viewVersionInfo',
                  functionUrl: '',
                  menuCode: 101102,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                }
              ],
              roleId: null
            }
          ],
          functions: [],
          roleId: null
        },
        {
          name: '菜单功能管理',
          code: '102菜单功能管理',
          icon: 'icon-dropbox',
          status: null,
          menuCode: 102,
          parentMenuCode: 1,
          sortCode: null,
          path: '/userrights',
          createTime: null,
          updateTime: null,
          children: [
            {
              name: '菜单管理',
              code: '102100菜单管理',
              icon: 'icon-file-text',
              status: null,
              menuCode: 102100,
              parentMenuCode: 102,
              sortCode: null,
              path: '/userrights-menu',
              createTime: null,
              updateTime: null,
              children: [],
              functions: [
                {
                  name: '查看',
                  code: '15查看',
                  status: null,
                  functionCode: 15,
                  functionEnName: 'view',
                  functionUrl: '',
                  menuCode: 102100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '新增',
                  code: '16新增',
                  status: null,
                  functionCode: 16,
                  functionEnName: 'add',
                  functionUrl: '',
                  menuCode: 102100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '删除',
                  code: '17删除',
                  status: null,
                  functionCode: 17,
                  functionEnName: 'delet',
                  functionUrl: '',
                  menuCode: 102100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '修改',
                  code: '18修改',
                  status: null,
                  functionCode: 18,
                  functionEnName: 'modify',
                  functionUrl: '',
                  menuCode: 102100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                }
              ],
              roleId: null
            },
            {
              name: '功能管理',
              code: '102101功能管理',
              icon: 'icon-exit',
              status: null,
              menuCode: 102101,
              parentMenuCode: 102,
              sortCode: null,
              path: '/userrights-functions',
              createTime: null,
              updateTime: null,
              children: [],
              functions: [
                {
                  name: '查看',
                  code: '19查看',
                  status: null,
                  functionCode: 19,
                  functionEnName: 'view',
                  functionUrl: '',
                  menuCode: 102101,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '新增',
                  code: '20新增',
                  status: null,
                  functionCode: 20,
                  functionEnName: 'add',
                  functionUrl: '',
                  menuCode: 102101,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '删除',
                  code: '21删除',
                  status: null,
                  functionCode: 21,
                  functionEnName: 'delete',
                  functionUrl: '',
                  menuCode: 102101,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '修改',
                  code: '22修改',
                  status: null,
                  functionCode: 22,
                  functionEnName: 'modify',
                  functionUrl: '',
                  menuCode: 102101,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                }
              ],
              roleId: null
            }
          ],
          functions: [],
          roleId: null
        },
        {
          name: '用户角色管理',
          code: '103用户角色管理',
          icon: 'icon-users',
          status: null,
          menuCode: 103,
          parentMenuCode: 1,
          sortCode: null,
          path: '/rbac',
          createTime: null,
          updateTime: null,
          children: [
            {
              name: '角色管理',
              code: '103100角色管理',
              icon: 'icon-user-circle',
              status: null,
              menuCode: 103100,
              parentMenuCode: 103,
              sortCode: null,
              path: '/role-list',
              createTime: null,
              updateTime: null,
              children: [],
              functions: [
                {
                  name: '查看',
                  code: '23查看',
                  status: null,
                  functionCode: 23,
                  functionEnName: 'view',
                  functionUrl: '',
                  menuCode: 103100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '增加',
                  code: '24增加',
                  status: null,
                  functionCode: 24,
                  functionEnName: 'add',
                  functionUrl: '',
                  menuCode: 103100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '删除',
                  code: '25删除',
                  status: null,
                  functionCode: 25,
                  functionEnName: 'delet',
                  functionUrl: '',
                  menuCode: 103100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '修改',
                  code: '26修改',
                  status: null,
                  functionCode: 26,
                  functionEnName: 'modify',
                  functionUrl: '',
                  menuCode: 103100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '分配权限',
                  code: '27分配权限',
                  status: null,
                  functionCode: 27,
                  functionEnName: 'authority',
                  functionUrl: '',
                  menuCode: 103100,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                }
              ],
              roleId: null
            },
            {
              name: '用户管理',
              code: '103101用户管理',
              icon: 'icon-user2',
              status: null,
              menuCode: 103101,
              parentMenuCode: 103,
              sortCode: null,
              path: '/user-list',
              createTime: null,
              updateTime: null,
              children: [],
              functions: [
                {
                  name: '查看',
                  code: '28查看',
                  status: null,
                  functionCode: 28,
                  functionEnName: 'view',
                  functionUrl: '',
                  menuCode: 103101,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '分配角色',
                  code: '29分配角色',
                  status: null,
                  functionCode: 29,
                  functionEnName: 'roleAllot',
                  functionUrl: '',
                  menuCode: 103101,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '数据导出',
                  code: '30数据导出',
                  status: null,
                  functionCode: 30,
                  functionEnName: 'exportDate',
                  functionUrl: '',
                  menuCode: 103101,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                },
                {
                  name: '数据同步',
                  code: '31数据同步',
                  status: null,
                  functionCode: 31,
                  functionEnName: 'updateData',
                  functionUrl: '',
                  menuCode: 103101,
                  createTime: null,
                  updateTime: null,
                  roleId: null
                }
              ],
              roleId: null
            }
          ],
          functions: [],
          roleId: null
        }
      ],
      functions: [],
      roleId: null
    }
  ]
}
export default template
