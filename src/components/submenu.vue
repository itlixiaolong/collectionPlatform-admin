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
        <i
          :class="subMenu.icon"
          class="icon-level2 icon"></i>
        <span slot="title">{{ subMenu.name }}</span>
      </el-menu-item>
      <!-- 有二级菜单 -->
      <el-submenu
        v-if="subMenu.children&&subMenu.children.length&&subMenu.children.length>0"
        :index="subMenu.path">
        <template slot="title">
          <i
            :class="subMenu.icon"
            class="icon-leval1 icon"></i>
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
@import url("../assets/style.css");
.icon-leval1 {
  font-size: 20px;
  margin-right: 10px;
}
.icon-level2 {
  margin-right: 10px;
}
.icon-playlist_add,
.icon-playlist_add_check {
  font-size: 22px;
  margin-right: 8px;
}
.icon-format_list_numbered {
  font-size: 16px;
  margin-right: 14px;
}
.icon-stack,
.icon-files-empty {
  font-size: 16px;
  margin-right: 14px;
}
.icon-indent-increase,
.icon-files-empty {
  font-size: 14px;
  margin-right: 16px;
}
.icon-git {
  font-size: 16px;
  margin-right: 14px;
}

.el-submenu .menu-text,
.el-submenu .el-menu-item {
  color: #f4f0f0 !important;
}
.el-menu-item.is-active {
  background-color: #000;
}
.el-submenu.is-active .el-submenu__title .menu-text {
  /* background-color: #2c2727; */
  /* color: rgb(255, 255, 255) !important; */
}
.el-submenu .el-submenu__title:hover {
  /* color: #111 !important; */
  background-color: #000;
  color: #fff !important;
}
.el-submenu.is-active .el-menu-item.is-active {
  background-color: #000;
  /* color: #fff !important; */
}
.el-menu .sub-menu .el-menu-item:hover,
.el-menu .sub-menu .el-menu-item:focus {
  background-color: #000 !important;
  color: #fff !important;
}
.el-menu--collapse .menu-text,
.el-menu--collapse .el-submenu__icon-arrow {
  visibility: hidden;
  /* transition: all 0.5s ease; */
}
</style>
