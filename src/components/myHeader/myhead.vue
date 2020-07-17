<template>
  <nav class="myhead">
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item class="myicon"
                    index="1" @click="butlink('/')"></el-menu-item>
      <el-menu-item index="2" @click="butlink('/')">商城</el-menu-item>
      <el-menu-item class="right"
                    index="3">支持</el-menu-item>
      <el-submenu :popper-append-to-body="false"
                  class="right"
                  index="4">
        <template slot="title">我的账号</template>
        <el-menu-item class="popup">
          <el-button v-if='islogin'
                     class="login_but"
                     type="primary"
                     @click="butlink('/login')">登陆</el-button>
          <div v-else>cc</div>
        </el-menu-item>
        <el-menu-item class="account" @click="butlink('/userCenter/overview')">
          <game-icon :size="3"
                     :type="0"></game-icon> 账户
        </el-menu-item>

        <el-menu-item class="register" @click="butlink('/register')">
          <game-icon :size="3"
                     :type="0"></game-icon>免费注册
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </nav>

</template>

<script>

  import GameIcon from '@/components/GameIcon/GameIcon'
  export default {

    data () {
      return {
        activeIndex: '1',
        activeIndex4: '1',
        islogin: true
      };
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
      },
      butlink (path) {
        this.$router.push(path)
      }
    },
    components: {
      GameIcon
    }
  }

</script>

<style>
  * {
    list-style: none;
    user-select: none;
  }
  .login_but {
    height: 40px;
    width: 200px;
    border-radius: 0;
    text-decoration: none;
  }
  body {
    min-width: 1800px;
  }
  body {
    min-width: 1800px;
  }
  .myhead {
    min-width: 1600px;
    background-image: url("bg.png");
  }
  .myhead a {
    text-decoration: none;
  }
  .myhead .myicon {
    background: url(https://www.battlenet.com.cn/login/static/images/toolkit/defaults/logos/blizzard/blizzard-default.1C4OH.png)
    no-repeat;
    background-size: 100% 60%;
    width: 80px;
    background-position: center;
  }
  .myhead .right {
    position: relative;
    left: 1296px;
  }
  .myhead .el-menu-demo {
    width: 1600px;
    margin: auto;
  }
  .myhead .el-menu.el-menu--horizontal.el-menu {
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
  .myhead .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .myhead .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .myhead .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
  }
  .myhead .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border: none;
    color: #909399;
  }
  .myhead .el-menu--horizontal > .el-submenu:focus .el-submenu__title,
  .myhead .el-menu--horizontal > .el-submenu:hover .el-submenu__title {
    color: #fff;
  }
  .myhead .el-menu--horizontal > .el-menu-item.is-active {
    border: none;
    color: #909399;
  }
  .myhead .el-menu--horizontal .el-menu--popup > .is-active:hover {
    background-color: rgba(57, 63, 78, 1);
    color: #fff;
    width: 100px;
  }
  .myhead .el-menu--collapse .el-menu .el-submenu,
  .el-menu--popup {
    min-width: 130px;
  }

  .myhead .el-menu--horizontal .el-menu .el-menu-item,
  .myhead .el-menu--horizontal .el-menu .el-submenu__title {
    margin: 0px;
    text-align: center;
    padding: 10px;
    height: auto;
    background-color: rgba(0, 0, 0, 0);
  }

  .myhead .right .el-menu--popup-bottom-start {
    margin: 0px;
    padding: 0px;
    left: -120px;
    background-image: linear-gradient(rgba(35, 44, 59, 1), rgba(20, 24, 33, 1));
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-top: 0px;
  }
  /* .myhead .popup{
    left: -120px;
  } */
  .myhead .el-menu--horizontal .el-menu .el-menu-item,
  .myhead .el-menu--horizontal .el-menu .el-submenu__title {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  .myhead .el-menu--horizontal .el-menu .el-menu-item:hover,
  .myhead .el-menu--horizontal .el-menu .el-submenu__title:hover {
    color: #fff;
  }
  .myhead .account {
    text-align: left !important;
  }
  .myhead .register {
    text-align: left !important;
  }
</style>
