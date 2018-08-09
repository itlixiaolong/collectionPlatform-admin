
const template2 = {
  'data': {
    'projectList|4-10': [{
      'id|+1': 0,
      'projectName': '@ctitle(3, 5)',
      'cnName': '@cname',
      'description': '@csentence(1)',
      'namespace|1': ['zjc', 'aaa', 'xxx'],
      'pathWithNamespace|1': ['ZJC_Java / IEPlatform', 'xxx/aaaa', '部门c/jsc', '部门d/jdydfh'],
      'sshUrlToRepo|1': ['https://www.kancloud.cn/yunye/axios/234847', 'https://github.com/nuysoft/Mock/blob/refactoring/src/mock.js'],
      'webUrl|1': ['https://www.kancloud.cn/yunye/axios/234847', 'https://github.com/nuysoft/Mock/blob/refactoring/src/mock.js'],
      'lastActivityAt': '@date(T)',
      'projectType|1': ['HTML', 'Java', 'Python', 'Ruby', 'js'],
      'projectDepartments|1': [
        [
          {
            'id': 0,
            'projectCode': '171android',
            'depCode': '1007461',
            'depName': '通讯部'
          },
          {
            'id': 1,
            'projectCode': '171android',
            'depCode': '1007672',
            'depName': '名片部'
          }
        ],
        [
          {
            'id': 2,
            'projectCode': '171android',
            'depCode': '1007465',
            'depName': '网络部'
          }
        ],
        [
          {
            'id': 3,
            'projectCode': '171android',
            'depCode': '1007466',
            'depName': '物业部'
          },
          {
            'id': 1,
            'projectCode': '171android',
            'depCode': '1007672',
            'depName': '名片部'
          },
          {
            'id': 0,
            'projectCode': '171android',
            'depCode': '1007466',
            'depName': '通讯部'
          }
        ]
      ],
      'createdAt': '@date(T)',
      'status|1': [{ 'code': 0, 'value': '已完成' }, { 'code': 1, 'value': '审批中' }, { 'code': 2, 'value': '未完成' }],
      'approveComment': '审批备注',
      'comment': '备注'
    }],
    'options': {
      partments: [
        {
          'id': 3,
          'projectCode': '171android',
          'depCode': '1007466',
          'depName': '物业部'
        },
        {
          'id': 2,
          'projectCode': '171android',
          'depCode': '1007465',
          'depName': '网络部'
        },
        {
          'id': 1,
          'projectCode': '171android',
          'depCode': '1007672',
          'depName': '名片部'
        },
        {
          'id': 0,
          'projectCode': '171android',
          'depCode': '1007461',
          'depName': '通讯部'
        }

      ],
      languages: [
        {
          value: '选项1',
          label: 'HTML'
        }, {
          value: '选项2',
          label: 'java'
        }, {
          value: '选项3',
          label: 'js'
        }, {
          value: '选项4',
          label: 'python'
        }, {
          value: '选项5',
          label: 'ruby'
        }
      ],
      appstatus: [
        {
          'id': 1,
          'code': 1,
          'description': '审批中'
        },
        {
          'id': 2,
          'code': 2,
          'description': '审批完成'
        },
        {
          'id': 3,
          'code': 3,
          'description': '审批打回'
        }
      ]

    }

  }

}
export default template2
