<template>
  <div class="body">
    <myheader />
    <headTow />
    <el-container class="userW">
      <el-aside width="300px">
        <el-menu default-active="1"
                 id="boxFixed2"
                 :class="{'is_fixed2':isFixed2}"
                 class="el-menu-vertical-demo"
                 @select="handleSelect3">
          <el-menu-item index="/overview">
            <i class="el-icon-s-home"></i>
            <span slot="title">账号概览</span>
          </el-menu-item>
          <el-menu-item index="/mydetails">
            <i class="el-icon-user"></i>
            <span slot="title">账号详情</span>
          </el-menu-item>
          <el-menu-item index="/games">
            <i class="el-icon-s-operation"></i>
            <span slot="title">游戏&充值</span>
          </el-menu-item>
          <el-menu-item index="/security">
            <i class="el-icon-setting"></i>
            <span slot="title">安全</span>
          </el-menu-item>
          <el-menu-item index="/overview">
            <i class="el-icon-lock"></i>
            <span slot="title">隐私</span>
          </el-menu-item>
          <el-menu-item index="/mydetails">
            <i class="el-icon-link"></i>
            <span slot="title">连接</span>
          </el-menu-item>
          <el-menu-item index="/overview">
            <i class="el-icon-bank-card"></i>
            <span slot="title">付款方式</span>
          </el-menu-item>
          <el-menu-item index="/mydetails">
            <i class="el-icon-shopping-cart-1"></i>
            <span slot="title">交易记录</span>
          </el-menu-item>
        </el-menu>

      </el-aside>

      <el-container>

        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
    <v-footer></v-footer>
  </div>
</template>

<script>

import overview from './overview.vue'
import mydetails from './mydetails.vue'
import myheader from '@/components/myHeader/myhead'
import headTow from '@/components/headTow/headTow'
import VFooter from '@/components/footer/footer'
import GameIcon from '@/components/GameIcon/GameIcon'
import { getHome } from '@/api'



export default {
  data () {
    return {
      isFixed2: false,
    }
  },
  created () {

  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll2)
  },
  methods: {
    handleSelect3 (key, keyPath) {
      console.log(key, keyPath);
      let path = "/userCenter"
      this.$router.push(path + key)
    },
    handleScroll2 () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = document.querySelector('#boxFixed2').offsetTop - 20;
      // console.log(  document.querySelector('#footer').offsetTop);
      // this.isFixed2 = scrollTop > offsetTop ? true : false;
    }
  },
  components: {
    overview,
    mydetails,
    myheader,
    headTow,
    VFooter
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
.body {
  background-color: #062959;
  font-family: "微软雅黑";
}
.userW .el-main {
  padding: 0px;
}
.el-menu {
  background-color: rgba(21, 26, 35, 0.6);
}
.w ul li {
  margin: 0px !important;
  text-align: left;
}
.w ul {
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
.el-menu {
  border-right: 0px;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: rgba(0, 174, 255, 0.4);
  border-left: 2px solid rgba(21, 26, 35, 0.6);
}
</style>
