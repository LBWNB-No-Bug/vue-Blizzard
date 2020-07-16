<template>
  <div ref="body" class="body" onscroll="">
    <myheader/>
    <headTow/>
    <userCenter/>
    <div class="main">
      <carousel :Carousel="Carousel"></carousel>
      <div class="ListGameIco">
        <div class="ListGame-wrapper">
          <div class="bt-wrapper">
            <p>暴雪游戏</p>
          </div>
          <ul class="listIco-wrapper">
            <li class="listIco"
                v-for="(item,index) in ListIcon"
                :key="index"
                :title="item.GameName">
              <game-icon class="game-icon" :size="2"
                         :type="item.type"></game-icon>
            </li>
          </ul>
        </div>
      </div>
      <list-game v-for="(item, index) in ListGame"
                 :bt="list[index]"
                 :data="item"
                 :key="index"
        ></list-game>
        <el-backtop class="top">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
    </div>
    <v-footer :logo="logo"></v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import GameIcon from '@/components/GameIcon/GameIcon'
import myheader from '@/components/myHeader/myhead'
import VFooter from '@/components/footer/footer'
import Carousel from '@/components/Carousel/carousel'
import ListGame from '@/components/ListGame/listgame'
import headTow from '@/components/headTow/headTow'

import {getHome} from '@/api'

export default {
  name: 'Home',
  data () {
    return {
      Carousel: {},
      ListIcon: {},
      logo:"",
      ListGame: [],
      list: ["推荐", "精选", "当下流行", "热门赠礼"]
    }
  },
  created() {
    this._getHome()
  },
  methods: {
    _getHome() {
      getHome().then( (res) => {
        this.Carousel = res.Carousel
        this.ListIcon = res.ListIcon
        this.logo = res.Logo
        this.ListGame.push(res.recommend)
        this.ListGame.push(res.Featured)
        this.ListGame.push(res.Now)
        this.ListGame.push(res.Popular)
      })
    }
  },
  components: {
    VFooter,
    GameIcon,
    myheader,
    Carousel,
    ListGame,
    headTow
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
.body {
  background-color: #062959;
  font-family: "微软雅黑";
}
.top {
  width: 48px;
  height: 48px;
  background-color: rgba(0,0,0,.5);
  border-radius: 0;
}
.top:hover {
    background-color: rgba(0,0,0,.5);
}
.top:hover .el-icon-caret-top {
    color: #5cb9ec;
}
.top .el-icon-caret-top {
  font-size: 32px;
  position: absolute;
  left: 7px;
  top: 7px;
  color: #009ae4;
}
.el-carousel__arrow--left,.el-carousel__arrow--right{
  width: 40px;
  height: 80px;
  color: #009ae4;
  border-radius: 0;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, .15);
}
.el-carousel__arrow--left {
  left: 16px;
  font-size: 45px;
  color: #91e4ff;
}
.el-carousel__arrow--right {
  right: 20px;
  font-size: 45px;
  color: #91e4ff;
}
.listIco-wrapper .game-icon {
  transition: all 0.3s;
  cursor:pointer;
}
.listIco-wrapper .game-icon:hover {
  transform:scale(1.3);
}
.ListGameIco {
  width: 100%;
  height: 66px;
  /*background-color: #42b983;*/
  background-image: url("bg.png");
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
.ListGame-wrapper {
  width: 600px;
  height: 60px;
  margin: 0 auto;
  padding-top: 5px;
}
.bt-wrapper {
  float: left;
  padding-top: 18px;
}
.bt-wrapper p {
  font-family: inherit;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  font-size: 15px;
}
.listIco-wrapper {
  height: 100%;
  float: left;
  margin-left: 20px;
}
.ListGameIco .listIco {
  width: 40px;
  height: 40px;
  list-style: none;
  display: inline-block;
  padding-top: 10px;
  margin-left: 15px;
}
.main {
  min-height: 1500px;
}
</style>
