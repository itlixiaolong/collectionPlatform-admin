<template>
  <div class="product-list">
    <div class="search-box">
      <el-input
        v-model="productName"
        placeholder="请输入产品名称"
        clearable/>
      <el-select
        v-model="productStatus"
        placeholder="请选择产品状态"
        clearable>
        <el-option
          v-for="item in status"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>
      <el-select
        v-model="productRegion"
        placeholder="请选择产品所属地区"
        clearable>
        <el-option
          v-for="item in regions"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>
      <el-select
        v-model="productTrade"
        placeholder="请选择产品所属地区"
        clearable>
        <el-option
          v-for="item in trades"
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
          label="产品LOGO"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <img
              :src="scope.row.productLogo"
              alt="图片">
          </template>
        </el-table-column>
        <el-table-column
          label="产品名称"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.productName }}</template>
        </el-table-column>
        <el-table-column
          label="状态"
          align="center"
          class-name="copyBtnParent"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.productStatus }}</template>
        </el-table-column>
        <el-table-column
          label="最新版本"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.latestVersion }}</template>
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
            <div class="btn-weapper">
              <el-button
                type="primary"
                size="mini">修改</el-button>
              <el-button
                type="danger"
                size="mini">删除</el-button>
              <el-button
                type="success"
                size="mini">历史版本管理</el-button>
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
import { getProductListData } from '../../api/product'
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
      productList: [],
      // 分页控制数据
      pagetotle: 0,
      pagesize: 20,
      currentPage: 1
    }
  },
  created () {
    this._getProductListData()
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
    _getProductListData () {
      getProductListData()
        .then(res => {
          if (res.data.code === 200) {
            this.productList = res.data.data
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
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding: 20px 0px 20px;
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
    height: 100%;
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
