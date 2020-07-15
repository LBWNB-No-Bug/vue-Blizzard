<template>
  <nav class="navBorder">
    <el-menu class="el-menu-demo"
             mode="horizontal">
      <el-menu-item index="1">主页</el-menu-item>
      <popup v-bind:data="ListIcon" num="2"/>
      <popup v-bind:data="ListIcon" num="3"/>
    </el-menu>
  </nav>

</template>

<script>

import popup from './popup.vue'

import { getHome } from '@/api'

export default {
  data () {
    return {
      // activeIndex: '1',
      // activeIndex4: '1',
      // myServe: [],
      ListIcon: [],
    };
  },
  created () {
    getHome().then((res) => {
      this.ListIcon = res.ListIcon
      // this.myServe = res.myServe
    })
  },
  methods: {
    handleSelect2 (key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    popup
  }
}

</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  user-select: none;
}
.navBorder {
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.navBorder .right {
  position: relative;
  left: 1296px;
}
.navBorder .el-menu-demo {
  width: 1600px;
  margin: auto;
}
.navBorder .el-menu.el-menu--horizontal.el-menu {
  border: none;
  background-color: rgba(0, 0, 0, 0);
}
.navBorder .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.navBorder .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.navBorder .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
}
.navBorder .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border: none;
  color: #909399;
}
.navBorder .el-menu--horizontal > .el-submenu:focus .el-submenu__title,
.navBorder .el-menu--horizontal > .el-submenu:hover .el-submenu__title {
  color: #fff;
}
.navBorder .el-menu--horizontal .el-menu-item .is-active {
  border: none;
  color: #909399;
  min-width: 120px;
}
.navBorder .el-menu--popup{
  padding: 0px;
}
.navBorder .el-menu--horizontal .el-menu--popup .is-active:hover{
  color: #fff;
  background-color: rgba(58, 63, 74, 1);
  
}
.navBorder .el-submenu .el-menu-item{
  min-width: 120px;
}
.navBorder ul li{
  margin-left: 0px !important;
  display: block !important;
  text-align: left;
}
</style>