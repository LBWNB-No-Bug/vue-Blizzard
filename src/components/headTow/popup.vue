<template>

  <el-submenu :popper-append-to-body="false"
              :index='num' v-if="data" >
    <template slot="title">{{title}}</template>
    <el-menu-item v-for="(item,index) in data"
                  :key="index"
                  :data="item">
      <game-icon :size="item.size"
                 :type="item.type"></game-icon>

      {{item.GameName}}

    </el-menu-item>
  </el-submenu>
</template>

<script>
import GameIcon from '@/components/GameIcon/GameIcon'
export default {
  props: {
  data: {},
  num:{},
  title:{}
  },
  methods:{
    
  }
  ,
  components: {
    GameIcon
  }
}
</script>

<style scoped>
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  background-color: rgba(26, 34, 48, 1);
  color: #909399;
}

</style>