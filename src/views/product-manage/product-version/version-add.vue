<template>
  <div class="version-add">
    <el-form
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
            label="e福州"
            value="0"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="版本"
        prop="name">
        <el-input v-model="form.company"/>
      </el-form-item>

      <el-form-item
        label="选择产品"
        prop="product">
        <el-select
          v-model="form.type"
          placeholder="语言">
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
        prop="type">
        <el-select
          v-model="form.type"
          placeholder="请选择产品版本">
          <el-option
            label="toon"
            value="shanghai"/>
          <el-option
            label="toon2"
            value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="基线版本"
        prop="type">
        <el-select
          v-model="form.type"
          placeholder="请选择基线版本">
          <el-option
            label="试用版本"
            value="shanghai"/>
          <el-option
            label="正式版本"
            value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="下载链接"
        prop="name">
        <el-input v-model="form.company"/>
      </el-form-item>
    </el-form>
    <div class="btn-wrapper">
      <el-button
        type="success"
        @click="handleClickAdd">
        添加
      </el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'ProjectVersionAdd',
  data () {
    return {
      form: {
        product: '',
        type: '',
        startTime: '',
        endTime: '',
        company: '',
        reason: '',
        btnText: '申请',
        isEdit: false
      },
      rules: {}
    }
  },
  methods: {
    handleClickAdd () {
      this.$emit('backFormData', this.formData)
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
    width: 20%;
    margin-top: 50px;
    margin-left: 450px;
    display: flex;
    justify-content: space-around;
    .el-button {
      width: 30%;
    }
  }
}
</style>
