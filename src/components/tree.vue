<template>
  <div>
    <el-tree
      ref="elTree"
      :data="data"
      :show-checkbox="options.showCheckbox"
      :node-key="options.nodeKey"
      :props="options.props"
      :expand-on-click-node="options.expandOnClickNode"
      :indent="options.indent"
      :default-expanded-keys="options.defaultExpandKeys"
      :default-checked-keys="defaultCheckedKeys"
      @check="handleCheckBoxChange"
    >
      <div
        slot-scope="{ node, data }"
        class="contentBox">
        <span
          v-if="treeType==='menu'"
          class="custom-tree-node">
          <span class="first">{{ data[options.showText[0]] }}</span>
          <span class="second">{{ data[options.showText[1]] }}</span>
          <span class="third">
            <i
              class="el-icon-circle-plus add"
              @click.stop="append(data)"></i>
            <i
              class="el-icon-circle-close delete"
              @click.stop="remove(node, data)"></i>
            <i
              class="el-icon-edit edit"
              @click.stop="updateKeyChildren(key, data)"></i>
          </span>
        </span>
        <span
          v-if="treeType==='functions'"
          class="custom-tree-node">
          <span class="first">{{ data[options.showText[0]] }}</span>
          <span
            v-if="data.functions.length&&options.showButton"
            class="second">
            <span
              v-for="(item, index) in data.functions"
              :key="index">{{ item.name }}&nbsp;</span>
          </span>
          <span
            v-if="treeType==='functions'&&options.showButton"
            class="third">
            <i
              v-if="data.functions.length"
              class="el-icon-circle-plus add"
              @click.stop="append(data)"></i>
            <i
              v-if="node.isLeaf"
              class="el-icon-circle-close delete"
              @click.stop="remove(node, data)"></i>
            <i
              v-if="node.isLeaf"
              class="el-icon-edit edit"
              @click.stop="updateKeyChildren(key, data)"></i>
          </span>
        </span>
      </div>
    </el-tree>
    <el-dialog
      :title="options.DailogTitle"
      :visible.sync="dialogVisible">
      <el-form
        ref="ruleForm"
        :model="form"
        :rules="rules"
        label-width="100px">
        <el-form-item
          :label="form.labelName1"
          prop="addContent1">
          <el-input
            v-model="form.addContent1"
            :placeholder="form.placeHolderText1"/>
        </el-form-item>
        <el-form-item
          :label="form.labelName2"
          prop="addContent2">
          <el-input
            v-model="form.addContent2"
            :placeholder="form.placeHolderText2"/>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="submitFormData('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/*
