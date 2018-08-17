<template>
  <div class="product-list">
    <div class="search-box">
      <el-input
        v-model="productName"
        placeholder="请输入产品名称"
        clearable/>
      <el-input
        v-model="productName"
        placeholder="请输入申请人"
        clearable/>
      <el-button>查询</el-button>
    </div>
    <div class="product-table">
      <el-table
        v-loading.body="loading"
        ref="multipleTable"
        :data="productList"
        element-loading-text="拼命加载中..."
        tooltip-effect="dark"
        fit
        border
      >
        <el-table-column
          type="selection"
          align="center"
        />
        <el-table-column
          :index="calculateIndex"
          label="序号"
          type="index"
          align="center"
        />
        <el-table-column
          prop="name"
          label="产品名称"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope">{{ `${scope.row.namespace}/${scope.row.projectName}` }}</template>
        </el-table-column>
        <el-table-column

          label="申请人"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.projectType }}</template>
        </el-table-column>
        <el-table-column

          label="授权公司"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span
              v-for="(item,index) in scope.row.projectDepartments"
              :key="index"
              class="parment"
            >
              {{ item.depName }}
            </span>
          </template>
        </el-table-column>
        <el-table-column

          label="操作"
          align="center"
          fixed="right"
          width="260"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <div class="btn-weapper">
              <el-button
                type="primary"
                size="mini">审批</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-wrapper">
        <el-pagination
          :total="pagetotle"
          :page-size="pagesize"
          :current-page.sync="currentPage"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handlesSizeChange"
          @current-change="handleCurrentPageChange"
          @prev-click="handlePrevPageChange"
          @next-click="handleNextPageChange"
        />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CopyrightApprove',
  data () {
    return {
      // 搜索条件数据
      productName: '',
      productStatus: '',
      productRegion: '',
      productTrade: '',
      status: [
        {
          label: '演示版本',
          value: 0
        },
        {
          label: '企业版本',
          value: 1
        },
        {
          label: '正式版本',
          value: 2
        }
      ],
      regions: [
        {
          label: '华北',
          value: 0
        },
        {
          label: '东南',
          value: 1
        },
        {
          label: '华东',
          value: 2
        }
      ],
      trades: [
        {
          label: '教育',
          value: 0
        },
        {
          label: '金融',
          value: 1
        },
        {
          label: '政府',
          value: 2
        }
      ],
      // 产品列表数据
      loading: false,
      productList: [
        {
          total: null,
          totalPages: null,
          pageSize: 20,
          page: 1,
          start: 0,
          id: 2379,
          projectName: 'temail-data-consistency',
          cnName: 'temail数据一致性服务',
          projectCode: '993java',
          description: 'message保存数据库与发送消息队列的数据一致性保证服务',
          projectType: 'java',
          namespace: 'java_temail',
          pathWithNamespace: 'java_temail/temail-data-consistency',
          sshUrlToRepo:
            'git@172.28.4.12:java_temail/temail-data-consistency.git',
          webUrl: 'http://172.28.4.12/java_temail/temail-data-consistency',
          defaultBranch: '',
          comment: '',
          approveComment: '',
          status: 2,
          lastActivityAt: 1534126959362,
          createdAt: 1534126959362,
          projectDepartments: [
            {
              id: 2738,
              projectId: 2379,
              depCode: '6000220',
              depName: '总集成部'
            }
          ],
          projectUsers: []
        },
        {
          total: null,
          totalPages: null,
          pageSize: 20,
          page: 1,
          start: 0,
          id: 2338,
          projectName: 'cdtp-status',
          cnName: 'CDTP状态服务',
          projectCode: '990java',
          description: 'CDTP状态服务',
          projectType: 'java',
          namespace: 'ZJC_Java',
          pathWithNamespace: 'ZJC_Java/cdtp-status',
          sshUrlToRepo: 'git@172.28.4.12:ZJC_Java/cdtp-status.git',
          webUrl: 'http://172.28.4.12/ZJC_Java/cdtp-status',
          defaultBranch: '',
          comment: '',
          approveComment: '',
          status: 2,
          lastActivityAt: 1533890089236,
          createdAt: 1533890089236,
          projectDepartments: [
            {
              id: 2732,
              projectId: 2338,
              depCode: '6000220',
              depName: '总集成部'
            }
          ],
          projectUsers: []
        },
        {
          total: null,
          totalPages: null,
          pageSize: 20,
          page: 1,
          start: 0,
          id: 2337,
          projectName: 'cdtp-dispatcher',
          cnName: 'CDTP信息分发服务',
          projectCode: '988java',
          description: 'CDTP信息分发服务',
          projectType: 'java',
          namespace: 'java_temail',
          pathWithNamespace: 'java_temail/cdtp-dispatcher',
          sshUrlToRepo: 'git@172.28.4.12:java_temail/cdtp-dispatcher.git',
          webUrl: 'http://172.28.4.12/java_temail/cdtp-dispatcher',
          defaultBranch: '',
          comment: '',
          approveComment: '',
          status: 2,
          lastActivityAt: 1533809920647,
          createdAt: 1533809920647,
          projectDepartments: [
            {
              id: 2730,
              projectId: 2337,
              depCode: '6000220',
              depName: '总集成部'
            }
          ],
          projectUsers: []
        },
        {
          total: null,
          totalPages: null,
          pageSize: 20,
          page: 1,
          start: 0,
          id: 2336,
          projectName: 'zjc-apm',
          cnName: '总集全链路监控',
          projectCode: '987java',
          description: '总集全链路监控系统',
          projectType: 'java',
          namespace: 'ZJC_Java',
          pathWithNamespace: 'ZJC_Java/zjc-apm',
          sshUrlToRepo: 'git@172.28.4.12:ZJC_Java/zjc-apm.git',
          webUrl: 'http://172.28.4.12/ZJC_Java/zjc-apm',
          defaultBranch: '',
          comment: '',
          approveComment: '',
          status: 2,
          lastActivityAt: 1533803983209,
          createdAt: 1533803983209,
          projectDepartments: [
            {
              id: 2728,
              projectId: 2336,
              depCode: '6000220',
              depName: '总集成部'
            }
          ],
          projectUsers: []
        },
        {
          total: null,
          totalPages: null,
          pageSize: 20,
          page: 1,
          start: 0,
          id: 2335,
          projectName: 'temail-server',
          cnName: 'CDTP服务器',
          projectCode: '985java',
          description: 'CDTP长链接服务器',
          projectType: 'java',
          namespace: 'ZJC_Java',
          pathWithNamespace: 'ZJC_Java/temail-server',
          sshUrlToRepo: 'git@172.28.4.12:ZJC_Java/temail-server.git',
          webUrl: 'http://172.28.4.12/ZJC_Java/temail-server',
          defaultBranch: '',
          comment: 'CDTP长链接服务器',
          approveComment: '',
          status: 2,
          lastActivityAt: 1533783169051,
          createdAt: 1533783169051,
          projectDepartments: [
            {
              id: 2726,
              projectId: 2335,
              depCode: '6000220',
              depName: '总集成部'
            }
          ],
          projectUsers: []
        }
      ],
      // 分页控制数据
      pagetotle: 0,
      pagesize: 20,
      currentPage: 1
    }
  },
  methods: {
    calculateIndex (index) {
      return (this.currentPage - 1) * this.pagesize + index
    },
    // 分页控制方法
    handlesSizeChange (pageSize) {
      this.pagesize = pageSize
      this._getProductList()
    },
    handleCurrentPageChange (page) {
      this.currentPage = page
      this._getProductList()
    },
    handlePrevPageChange () {
      this._getProductList()
    },
    handleNextPageChange () {
      this._getProductList()
    },
    _getProductList () {}
  }
}
</script>

<style scoped lang="less">
.product-list {
  .search-box {
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-input,
    .el-select {
      width: 41%;
    }
  }
  .product-table {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0px;
    .el-table {
      width: 100%;
      .btn-weapper {
        display: flex;
        justify-content: space-around;
      }
    }
    .pagination-wrapper {
      float: right;
      padding-top: 15px;
    }
  }
}
</style>
