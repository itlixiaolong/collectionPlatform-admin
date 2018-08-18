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
      <el-input
        v-model="productName"
        placeholder="请输入审批人"
        clearable/>
      <el-select
        v-model="productStatus"
        placeholder="请选择审批状态"
        clearable>
        <el-option
          v-for="item in status"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>

      <el-button>查询</el-button>
    </div>
    <div class="product-table">
      <el-table
        v-loading.body="loading"
        ref="multipleTable"
        :data="copyrightList"
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
          <template slot-scope="scope">{{ scope.row.productName }}</template>
        </el-table-column>
        <el-table-column
          label="审批状态"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.status }}</template>
        </el-table-column>
        <el-table-column
          label="申请人"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.applyPerson }}</template>
        </el-table-column>
        <el-table-column
          label="授权公司"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.company }}
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="审批人"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope">{{ scope.row.approvePerson }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="审批时间"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope">{{ scope.row.approveTime }}</template>
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
                size="mini">查看</el-button>
              <el-button
                type="danger"
                size="mini">删除</el-button>
              <el-button
                type="success"
                size="mini">下载license</el-button>
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
import { getCopyrightList } from '../../api/copyright/index'
export default {
  name: 'ProductList',
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
      copyrightList: [],
      // 分页控制数据
      pagetotle: 0,
      pagesize: 20,
      currentPage: 1
    }
  },
  created () {
    this._getCopyrightList()
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
    _getCopyrightList () {
      getCopyrightList()
        .then(res => {
          if (res.data.code === 200) {
            this.copyrightList = res.data.data
          }
        })
        .catch(error => {
          this.$message.error(error.response.data.message)
        })
    }
  }
}
</script>

<style scoped lang="less">
.product-list {
  height: 100%;
  box-sizing: border-box;
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
    padding: 20px 0px;
    .el-table {
      width: 100%;
      height:100%;
      overflow-y: auto;
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
