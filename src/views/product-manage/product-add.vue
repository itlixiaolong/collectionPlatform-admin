<template>
  <div class="product-add">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="350px"
      class="demo-ruleForm">
      <el-form-item
        label="产品所属行业"
        prop="trade">
        <el-select
          v-model="ruleForm.trade"
          placeholder="请选择产品所属行业">
          <el-option
            label="教育"
            value="0"/>
          <el-option
            label="政府"
            value="1"/>
          <el-option
            label="金融"
            value="2"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="产品所属地区"
        prop="region">
        <el-select
          v-model="ruleForm.region"
          placeholder="请选择产品所属地区">
          <el-option
            label="华北"
            value="shanghai"/>
          <el-option
            label="东北"
            value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="产品名称"
        prop="name">
        <el-input v-model="ruleForm.name"/>
      </el-form-item>
      <el-form-item
        label="产品状态"
        prop="status">
        <el-select
          v-model="ruleForm.status"
          placeholder="请选择目前状态">
          <el-option
            label="演示版本"
            value="shanghai"/>
          <el-option
            label="企业版本"
            value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="产品logo"
        prop="logo">
        <el-upload
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img
            :src="dialogImageUrl"
            width="100%"
            alt="">
        </el-dialog>
      </el-form-item>
      <div class="btn-wrapper">
        <el-button
          type="success"
          @click="handleConfrim('ruleForm')">确定</el-button>
        <el-button
          type="warning"
          @click="handleCancel('ruleForm')">取消</el-button>
      </div>
    </el-form>

  </div>
</template>

<script type="text/ecmascript-6">
import { postproductAddData } from '../../api/product'
export default {
  name: 'ProductAdd',

  data () {
    return {
      dialogVisible: false,
      dialogImageUrl: '',
      ruleForm: {
        trade: '',
        region: '',
        name: '',
        status: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        status: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        trade: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
      console.log(file)
    },
    handleConfrim (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this._postproductAddData()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleCancel (formName) {
      this.$refs[formName].resetFields()
    },
    _postproductAddData () {
      postproductAddData()
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success('恭喜您产品添加成功!!!')
            this.handleCancel('ruleForm')
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
.product-add {
  padding: 40px;
  .el-select,
  .el-input {
    width: 50%;
  }
  .btn-wrapper {
    width: 200px;
    margin-top: 30px;
    margin-left: 450px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
