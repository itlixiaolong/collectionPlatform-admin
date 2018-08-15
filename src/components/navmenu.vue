<template>
  <el-menu
    :collapse="collapse"
    :default-active="defaultActive"
    :mode="menuMode"
    :router="routerMode"
    :unique-opened="uniqueOpened"
    :active-text-color="activeTextColor"
    text-color="#fff"
    class="el-menu-vertical"
    @open="handleOpen"
    @close="handleClose">
    <sub-menu :sub-menus="subMenus"/>
  </el-menu>
</template>
<script>
import SubMenu from './submenu'
export default {
  name: 'NavMenu',
  components: {
    SubMenu
  },
  props: {
    defaultActive: {
      type: String,
      required: true
    },
    activeTextColor: {
      type: String,
      default: '#409EFF'
    },
    collapse: {
      type: Boolean,
      default: true
    },
    menuData: {
      type: Array,
      default () {
        return []
      }
    },
    menuMode: {
      type: String,
      default: 'vertical'
    }
  },
  data () {
    return {
      routerMode: true,
      uniqueOpened: true
    }
  },
  computed: {
    subMenus () {
      return this.menuData[0].children
    }
  },
  methods: {
    handleOpen () {},
    handleClose () {}
  }
}
</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  background: #324057f3 !important;
  border-right: none;
}
</style>
