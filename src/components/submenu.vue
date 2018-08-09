<template>
  <div class="sub-menu">
    <div
      v-for="subMenu in subMenus"
      :key="subMenu.path">
      <!-- 无二级菜单 -->
      <el-menu-item
        v-if="!subMenu.children"
        :index="subMenu.path"
        :route="subMenu.path"
      >
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">{{ subMenu.name }}</span>
      </el-menu-item>
      <!-- 有二级菜单 -->
      <el-submenu
        v-if="subMenu.children&&subMenu.children.length&&subMenu.children.length>0"
        :index="subMenu.path">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span class="menu-text"> {{ subMenu.name }}</span>
        </template>
        <SubMenu :sub-menus="subMenu.children"/>
      </el-submenu>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SubMenu',
  props: {
    subMenus: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
.sub-menu .el-submenu li,
.el-submenu__title {
  color: #838fa9;
}
.el-submenu .el-submenu__title:hover {
  /* color: #111 !important; */
  background-color: rgb(50, 64, 87);
}
.el-menu-item:hover {
  /* color: #111 !important; */
  background-color: rgb(50, 64, 87);
}
.el-menu--collapse .menu-text {
  visibility: hidden;
  /* transition: all 0.5s ease; */
}
</style>
