<template>
  <nav class="navBorder"
       id="boxFixed"
       :class="{'is_fixed':isFixed}">
    <el-menu class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect2">
      <el-menu-item index="1"
                    @click="butlink('/')">
        <game-icon class="iconMargin"
                   :size="4"
                   :type="3"></game-icon>
        主页
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
        <game-icon class="iconMargin"
                   :size="4"
                   :type="2"></game-icon> 心愿单
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
        isFixed: false,
        // myServe: [],
        ListIcon: [
          {
            "GameName": "守望先锋",
            "icon": "...",
            "type": 0,
            "Jump": "#"
          },
          {
            "GameName": "魔兽世界",
            "icon": "...",
            "type": 1,
            "Jump": "#"
          },
          {
            "GameName": "炉石传说",
            "icon": "...",
            "type": 2,
            "Jump": "#"
          },
          {
            "GameName": "风暴英雄",
            "icon": "...",
            "type": 3,
            "Jump": "#"
          },
          {
            "GameName": "魔兽争霸Ⅲ",
            "icon": "...",
            "type": 4,
            "Jump": "#"
          },
          {
            "GameName": "暗黑破坏神Ⅲ",
            "icon": "...",
            "type": 5,
            "Jump": "#"
          },
          {
            "GameName": "星际争霸Ⅱ",
            "icon": "...",
            "type": 7,
            "Jump": "#"
          },
          {
            "GameName": "星际争霸",
            "icon": "...",
            "type": 8,
            "Jump": "#"
          }
        ],
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

    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
      handleSelect2 (key, keyPath) {
        // console.log(key, keyPath);
      },
      butlink (path) {
        this.$router.push(path)
      },
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('#boxFixed').offsetTop;
        this.isFixed = scrollTop > offsetTop ? true : false;
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
  .is_fixed {
    position: fixed;
    z-index: 10;
    top: 0;
  }
  .navBorder {
    z-index: 100;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    height: 60px;
    background-color: #032041;
  }
  .navBorder .right {
    position: relative;
    left: 1012px;
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
  .navBorder .iconMargin {
    padding-left: 5px;
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title {
    border-bottom: 0px;
  }
</style>
