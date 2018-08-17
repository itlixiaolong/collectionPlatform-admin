
const template = {
  'code': 200,
  'data|10-100': [
    {
      total: null,
      totalPages: null,
      pageSize: 20,
      page: 1,
      start: 0,
      'role|1': [
        {
          total: null,
          totalPages: null,
          pageSize: 20,
          page: 1,
          start: 0,
          id: 1,
          roleCode: 'administrator',
          roleName: '超级管理员',
          createTime: null
        },
        {
          total: null,
          totalPages: null,
          pageSize: 20,
          page: 1,
          start: 0,
          id: 2,
          roleCode: 'default',
          roleName: '默认用户',
          createTime: null
        },
        {
          total: null,
          totalPages: null,
          pageSize: 20,
          page: 1,
          start: 0,
          id: 3,
          roleCode: 'depAdmin',
          roleName: '部门负责人',
          createTime: null
        },
        {
          total: null,
          totalPages: null,
          pageSize: 20,
          page: 1,
          start: 0,
          id: 4,
          roleCode: 'projectAdmin',
          roleName: '项目管理员',
          createTime: null
        }
      ],
      'emplId|+10': 10000,
      'name': '@cname',
      'mail': "@email( 'mockData.com')",
      'jobDesc|1': ['秘书', '部门经理', '项目主管', '总经理', 'java开发初级工程师', 'h5开发高级工程师', '系统架构师'],
      'deptId': '@natural(10000, 100000)',
      roleId: 2,
      updateTime: null,
      'depName|+1': ['产品部', '市场部', '策划部', '后勤部', '统筹部', '秘书部', '品管部', '执行部', '渠道部', '活动部']
    }
  ]
}
export default template
