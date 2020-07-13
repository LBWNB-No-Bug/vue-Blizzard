<template>
  <div class="body">
    <myheader></myheader>
    <div class="main">
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
              <game-icon :size="1"
                         :type="item.type"></game-icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import GameIcon from '@/components/GameIcon/GameIcon'
import myheader from '@/components/myHeader/myhead'
import VFooter from '@/components/footer/footer'
import {getHome} from '@/api'

export default {
  name: 'Home',
  data () {
    return {
      Carousel: [],
      ListIcon: [],
    }
  },
  created() {
    getHome().then( (res) => {
      this.Carousel = res.data.Carousel
      this.ListIcon = res.data.ListIcon
    })
  },
  components: {
    VFooter,
    GameIcon,
    myheader
  }
}
</script>

<style>
.body {
  background-color: #062959;
}
.ListGameIco {
  width: 100%;
  height: 66px;
  /*background-color: #42b983;*/
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
.ListGame-wrapper {
  width: 600px;
  height: 40px;
  margin: 0 auto;
  padding-top: 5px;
}
.bt-wrapper {
  float: left;
  padding-top: 15px;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  font-size: 15px;
}
.listIco-wrapper {
  height: 100%;
  float: left;
  margin-left: 30px;
}
.ListGameIco .listIco {
  width: 40px;
  height: 40px;
  list-style: none;
  display: inline-block;
  padding-top: 10px;
}
.main {
  min-height: 1200px;
}
</style>
