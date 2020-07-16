<template>
  <nav class="navBorder">
    <el-menu class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect2">
        <el-menu-item index="1">
          <router-link class="route" to="/">
            <game-icon :size="4"
                       :type="3"></game-icon>
             &nbsp 主页
          </router-link>
        </el-menu-item>
      <popup v-bind:data="ListIcon"
             num="2"
             title="游戏" />
      <popup v-bind:data="server"
             num="3"
             title="服务" />
      <el-menu-item index="4">周边商城</el-menu-item>
      <el-menu-item class="right"
                    index="5">
        <game-icon :size="4"
                   :type="2"></game-icon> &nbsp 心愿单
      </el-menu-item>
      <popup class="right"
             v-bind:data="ds"
             num="6"
             title="暴雪游戏点数" />
    </el-menu>
  </nav>

</template>

<script>

import popup from './popup.vue'
import GameIcon from '@/components/GameIcon/GameIcon'
import { getHome } from '@/api'

export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex4: '1',
      // myServe: [],
      ListIcon: [],
      server: [{
        GameName: "战网昵称修改服务",
        type: 0,
        size: 4
      }, {
        GameName: "使用兑换码",
        type: 1,
        size: 4
      }],
      ds: [
        { GameName: "充值点数", type: 1, size: 4 },
        { GameName: "赠送点数", type: 5, size: 4 },
        { GameName: "兑换点卡", type: 6, size: 4 },
        { GameName: "充值历史", type: 7, size: 4 },
        { GameName: "暴雪游戏点数帮助", type: 8, size: 4 },
      ]
    };
  },
  created () {
    getHome().then((res) => {
      this.ListIcon = res.ListIcon
    })
  },
  methods: {
    handleSelect2 (key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  components: {
    popup,
    GameIcon
  }
}

</script>

<style>
  .route {
    text-decoration: none;
  }
* {
  list-style: none;
  user-select: none;
}
.navBorder {
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 60px;
  background-color: #032041;
}
.navBorder .right {
  position: relative;
  left: 1045px;
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
.navBorder .el-menu--popup {
  padding: 0px;
}
.navBorder .el-menu--horizontal .el-menu--popup .is-active:hover {
  color: #fff;
  background-color: rgba(58, 63, 74, 1);
}
.navBorder .el-submenu .el-menu-item {
  min-width: 120px;
}
.navBorder ul li {
  margin-left: 0px !important;
  display: block !important;
  text-align: left;
}
.navBorder
  .el-submenu
  .el-menu--horizontal
  .el-menu-item:not(.is-disabled):focus,
.navBorder
  .el-submenu
  .el-menu--horizontal
  .el-menu-item:not(.is-disabled):hover {
  background-color: rgba(60, 66, 77, 1);
  border: 0px;
}
.navBorder .el-menu--horizontal > .el-menu-item.is-active {
  border: 0px;
  color: #909399;
}
</style>
