<template>
  <div>
    <tree
      v-if="functionsList.length"
      :data-list="functionsList"
      :options="options"
      :tree-type="treeType"
      @backTreeData="emitTreeFun"/>
  </div>
</template>

<script>
import Tree from '../../components/tree'
import {
  getUserRightsTreeData,
  postUserRightAddFunctionsData,
  putUserRightUpdateFunctionsData,
  deleteUserRightDeleteFunctionsData
} from '../../api/userrights/index'
export default {
  name: 'FunctionsManage',
  components: {
    Tree
  },
  data () {
    return {
      treeType: 'functions',
      options: {
        showButton: true,
        showCheckbox: false,
        expandOnClickNode: true,
        DailogTitle: '功能管理',
        nodeKey: 'path',
        defaultExpandKeys: ['/'],
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
      },
      functionsList: []
    }
  },
  created () {
    this._getUserRightsTreeData()
  },
  methods: {
    emitTreeFun (data, type, code) {
      if (type === 'add') {
        this._postUserRightAddFunctionsData(data)
      } else if (type === 'edit') {
        this._putUserRightUpdateFunctionsData(data, code)
      } else {
        this._deleteUserRightDeleteFunctionsData(code)
      }
    },
    _getUserRightsTreeData () {
      getUserRightsTreeData()
        .then(res => {
          if (res.data.code === 200) {
            this.functionsList = res.data.data
            this._createdFormatDataToTree(this.functionsList[0].children)
          }
        })
        .catch(error => {
          this.$message.error(error.response.data.message)
        })
    },
    _postUserRightAddFunctionsData (data) {
      postUserRightAddFunctionsData(data)
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success('恭喜您,功能数据新增成功!!!')
            this._getUserRightsTreeData()
          }
        })
        .catch(error => {
          this.$message.error(error.response.data.message)
        })
    },
    _putUserRightUpdateFunctionsData (data, code) {
      putUserRightUpdateFunctionsData(data, code)
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success('恭喜您,功能数据更新成功!!!')
            this._getUserRightsTreeData()
          }
        })
        .catch(error => {
          this.$message.error(error.response.data.message)
        })
    },
    _deleteUserRightDeleteFunctionsData (code) {
      deleteUserRightDeleteFunctionsData(code)
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success('恭喜您,功能数据删除成功!!!')
            this._getUserRightsTreeData()
          }
        })
        .catch(error => {
          this.$message.error(error.response.data.message)
        })
    },
    _createdFormatDataToTree (item) {
      if (item.length > 0) {
        item.forEach(ele => {
          if (!ele.children.length) {
            ele.children = ele.functions
            ele.children.forEach(item => {
              item.functions = []
            })
          } else {
            this._createdFormatDataToTree(ele.children)
          }
        })
      } else {
        item.children = item.functions
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
