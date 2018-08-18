<template>
  <div class="apply-approve-form">
    <el-form
      :model="form"
      :rules="rules"
      :disabled="form.isEdit"
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
        label="授权类型"
        prop="type">
        <el-select
          v-model="form.type"
          placeholder="请选择产品类型">
          <el-option
            label="试用版本"
            value="shanghai"/>
          <el-option
            label="正式版本"
            value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item
        label="开始时间"
        prop="name">
        <el-date-picker
          v-model="form.startTime"
          type="date"
          placeholder="选择开始时间"
          style="width: 100%;"/>
      </el-form-item>
      <el-form-item
        label="结束时间"
        prop="name">
        <el-date-picker
          v-model="form.endTime"
          type="date"
          placeholder="选择结束时间"
          style="width: 100%;"/>
      </el-form-item>
      <el-form-item
        label="授权公司"
        prop="name">
        <el-input v-model="form.company"/>
      </el-form-item>
      <el-form-item label="申请原因">
        <el-input
          v-model="form.reason"
          type="textarea"/>
      </el-form-item>
    </el-form>
    <div class="btn-wrapper">
      <el-button
        type="success"
        @click="handleClickBtn">
        {{ form.btnText }}
      </el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'ApplyApproveForm',
  props: {
    formData: {
      type: Object,
      default () {
        return {}
      }
    },
    formRules: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    form () {
      return Object.assign(
        {
          product: '',
          type: '',
          startTime: '',
          endTime: '',
          company: '',
          reason: '',
          btnText: '申请',
          isEdit: false
        },
        this.formData
      )
    },
    rules () {
      return Object.assign({}, this.formRules)
    }
  },
  methods: {
    handleClickBtn () {
      this.$emit('backFormData', this.formData)
    }
  }
}
</script>

<style scoped lang="less">
.apply-approve-form {
  .el-select,
  .el-input,
  .el-textarea,
  .el-form-item__content {
    width: 50% !important;
  }
  .btn-wrapper {
    width: 100px;
    margin-top: 50px;
    margin-left: 450px;
    display: flex;
    justify-content: space-around;
    // .el-button {
    //   width: 30%;
    // }
  }
}
</style>
