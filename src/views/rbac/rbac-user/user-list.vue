<template>
  <div class="product-list">
    <div class="search-box">
      <el-select
        v-model="department"
        placeholder="请输入用户所属部门"
        clearable>
        <el-option
          v-for="item in departments"
          :key="item.depCode"
          :label="item.depName"
          :value="item.depCode"/>
      </el-select>
      <el-input
        v-model="userCode"
        placeholder="请输入用户工号"
        clearable/>
      <el-input
        v-model="userName"
        placeholder="请输入用户姓名"
        clearable/>
      <el-select
        v-model="userRole"
        placeholder="请选择用户角色"
        clearable>
        <el-option
          v-for="item in userRoles"
          :key="item.roleCode"
          :label="item.roleName"
          :value="item.roleCode"/>
      </el-select>
      <el-button type="primary">查询</el-button>
    </div>
    <div class="product-table">
      <el-table
        v-loading.body="loading"
        ref="multipleTable"
        :data="userList"
        element-loading-text="拼命加载中..."
        tooltip-effect="dark"
        fit
        border
        height="100%"
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
          label="工号"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            {{ scope.row.emplId }}
          </template>
        </el-table-column>
        <el-table-column
          prop=""
          label="姓名"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column
          prop=""
          label="邮箱"
          align="center"
          class-name="copyBtnParent"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.mail }}</template>
        </el-table-column>
        <el-table-column
          prop=""
          label="岗位 "
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.jobDesc }}</template>
        </el-table-column>
        <el-table-column
          prop=""
          label="部门"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.depName }}
          </template>
        </el-table-column>
        <el-table-column
          prop=""
          label="当前角色"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.role.roleName }}
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
                @click="handleSetRole(scope.row.role)">分配角色</el-button>
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
    <transfer
      v-if="userRoles.length>0"
      ref="transfer"
      :incoming-data="userRoles"
      :incoming-default="currentRole"
      :props-option="propsOption"
      :select-one="selectOne"
      @backTransferData="emitTransferFun"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import Transfer from '../../../components/transfer'
import { getDepartmentsData, getUserListData } from '../../../api/rbac'
export default {
  name: 'UserList',
  components: {
    Transfer
  },
  data () {
    return {
      // 搜索条件数据
      departments: [],
      userList: [],
      department: '',
      userName: '',
      userCode: '',
      userRole: '',
      currentRole: [],
      userRoles: [
        {
          roleCode: 'administrator',
          roleName: '超级管理员'
        },
        {
          roleCode: 'default',
          roleName: '默认用户'
        },
        {
          roleCode: 'depAdmin',
          roleName: '部门负责人'
        },
        {
          roleCode: 'projectAdmin',
          roleName: '项目管理员'
        }
      ],
      propsOption: {
        key: 'roleCode',
        label: 'roleName'
      },
      selectOne: true,
      // 产品列表数据
      loading: false,
      productList: [],
      // 分页控制数据
      pagetotle: 0,
      pagesize: 20,
      currentPage: 1
    }
  },
  created () {
    this._getDepartmentsData()
    this._getUserListData()
  },
  methods: {
    emitTransferFun (targetDataObj, ids) {
      if (targetDataObj.length > 0) {
        this.$message.success('恭喜您!用户角色分配成功!!!')
        this.$refs.transfer.dialogVisible = false
      } else {
        this.$message.warning('请至少为该用户分配一个角色!!!')
      }
    },
    handleSetRole (data) {
      this.currentRole = [data]
      this.$refs.transfer.dialogVisible = true
    },
    calculateIndex (index) {
      return (this.currentPage - 1) * this.pagesize + index
    },
    // 分页控制方法
    handlesSizeChange (pageSize) {
      this.pagesize = pageSize
      this._getUserListData()
    },
    handleCurrentPageChange (page) {
      this.currentPage = page
      this._getUserListData()
    },
    handlePrevPageChange () {
      this._getUserListData()
    },
    handleNextPageChange () {
      this._getUserListData()
    },
    _getDepartmentsData () {
      getDepartmentsData()
        .then(res => {
          if (res.data.code === 200) {
            this.departments = res.data.data
          }
        })
        .catch(error => {
          this.$message.error(error)
        })
    },
    _getUserListData () {
      getUserListData()
        .then(res => {
          if (res.data.code === 200) {
            this.userList = res.data.data
          }
        })
        .catch(error => {
          this.$message.error(error)
        })
    }
  }
}
</script>

<style scoped lang="less">
.product-list {
  box-sizing: border-box;
  height: 100%;
  .search-box {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-input,
    .el-select {
      width: 22%;
    }
  }
  .product-table {
    width: 100%;
    height: 90%;
    box-sizing: border-box;
    padding: 20px 0px 20px;
    .el-table {
      width: 100%;
      img {
        display: inline-block;
        width: 40px;
        height: 40px;
      }
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
