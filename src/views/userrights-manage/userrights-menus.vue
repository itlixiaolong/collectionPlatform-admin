<template>
  <div class="tree-wrapper">
    <tree
      v-if="menuList.length > 0"
      :data-list="menuList"
      :options="options"
      :tree-type="treeType"
      @backTreeData="emitTreeFun"/>
  </div>
</template>

<script>
import {
  getUserRightsTreeData,
  postUserRightAddMenusData,
  putUserRightsUpdateMenusData,
  deleteUserRightsDeleteMenusData
} from '../../api/userrights/index'
import Tree from '../../components/tree'
export default {
  name: 'MenuManage',
  components: {
    Tree
  },
  data () {
    return {
      treeType: 'menu',
      options: {
        showButton: true,
        showCheckbox: false,
        expandOnClickNode: true,
        DailogTitle: '菜单管理',
        nodeKey: 'path',
        defaultExpandKeys: ['/home'],
        indent: 25,
        updateText: ['name', 'path'],
        showText: ['name', 'path'],
        form: {
          placeHolderText1: '请输入菜单名称',
          placeHolderText2: '请输入菜单路径',
          labelName1: '菜单名称',
          labelName2: '菜单路径'
        }
      },
      menuList: []
    }
  },
  created () {
    this._getUserRightsMenusData()
  },
  methods: {
    emitTreeFun (data, type, code) {
      if (type === 'add') {
        this._postUserRightAddMenusData(data)
      } else if (type === 'edit') {
        this._putUserRightsUpdateMenusData(data, code)
      } else {
        this._deleteUserRightsDeleteMenusData(code)
      }
    },
    _getUserRightsMenusData () {
      getUserRightsTreeData()
        .then(res => {
          if (res.data.code === 200) {
            this.menuList = res.data.data
          }
        })
        .catch(error => {
          this.$message.error(error.response.data.message)
        })
    },
    _postUserRightAddMenusData (data) {
      postUserRightAddMenusData(data)
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success('恭喜您,菜单数据新增成功!!!')
            this._getUserRightsMenusData()
          }
        })
        .catch(error => {
          this.$message.error(error.response.data.message)
        })
    },
    _putUserRightsUpdateMenusData (data, code) {
      putUserRightsUpdateMenusData(data, code)
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success('恭喜您,菜单数据更新成功!!!')
            this._getUserRightsMenusData()
          }
        })
        .catch(error => {
          this.$message.error(error.response.data.message)
        })
    },
    _deleteUserRightsDeleteMenusData (code) {
      deleteUserRightsDeleteMenusData(code)
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success('恭喜您,菜单数据删除成功!!!')
            this._getUserRightsMenusData()
          }
        })
        .catch(error => {
          this.$message.error(error.response.data.message)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.tree-wrapper{
  height:100%;
  overflow-y: auto;
}
</style>
