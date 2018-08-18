<template>
  <div class="role-list">
    <div class="search-box">
      <div class="left-wrapper">
        <el-input
          v-model="userRoleName"
          placeholder="请输入角色名称"
          clearable/>
        <el-button type="primary">查询</el-button>
      </div>
      <div class="right-wrapper">
        <el-button
          type="warning"
          @click="handleRoleAdd">新增角色</el-button>
      </div>
    </div>
    <div class="role-table">
      <el-table
        v-loading.body="loading"
        ref="multipleTable"
        :data="userRoleList"
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
          width="60"
        />
        <el-table-column
          prop="name"
          label="角色名称"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope">{{ scope.row.roleName }}</template>
        </el-table-column>
        <el-table-column
          prop=""
          label="英文名称"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.roleCode }}</template>
        </el-table-column>
        <el-table-column
          prop=""
          label="分配权限"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini">分配权限</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop=""
          label="操作"
          align="center"
          fixed="right"
          width="260"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <div class="btn-weapper">
              <el-button
                type="success"
                size="mini"
                @click="handleEditThis(scope.row)">编辑</el-button>
              <el-button
                type="danger"
                size="mini"
                @click="handleRemoveThis(scope.row)">删除</el-button>
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
    <role-edit
      v-if="isEmpty"
      ref="roleEdit"
      :role-data="roleData"/>
    <role-add ref="roleAdd"/>
  </div>
</template>

<script type="text/ecmascript-6">
import RoleEdit from './role-edit'
import RoleAdd from './role-add'
export default {
  name: 'RoleList',
  components: {
    RoleEdit,
    RoleAdd
  },
  data () {
    return {
      // 搜索条件数据
      userRoleName: '',
      roleData: {},
      // 产品列表数据
      loading: false,
      userRoleList: [
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
      // 分页控制数据
      pagetotle: 0,
      pagesize: 20,
      currentPage: 1
    }
  },
  computed: {
    isEmpty () {
      return Object.values(this.roleData).length
    }
  },
  methods: {
    handleEditThis (data) {
      this.roleData = data
      this.$nextTick(() => {
        this.$refs.roleEdit.isShowDialog = true
      })
    },
    handleRoleAdd () {
      this.$refs.roleAdd.isShowDialog = true
    },
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
.role-list {
  .search-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-wrapper {
      width: 25%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-input,
      .el-select {
        width: 70%;
      }
    }
    .right-wrapper {
      margin-right: 20px;
    }
  }
  .role-table {
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
