<template>
  <div>
    <myheader></myheader>
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
</template>

<script>
// @ is an alias to /src
import GameIcon from '@/components/GameIcon/GameIcon'
import myheader from '@/components/myhead.vue'
export default {
  name: 'Home',
  data () {
    return {
      ListIcon: [
        {
          GameName: "炉石传说",
          icon: "...",
          type: "2",
          Jump: "http:1223"
        },
        {
          GameName: "炉石传说",
          icon: "...",
          type: "3",
          Jump: "http:1223"
        },
        {
          GameName: "炉石传说",
          icon: "...",
          type: "4",
          Jump: "http:1223"
        },
        {
          GameName: "炉石传说",
          icon: "...",
          type: "5",
          Jump: "http:1223"
        },
        {
          GameName: "炉石传说",
          icon: "...",
          type: "2",
          Jump: "http:1223"
        },
        {
          GameName: "炉石传说",
          icon: "...",
          type: "3",
          Jump: "http:1223"
        },
        {
          GameName: "炉石传说",
          icon: "...",
          type: "4",
          Jump: "http:1223"
        },
        {
          GameName: "炉石传说",
          icon: "...",
          type: "5",
          Jump: "http:1223"
        },
      ]
    }
  },
  components: {
    GameIcon,
    myheader
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.ListGameIco {
  width: 100%;
  height: 66px;
  background-color: #42b983;
}
.ListGame-wrapper {
  width: 500px;
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
</style>
