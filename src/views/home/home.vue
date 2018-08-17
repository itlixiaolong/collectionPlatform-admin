<template>
  <section
    :style="{height:calculateHeight}"
    class="container">
    <header class="header">
      <div class="system">
        <img
          src="../../../static/img/logo.png"
          width="50"
          height="50">
        <p class="system-name">总集平台</p>
      </div>
      <ul class="user-info">
        <li class="user-name">
          <span class="icon-user"></span>
          <span>李小龙</span>
        </li>
        <li class="user-department">
          <span class="icon-tree"></span>
          <span >总集成部</span>
        </li>
        <li class="user-quit">
          <span>退出</span>
        </li>
      </ul>
    </header>
    <section class="content">
      <aside
        ref="aside"
        class="aside">
        <nav-menu
          :collapse="iscollapse"
          :menu-data="menuData"
          :default-active="$route.path"
        />
      </aside>
      <section
        :style="{width:`${calculateWidth+40}px`}"
        class="right-section">
        <header class="section-header">
          <span
            :class="iscollapse?'icon-point-right':'icon-point-left'"
            class="control-Icon"
            @click="handleMenuStatus"></span>
          <bread-crumb :menu-list="menuList"/>
        </header>
        <div
          :style="{width:`${calculateWidth}px`}"
          class="section-view">
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
      iscollapse: false,
      leftPx: 220,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    }
  },
  computed: {
    calculateHeight () {
      return `${this.innerHeight - 20}px`
    },
    calculateWidth () {
      return this.innerWidth - this.leftPx
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
  mounted () {
    window.onresize = () => {
      this.innerWidth = window.innerWidth
      this.innerHeight = window.innerHeight
    }
  },
  methods: {
    handleMenuStatus () {
      this.iscollapse = !this.iscollapse
      this.iscollapse ? (this.leftPx = 64) : (this.leftPx = 220)
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
}
.header {
  flex: 0 0 60px;
  display: flex;
  justify-content: space-between;
  line-height: 60px;
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
      .icon-user,
      .icon-tree {
        color: aquamarine;
        font-size: 20px;
        position: relative;
        top: 1px;
        right: 3px;
      }
      .icon-tree {
        color: #409eff;
      }
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
    .section-header {
      height: 45px;
      width: 100%;
      display: flex;
      align-items: center;
      background-color: #eff2f7;
      .control-Icon {
        margin: 6px 10px 10px 10px;
        cursor: pointer;
        font-size: 20px;
        color: #000;
      }
    }
    .section-view {
      width: 100%;
      // height: 100%;
      // overflow-y: auto;
      box-sizing: border-box;
      padding: 10px 20px 20px;
    }
  }
}
</style>
