<template>
  <div class="copyright-approve">
    <apply-approve-form
      :form-data="ruleForm"
      :form-rules="rules"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import ApplyApproveForm from '../../components/apply-approve-form'
export default {
  name: 'CopyrightApprove',
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
        btnText: '审批',
        isEdit: true
      },
      rules: {}
    }
  }
}
</script>

<style scoped lang="less">
.copyright-approve {
  padding: 40px;
}
</style>
