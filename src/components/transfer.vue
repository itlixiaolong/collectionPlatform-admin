<template>
  <el-dialog
    :visible.sync="dialogVisible"
    title="部门分配"
    center
  >
    <el-transfer
      ref="ELtransfer"
      v-model="selectedItems"
      :data="incomingData"
      :filterable="filable"
      :filter-placeholder="filterHolder"
      :button-texts="btnText"
      :titles="titleText"
      :props="propsOption"
      @change="changeSelect"
    />
    <span
      slot="footer"
      class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button
        type="primary"
        @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script type="text/ecmascript-6">
/*
* 可配置transfer 组件
* incomingDefault 数组类型，   传入选中项index值
* incomingData    数字类型     传入transfer左侧展示列表
* filterHolder    字符串类型， 传入搜索框搜索提示信息
* filable         布尔类型，   true：展示搜索框，false：不展示，默认为true
* buttonTexts     数组类型，   传入按钮文字信息
* titleText       数组类型，   传入列表title信息
* */
/* eslint-disable */
export default {
  name: "Transfer",
  props: {
    incomingDefault: {
      type: Array,
      default() {
        return []
      }
    },
    selectOne: Boolean,
    incomingData: {
      type: Array,
      default() {
        return []
      }
    },
    propsOption: {
      type: Object,
      required: true,
      default() {
        return {
          key: "depCode",
          label: "depName"
        }
      }
    },
    filterHolder: {
      type: String,
      default: ""
    },
    filable: {
      type: Boolean,
      default() {
        return true
      }
    },
    buttonTexts: {
      type: Array,
      default() {
        return ["到左边", "到右边"]
      }
    },
    titleText: {
      type: Array,
      default() {
        return ["列表1", "列表2"]
      }
    }
  },
  data() {
    return {
      dialogVisible: false, // 取消
      selectedItems: [],
      titles: [],
      btnText: [],
      filterPlaceholder: "",
      filterable: true
    }
  },
  watch: {
    incomingDefault() {
      this.selectedItems = []
      const arr = []
      this.incomingDefault.forEach(item => {
        arr.push(item[this.propsOption.key])
      })
      this.selectedItems = this._clearRepeatItems(arr)
    }
  },
  mounted() {
    this.titleText = this.titleText
    this.filterPlaceholder = this.filterHolder
    this.btnText = this.buttonTexts
    this.filterable = this.filable
  },
  methods: {
    changeSelect() {
      if (this.selectOne) {
        if (this.selectedItems.length > 1) {
          this.selectedItems.shift(1)
        }
      }
    },
    handleConfirm() {
      // 确认
      const targetDataObj = this.$refs.ELtransfer.targetData
      this.$emit("backTransferData", targetDataObj)
    },
    _getIDs(arr) {
      const result = []
      arr.forEach(item => {
        result.push(item.id)
      })
      return result
    },
    _clearRepeatItems(arr) {
      const result = []
      const obj = {}
      for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
          obj[arr[i]] = 1
          result.push(arr[i])
        }
      }
      return result
    }
  }
}
</script>
<style>
.el-dialog.el-dialog--center .el-dialog__body {
  text-align: center;
}
</style>
<style scoped lang="less">
.el-transfer {
  text-align: left;
  display: inline-block;
}
</style>
