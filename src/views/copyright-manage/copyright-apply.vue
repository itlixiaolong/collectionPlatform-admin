<template>
  <div class="copyright-apply">
    <apply-approve-form
      :form-data="ruleForm"
      :form-rules="rules"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import ApplyApproveForm from '../../components/apply-approve-form'
export default {
  name: 'CopyrightApply',
  components: {
    ApplyApproveForm
  },
  data () {
    return {
      ruleForm: {
        product: '',
        type: '',
        startTime: '',
        endTime: '',
        company: '',
        reason: '',
        btnText: '申请'
      },
      rules: {}
    }
  }
}
</script>

<style scoped lang="less">
.copyright-apply {
  padding: 40px;
}
</style>
