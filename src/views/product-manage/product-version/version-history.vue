<template>
  <div class="version-history">
    <div class="search-box">
      <el-input
        v-model="productName"
        placeholder="请输入产品名称"
        clearable/>
      <el-input
        v-model="productName"
        placeholder="请输入产品版本"
        clearable/>
      <el-select
        v-model="productRegion"
        placeholder="请选择语言 "
        clearable>
        <el-option
          v-for="item in languages"
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
        :data="productVersionList"
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
          label="产品Logo"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope"><img :src="scope.row.productLogo"></template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="产品名称"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope">{{ scope.row.productName }}</template>
        </el-table-column>
        <el-table-column
          label="版本号"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.latestVersion }}</template>
        </el-table-column>
        <el-table-column
          label="基线"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.productBaseLine }}
          </template>
        </el-table-column>
        <el-table-column
          label="基线版本"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.productBaseLineVersion }}</template>
        </el-table-column>
        <el-table-column
          label="下载二维码"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <img :src="scope.row.QRcode">
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
            <div class="btn-wrapper">
              <el-button
                type="primary"
                size="mini">修改</el-button>
              <el-button
                type="danger"
                size="mini">删除</el-button>
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
import { getProductVersionHistoryData } from '../../../api/product'
export default {
  name: 'ProjectVersionHistory',
  data () {
    return {
      // 搜索条件数据
      productName: '',
      productStatus: '',
      productRegion: '',
      productTrade: '',
      languages: [
        {
          label: 'Andriod',
          value: 0
        },
        {
          label: 'Ios',
          value: 1
        },
        {
          label: 'H5',
          value: 2
        }
      ],
      // 产品列表数据
      loading: false,
      productVersionList: [],
      // 分页控制数据
      pagetotle: 0,
      pagesize: 20,
      currentPage: 1
    }
  },
  created () {
    this._getProductVersionHistoryData()
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
    _getProductVersionHistoryData () {
      getProductVersionHistoryData().then(res => {
        if (res.data.code === 200) {
          this.productVersionList = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.version-history {
  height: 100%;
  .search-box {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-input,
    .el-select {
      width: 30%;
    }
  }
  .product-table {
    width: 100%;
    height: 90%;
    box-sizing: border-box;
    padding: 20px 0px;
    .el-table {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      img {
        display: inline-block;
        width: 40px;
        height: 40px;
      }
      .btn-wrapper {
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
