<template>
  <el-breadcrumb :separator="separator">
    <el-breadcrumb-item
      v-for="(item, index) in menuList"
      :key="index"
      :to="{path: item.path?item.path:'/'}"
    >
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>

</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    menuList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>
