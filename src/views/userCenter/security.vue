<template>
  <div class="w">
    <h1>安全</h1>
      <cardDiv text=密码 :width="long" >
         <el-row>
          <el-col class="detailTitle" :span="5">密码</el-col>
          <el-col class="detailComm" :span="14">请修改您的密码</el-col>
        </el-row>
      </cardDiv>
      <cardDiv text=暴雪游戏安全令 :width="long" >
         <el-row>
          <el-col class="detailTitle" :span="5">状态</el-col>
          <el-col class="detailComm" :span="14">未激活</el-col>
        </el-row>
      </cardDiv>
  </div>
</template>

<script>

import cardDiv from "./cardDiv"

export default {
  data(){
    return{
      sort: { width: '590px' },
      long: { width: '1210px' },
    }
  },
  components:{
    cardDiv,
  }
}
</script>

<style>
.w {
  margin-left: 60px;
  width: 1240px;
  min-height: 500px;
}
.w ul {
  text-align: left !important;
}
h1 {
  font-size: 36px;
  padding-bottom: 30px;
  color: #fff;
  margin-left: 15px;
}
.detailTitle{
  font-size: 14px;
  color: #afb3bb;
  overflow-wrap: normal;
  line-height: 36px;
}
.detailComm{
font-size: 16px;
  color: #fff;
  height: 100%;
  overflow-wrap: normal;
  line-height: 36px;
}
</style>