<template>
  <section
    :style="{height:clientHeight+'px'}"
    class="container">
    <header class="header">
      <div class="system">
        <img
          src="../../../static/img/logo.png"
          width="50"
          height="50">
        <!-- <span class="el-icon-menu icon"></span> -->
        <p class="system-name">总集平台</p>
      </div>
      <ul class="user-info">
        <li class="user-name">
          用户：
          <span>李小龙</span>
        </li>
        <li class="user-department">
          所属部门：
          <span >总集成部</span>
        </li>
        <li class="user-quit">
          <span>退出</span>
        </li>
      </ul>
    </header>
    <section class="content">
      <aside class="aside">
        <nav-menu
          :collapse="iscollapse"
          :menu-data="menuData"
          :default-active="$route.path"
        />
      </aside>
      <section class="right-section">
        <header class="section-header">
          <span
            :class="iscollapse?'icon-open':'icon-close'"
            class="control-Icon"
            @click="handleMenuStatus"></span>
          <bread-crumb :menu-list="menuList"/>
        </header>
        <div class="section-view">
          <router-view/>
        </div>
      </section>
    </section>
  </section>

</template>

<script type="text/ecmascript-6">
import NavMenu from '../../components/navmenu'
import BreadCrumb from '../../components/breadcrumb'
import { router } from '../../utils/base.js'
export default {
  name: 'Home',
  components: {
    NavMenu,
    BreadCrumb
  },
  data () {
    return {
      menuData: router,
      iscollapse: false
    }
  },
  computed: {
    clientHeight () {
      return window.innerHeight
    },
    menuList () {
      return this.$route.matched
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val)
      },
      // 深度观察监听
      deep: true
    }
  },
  created () {
    // this.menu = routerList
  },
  methods: {
    calculateClientHeight () {},
    handleMenuStatus () {
      this.iscollapse = !this.iscollapse
    }
  }
}
</script>
<style scope lang="less">
@import url("../../assets/style.css");
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // background-color: #324057f3;
}
.header {
  flex: 0 0 70px;
  display: flex;
  justify-content: space-between;
  line-height: 70px;
  border-bottom: 1px solid #000;
  background-color: #334057;
  .system {
    padding: 0 20px;
    display: flex;
    .icon {
      line-height: 60px;
      font-size: 40px;
      color: #409eff;
    }
    img {
      margin-top: 5px;
    }
    .system-name {
      color: #fff;
      // vertical-align: middle;
      font-size: 22px;
      font-family: cursive;
      letter-spacing: 3px;
    }
  }
  .user-info {
    display: flex;
    justify-content: space-around;
    padding-right: 20px;
    color: #fff;
    li {
      padding: 0 10px;
    }
    .user-quit:hover {
      color: #66b1ff;
    }
  }
}
.content {
  flex: 1;
  display: flex;
  .aside {
    height: 100%;
    padding-top: 20px;
    background-color: #334057;
  }
  .right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    .section-header {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      background-color: #eff2f7;
      .control-Icon {
        margin: 10px;
        cursor: pointer;
        font-size: 20px;
        color: #000;
      }
    }
  }
}
</style>
