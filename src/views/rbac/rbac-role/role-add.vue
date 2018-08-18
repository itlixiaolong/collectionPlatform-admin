<template>
  <el-dialog
    :visible.sync="isShowDialog"
    title="新增"
    center
  >
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item
        label="角色名称"
        prop="roleName">
        <el-input
          v-model="ruleForm.roleName"
          placeholder="请输入角色名称"/>
      </el-form-item>
      <el-form-item
        label="英文名称"
        prop="roleCode">
        <el-input
          v-model="ruleForm.roleCode"
          placeholder="请输入角色英文名称"/>
      </el-form-item>
    </el-form>
    <el-form>
      <el-form-item >
        <el-button
          type="primary"
          @click="handleConfirm('ruleForm')">确认新增</el-button>
        <el-button @click="handleCancel('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: 'RoleAdd',
  data () {
    return {
      isShowDialog: false,
      ruleForm: {
        roleName: '',
        roleCode: ''
      },
      rules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        roleCode: [
          { required: true, message: '请输入角色英文名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleConfirm (formName) {
      // 确认按钮
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message.success('恭喜您!角色新增成功!!!')
          this.isShowDialog = false
        } else {
          this.$message.error('对不起!请检查输入信息是否有误!!!')
          return false
        }
      })
    },
    handleCancel (formName) {
      // 重置按钮
      this.$refs[formName].resetFields()
      // this.isShowDialog = false
    }
  }
}
</script>
<style scoped>
.el-form-item {
  text-align: center;
}
.el-dialog {
  width: 88% !important;
}
.el-button {
  margin-top: 15px;
}
.el-select {
  width: 100%;
}
.el-form-item .el-form-item__content {
  margin-left: 37px !important;
}
</style>
