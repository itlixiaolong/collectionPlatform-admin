export const router = [
  {
    path: '/home',
    // component: Home,
    children: [
      {
        path: '/product',
        name: '产品管理',
        redirect: '/product-list',
        children: [
          {
            path: '/product-list',
            name: '产品列表'
            // component: ProductList
          },
          {
            path: '/product-add',
            name: '添加产品'
            // component: ProductList
          }
        ]
      },
      {
        path: '/userrights',
        name: '版权管理',
        // component: MainBox,
        children: [
          {
            path: '/userrights-menu',
            name: '版权申请'
            // component: MenuManage
          },
          {
            path: '/userrights-functions',
            name: '版权列表'
            // component: FunctionsManage
          }
        ]
      },
      {
        path: '/rbac',
        name: 'RBAC服务',
        // component: MainBox,
        children: [
          {
            path: '/role-list',
            name: '角色管理'
            // component: RoleList
          },
          {
            path: '/user-list',
            name: '用户管理'
            // component: UserList
          }
        ]
      },
      {
        path: '/project',
        name: '项目基础管理',
        // component: MainBox,
        children: [
          {
            path: '/project-list',
            name: '产品版本管理'
            // component: ProjectList
          },
          {
            path: '/project-tasklist',
            name: '项目蔓延数据'
            // component: ProjectTaskList
          },
          {
            path: '/project-service',
            name: '项目归属服务'
            // component: ProjectService
          },
          {
            path: '/project-testcase',
            name: '项目测试用例'
            // component: ProjectTestCase
          },
          {
            path: '/basic-devote',
            name: '人员投入度'
            // component: BasicDevote
          }
        ]
      },
      {
        path: '/measure',
        name: '度量管理',
        // component: MainBox,
        children: [
          {
            path: '/person-accuracy',
            name: '估算准确度'
            // component: PersonAccuracy
          },
          {
            path: '/depart',
            name: '部门数据',
            // component: MainBox,
            children: [
              {
                path: '/depart-demand',
                name: '需求数据'
                // component: DeparDemand
              },
              {
                path: '/depart-code',
                name: '每天代码行'
                // component: DepartCode
              },
              {
                path: '/depart-picture',
                name: '统计图'
                // component: DepartPicture
              },
              {
                path: '/depart-bug',
                name: '千行代码BUG率'
                // component: DepartBug
              },
              {
                path: '/depart-bugpic',
                name: 'Bug统计图表'
                // component: DepartBugPic
              }
            ]
          },
          {
            path: '/person',
            name: '个人数据',
            // component: MainBox,
            children: [
              {
                path: '/person-demand',
                name: '需求数据 '
                // component: PersonDemand
              },
              {
                path: '/person-code',
                name: '每天代码行 '
                // component: PersonCode
              },
              {
                path: '/person-bug',
                name: '千行代码BUG率 '
                // component: PersonBug
              },
              {
                path: '/person-bugrate',
                name: '迭代BUG率'
                // component: PersonBugrate
              },
              {
                path: '/person-detail',
                name: '代码详细列表'
                // component: PersonDetail
              }
            ]
          },
          {
            path: '/depart-efficient',
            name: '效能对比'
            // component: DepartEfficient
          }
        ]
      },
      {
        path: '/code',
        name: '代码库管理',
        // component: MainBox,
        children: [
          {
            path: '/code-create',
            name: '申请GIT项目'
            // component: CodeCreate
          },
          {
            path: '/code-approval',
            name: '审批列表'
            // component: CodeApproval
          },
          {
            path: '/code-manage',
            name: '代码库管理列表'
            // component: CodeManage
          },
          {
            path: '/code-viewpage/:id',
            name: '代码库详情页'
            // component: CodeViewpage
          }
        ]
      },
      {
        path: '/pipeline',
        name: '流水线管理',
        // component: MainBox,
        children: [
          {
            path: '/pipeline-list/:projectName',
            name: '流水线列表'
            // component: PipelineList
          },
          {
            path: '/pipeline-construct/:name',
            name: '构建记录'
            // component: PipelineConstruct
          },
          {
            path: '/pipeline-create/:jobName',
            name: '流水线创建'
            // component: PipelineCreate
          },
          {
            path: '/pipeline-changelog/:id',
            name: '代码变更记录'
            // component: PipelineChangelog
          },
          {
            path: '/build-approval',
            name: '构建审批列表'
            // component: BuildApproval
          },
          {
            path: '/pipeline-detail/:name',
            name: '流水线构建详情'
            // component: PipelineDetail
          }
        ]
      }

    ]
  }
]