* 可配置tree 组件
* treeType                  字符串           展示的tree的类型(有menu和functions两种)
* dataList                  数组类型，       要展示的数据
* options                   对象类型         tree组件的默认配置
*    showCheckbox           布尔类型         是否展示checkbox
*    showButton             布尔类型         是否展示操作按钮
*    nodeKey                字符串类型       每一个节点的唯一标识
*    props                  对象类型         可配置的数据label
*    indent                 数值类型         每一级节点间的间距
*    updateText             数组类型         更新节点时弹窗显示的内容
*    defaultExpandKeys      字符串类型       默认展开的key数组
*    showText               数组类型         树形节点第一列和第二列展示的内容
*    expandOnClickNode      布尔类型         点击节点是否展开
*    DailogTitle            布字符串类型      弹窗的标题
*    form                   对象类型         弹窗的form数据
*       labelName1          字符串类型       formitem的label名称
*       labelName2          字符串类型       formitem的label名称
*       placeHolderText1    字符串类型       formitem的input的placeholder的内容
*       placeHolderText2    字符串类型       formitem的input的placeholder的内容
* */
/* eslint-disable */
export default {
  name: "Tree",
  props: {
    treeType: {
      type: String
    },
    dataList: {
      type: Array,
      default() {
        return []
      }
    },
    options: {
      type: Object,
      default() {
        return {
          showButton: true,
          showCheckbox: false,
          expandOnClickNode: false,
          DailogTitle: "",
          nodeKey: "path",
          defaultExpandKeys: ["/"],
          indent: 25,
          props: {
            children: "children"
          },
          updateText: ["name", "path"],
          showText: ["name", "path"],
          form: {
            placeHolderText1: "",
            placeHolderText2: "",
            labelName1: "",
            labelName2: ""
          }
        }
      }
    }
  },
  data() {
    return {
      data: [],
      dialogVisible: false,
      key: "",
      parentCode: "",
      selectedCode: "",
      handleType: "",
      form: {
        addContent1: "",
        addContent2: "",
        placeHolderText1: "",
        placeHolderText2: "",
        labelName1: "",
        labelName2: ""
      },
      rules: {
        addContent1: [
          { required: true, message: "该数据不能为空", trigger: "blur" }
        ],
        addContent2: [
          { required: true, message: "该数据不能为空", trigger: "blur" }
        ]
      }
    }
  },
  computed: {
    defaultCheckedKeys() {
      return this.options.defaultCheckedKeys
    }
  },
  watch: {
    dialogVisible() {
      this.$nextTick(() => {
        this.$refs.ruleForm.resetFields()
      })
    },
    dataList() {
      this.data = this.dataList
    }
  },
  created() {
    Object.assign(this.form, this.options.form)
    this.data = this.dataList
  },
  methods: {
    append(data) {
      this.handleType = "add"
      this.form.addContent1 = ""
      this.form.addContent2 = ""
      this.dialogVisible = true
      this.parentCode = data.menuCode
    },
    remove(node, data) {
      const type = this.treeType === "menu" ? "菜单" : "功能点"
      this.handleType = "delete"
      this.selectedCode =
        this.treeType === "menu" ? data.menuCode : data.functionCode
      this.$confirm(`此操作将永久删除该${type}, 是否继续?`, "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$emit("backTreeData", "", this.handleType, this.selectedCode)
      })
    },
    updateKeyChildren(key, data) {
      this.handleType = "edit"
      this.dialogVisible = true
      this.selectedCode =
        this.treeType === "menu" ? data.menuCode : data.functionCode
      setTimeout(() => {
        this.form.addContent1 = data[this.options.updateText[0]]
        this.form.addContent2 = data[this.options.updateText[1]]
      }, 20)
    },
    handleCheckBoxChange(data) {
      let node = this.$refs.elTree.getNode(data)
      if (node.checked) {
        data.status = 1
        if (data.children) {
          this._slecctChildrenCheckBoxs(data.children, 1)
        }
      } else {
        data.status = 0
        if (data.children) {
          this._slecctChildrenCheckBoxs(data.children, 0)
        }
      }
    },
    submitFormData(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = ""
          if (this.handleType === "add") {
            data = {
              [this.options.updateText[0]]: this.form.addContent1,
              [this.options.updateText[1]]: this.form.addContent2
            }
            if (this.treeType === "menu") {
              data.parentMenuCode = this.parentCode
            } else {
              data.menuCode = this.parentCode
            }
          } else if (this.handleType === "edit") {
            data = {
              [this.options.updateText[0]]: this.form.addContent1,
              [this.options.updateText[1]]: this.form.addContent2
            }
            Object.assign(this.key, data)
          }
          this.$emit("backTreeData", data, this.handleType, this.selectedCode)
          this.dialogVisible = false
        } else {
          this.$message.warning("请检查输入信息是否正确!!!")
        }
      })
    },
    _slecctChildrenCheckBoxs(item, val) {
      if (item.length > 0) {
        item.forEach(ele => {
          if (!ele.children) {
            ele.status = val
          } else {
            ele.status = val
            this._slecctChildrenCheckBoxs(ele.children, val)
          }
        })
      } else {
        item.functionStatus = val
      }
    }
  }
}
</script>
<style>
.el-tree-node > .el-tree-node__content {
  border-bottom: 1px solid #dadada;
  height: 40px;
}
</style>

<style lang="less" scoped>
.el-checkbox {
  margin-right: 8px;
}
.contentBox {
  width: 100%;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  color: #303133;
  span {
    flex: 1;
  }
  span.first {
    flex: 0 0 200px;
    justify-content: flex-start;
    text-align: left;
  }
  span.second {
    /*display: flex;*/
    /*justify-content: flex-start;*/
    padding-left: 20%;
    text-align: left;
    span {
      margin-right: 20px;
    }
  }
  span.third {
    display: flex;
    justify-content: flex-end;
    i {
      font-size: 16px;
    }
    .add {
      color: #409eff;
      padding-right: 20px;
    }
    .delete {
      color: #f56c6c;
      padding-right: 20px;
    }
    .edit {
      color: #67c23a;
    }
  }
}
.button-warpper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
</style>
