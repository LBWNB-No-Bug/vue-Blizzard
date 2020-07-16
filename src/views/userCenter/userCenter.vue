<template>
  <el-container class="userW">
    <el-aside width="300px">
      <el-menu default-active="1"
               class="el-menu-vertical-demo"
               @select="handleSelect3">
               <el-menu-item index="10">
          <i class="el-icon-s-home"></i>
          <span slot="title">账号概览</span>
        </el-menu-item>
        <el-menu-item index="1">
          <i class="el-icon-user"></i>
          <span slot="title">账号详情</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-operation"></i>
          <span slot="title">游戏&充值</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">安全</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-lock"></i>
          <span slot="title">隐私</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-link"></i>
          <span slot="title">连接</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-bank-card"></i>
          <span slot="title">付款方式</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-shopping-cart-1"></i>
          <span slot="title">交易记录</span>
        </el-menu-item>
      </el-menu>

    </el-aside>

    <el-container>

      <el-main>
        <overview />
        <mydetails />
      </el-main>


    </el-container>
  </el-container>
</template>

<script>

import overview from './overview.vue'
import mydetails from './mydetails.vue'

export default {
  methods: {
    handleSelect3 (key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components:{
    overview,
    mydetails,
  }

}
</script>

<style scoped>
.userW {
  width: 1600px;
  margin: auto;
  margin-top: 40px;
  padding-bottom: 40px;
}
.userW .el-main{
  padding: 0px;
}
.el-menu {
  background-color: rgba(21, 26, 35, 0.6);
}
.userW ul li {
  margin: 0px !important;
  text-align: left;
}
.userW ul {
  text-align: left;
}
.el-menu-item,
.el-submenu__title {
  width: 100%;
  border-left: 2px solid rgba(21, 26, 35, 0.6);
  border-right: 0px;
}
.el-menu-item {
  color: #fff;

}
.el-menu{
border-right: 0px;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: rgba(0, 174, 255, 0.4);
  border-left: 2px solid rgba(21, 26, 35, 0.6);
}


</style>
