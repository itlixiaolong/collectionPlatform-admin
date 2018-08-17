<template>
  <el-table
    :data="tableData"
    :border="true"
    @selection-change="SelectionChange"
  >
    <el-table-column
      v-if="typestale"
      :type="colType"
    />
    <el-table-column
      v-for="(item,index) in tableInfor"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      :header-align="item.align?item.align:headerAlign"
      :align="item.align?item.align:headerAlign"
      :sortable="item.sortable"
    />
    <el-table-column
    >
      <template slot-scope="scope">
        <slot :slotdata="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    tableData: Array,
    size: String,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    tableInfor: Array,
    border: Boolean,
    colType: String,
    headerAlign: {
      type: String,
      default: "left"
    }
  },
  data() {
    return {
      // typestale:false,
    }
  },
  computed: {
    typestale() {
      return !!this.colType
    }
  },
  methods: {
    SelectionChange(val) {
      this.$emit("selection-change", val)
    },
    comitscope(val) {
      this.$emit("clickFun", val)
    }
  }
}
</script>
<style>
</style>
