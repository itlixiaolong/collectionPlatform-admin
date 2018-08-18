<template>
  <div class="view-port">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'ViewPort',
  components: {},
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.view-port {
  flex: 1;
  height: 100%;
}
</style>
