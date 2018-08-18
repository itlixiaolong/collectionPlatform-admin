<template>
  <div class="version-add">
    <el-form
      ref="ruleForm"
      :model="form"
      :rules="rules"
      label-width="350px"
    >
      <el-form-item
        label="选择产品"
        prop="product">
        <el-select
          v-model="form.product"
          placeholder="请选择产品">
          <el-option
            label="甜心宝贝"
            value="0"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="版本"
        prop="version">
        <el-input
          v-model="form.version"
          placeholder="请填写产品版本"/>
      </el-form-item>

      <el-form-item
        label="选择产品语言"
        prop="language">
        <el-select
          v-model="form.language"
          placeholder="请填写产品语言">
          <el-option
            label="android"
            value="shanghai"/>
          <el-option
            label="ios"
            value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="基线"
        prop="baseLine">
        <el-select
          v-model="form.baseLine"
          placeholder="请选择产品基线">
          <el-option
            label="apple"
            value="0"/>
          <el-option
            label="banana"
            value="1"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="基线版本"
        prop="baseLineVersion">
        <el-select
          v-model="form.baseLineVersion"
          placeholder="请选择基线版本">
          <el-option
            label="试用版本"
            value="0"/>
          <el-option
            label="正式版本"
            value="1"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="下载链接"
        prop="link">
        <el-input
          v-model="form.link"
          placeholder="请填写下载链接"/>
      </el-form-item>
    </el-form>
    <div class="btn-wrapper">
      <el-button
        type="success"
        @click="handleClickAdd('ruleForm')">添加</el-button>
      <el-button
        type="warning"
        @click="handleReset('ruleForm')">重置</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { postProductVersionAddData } from '../../../api/product'
export default {
  name: 'ProjectVersionAdd',
  data () {
    return {
      form: {
        product: '',
        version: '',
        language: '',
        baseLine: '',
        baseLineVersion: '',
        link: ''
      },
      rules: {
        product: [{ required: true, message: '请选择产品', trigger: 'change' }],
        version: [
          { required: true, message: '请输入产品版本', trigger: 'blur' }
        ],
        language: [
          { required: true, message: '请选择产品语言', trigger: 'change' }
        ],
        baseLine: [
          { required: true, message: '请选择产品基线', trigger: 'change' }
        ],
        baseLineVersion: [
          { required: true, message: '请选择产品基线版本', trigger: 'change' }
        ],
        link: [{ required: true, message: '请填写下载链接', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleClickAdd (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this._postProductVersionAddData()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleReset (formName) {
      this.$refs[formName].resetFields()
    },
    _postProductVersionAddData () {
      postProductVersionAddData()
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success('恭喜您!产品新版本添加成功!!!')
            this.handleReset('ruleForm')
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
.version-add {
  padding: 40px;
  .el-select,
  .el-input,
  .el-textarea,
  .el-form-item__content {
    width: 50% !important;
  }
  .btn-wrapper {
    width: 200px;
    margin-top: 50px;
    margin-left: 420px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
