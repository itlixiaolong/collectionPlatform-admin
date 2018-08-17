<template>
  <el-dialog
    v-loading="loading"
    :visible.sync="dialogVisible"
    title="分配权限"
    element-loading-text="拼命提交中..."
    element-loading-background="rgba(0, 0, 0, 0.8)"
    center
    append-to-body
    @close="handleCloseDialog"
  >
    <div class="tree-wrapper">
      <tree
        v-if="isCreated"
        ref="tree"
        :data-list="functionsList"
        :options="options"
        :tree-type="treeType"
        @backTreeData="emitTreeFun"/>
    </div>
    <span
      slot="footer"
      class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button
        type="primary"
        @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>

</template>
<script>
// import { getUserRightsTreeData } from 'api/userrights/index'
import { putUserRoleFunctionsData } from '../../../api/rbac/index'
import Tree from '../../../components/tree'
export default {
  name: 'RolePermission',
  components: {
    Tree
  },
  props: {
    roleId: {
      type: Number,
      required: true
    },
    functionsList: {
      type: Array,
      required: true
    },
    defaultCheckedKeys: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      loading: false,
      dialogVisible: true,
      treeType: 'functions',
      options: {
        showButton: false,
        showCheckbox: true,
        expandOnClickNode: true,
        DailogTitle: '功能管理',
        nodeKey: 'code',
        defaultExpandKeys: ['1IEP集成效率平台'],
        indent: 25,
        defaultCheckedKeys: [],
        updateText: ['name', 'functionEnName'],
        showText: ['name', 'functionEnName'],
        form: {
          placeHolderText1: '请输入功能名称',
          placeHolderText2: '请输入功能的英文名称',
          labelName1: '功能名称',
          labelName2: '功能英文名'
        }
      }
    }
  },
  computed: {
    isCreated () {
      if (this.functionsList.length > 0) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    this.options.defaultCheckedKeys = this.defaultCheckedKeys
  },
  methods: {
    handleCloseDialog () {
      this.$emit('backRolePermissionData')
    },
    handleCancel () {
      this.$emit('backRolePermissionData')
      this.dialogVisible = false
    },
    emitTreeFun (data, type, code) {
      if (type === 'add') {
        this._postUserRightAddFunctionsData(data)
      } else if (type === 'edit') {
        this._putUserRightUpdateFunctionsData(data, code)
      } else {
        this._deleteUserRightDeleteFunctionsData(code)
      }
    },
    handleConfirm () {
      const DATA = this.$refs.tree.$refs.elTree.data
      DATA[0].status = 0
      this._resetData(DATA[0].children)
      this._createdFormatDataToBackground(DATA[0].children)
      this.loading = true
      this._putUserRoleFunctionsData(this.roleId, DATA)
      console.log(DATA)
    },
    _putUserRoleFunctionsData (roleId, params) {
      putUserRoleFunctionsData(roleId, params)
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success('用户功能权限更新成功!!!')
            this.dialogVisible = false
            this.loading = false
            this.$emit('backRolePermissionData')
          }
        })
        .catch(error => {
          this.$message.error(error.response.data.message)
          this.loading = false
        })
    },
    _createdFormatDataToBackground (item) {
      if (item.length > 0) {
        item.forEach(ele => {
          if (ele.functions.length) {
            ele.status = 0
          } else {
            ele.status = 0
            this._createdFormatDataToBackground(ele.children)
          }
        })
      } else {
        item.status = 0
      }
    },
    _resetData (item) {
      if (item.length > 0) {
        item.forEach(ele => {
          if (ele.functions.length) {
            ele.children = []
          } else {
            this._resetData(ele.children)
          }
        })
      } else {
        item.children = []
      }
    }
  }
}
</script>
<style lang="less" scoped>
.tree-wrapper {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #333;
  padding: 20px 0 40px;
}
</style>
