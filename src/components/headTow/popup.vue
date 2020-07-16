<template>
  <el-submenu :popper-append-to-body="false"
              :index='num' v-if="data" >
    <template slot="title">{{title}}</template>
    <el-menu-item v-for="(item,index) in data"
                  :key="index"
                  :data="item">
      <router-link target="_blank" class="route" :to="{path:'/GameContent', query:{name: gameName[index]}}">
        <game-icon :size="item.size"
                   :type="item.type"></game-icon>
          {{item.GameName}}
      </router-link>
    </el-menu-item>
  </el-submenu>
</template>

<script>
import GameIcon from '@/components/GameIcon/GameIcon'
export default {
  data() {
    return {
      gameName:['SWXF','MSSJ','LSCS','FBYX','MSZB3','AHPHS3','XJZB2','XJZB']
    }
  },
  props: {
    data: {},
    num:{},
    title:{},
  },
  components: {
    GameIcon
  }
}
</script>

<style scoped>
  .route {
    text-decoration: none;
    color: #909399;
  }
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  background-color: rgba(26, 34, 48, 1);
  color: #909399;
}

</style>
