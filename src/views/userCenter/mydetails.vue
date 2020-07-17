<template>
  <div class="w">
    <h1>账号详情</h1>
      <cardDiv text=个人信息 :width="long" >
        <el-row>
          <el-col class="detailTitle" :span="5">姓名</el-col>
          <el-col class="detailComm" :span="14">这里是姓名</el-col>
        </el-row><el-row>
          <el-col class="detailTitle" :span="5">国家\地区</el-col>
          <el-col class="detailComm" :span="14">中国</el-col>
        </el-row>
      </cardDiv>
      <cardDiv text=电子邮箱 :width="long" >
        <el-row>
          <el-col class="detailTitle" :span="5">电子邮箱</el-col>
          <el-col class="detailComm" :span="14">这里电子邮箱</el-col>
        </el-row>
      </cardDiv>
      <cardDiv text=手机号码 :width="long" >
        <el-row>
          <el-col class="detailTitle" :span="5">手机号码</el-col>
          <el-col class="detailComm" :span="14">这里电话号码</el-col>
        </el-row>
      </cardDiv>
      <cardDiv text=战网昵称 :width="long" >
        <el-row>
          <el-col class="detailTitle" :span="5">战网昵称</el-col>
          <el-col class="detailComm" :span="14">这里战网昵称</el-col>
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