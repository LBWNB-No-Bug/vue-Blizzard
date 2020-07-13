<template>
  <header>
    <div class="w">
      <div class="left">
        <i class="logo_icon"></i>
        <div class="nav_lable">商城</div>
      </div>
      <div class="right">
        <div class="nav_lable">支持</div>
        <div class="nav_lable">我的账号</div>
        <div class="nav_win">
          <div>
            <br>
            <el-button class="center"
                       type="primary">登陆</el-button>
            <br>
            <el-button class="center"
                       type="primary">账号注册</el-button>
                       <br>
            <el-button class="center"
                       type="primary">免费注册</el-button>
          </div>
          <br>
        </div>
      </div>
    </div>

  </header>

</template>
<style >
* {
  margin: 0;
  padding: 0;
}
header {
  background-color: #062959;
  width: 100%;
}
.w {
  display: block;
  width: 1400px;
  margin: auto;
}
.logo_icon {
  display: inline-block;
  background: url(../../../static/img/logo.png) no-repeat;
  background-size: 100% 100%;
  width: 100px;
  height: 50px;
  margin-right: 20px;
}
.nav_lable {
  display: inline-block;
  font-size: 20px;
  margin-top: 15px;
  padding-right: 20px;
  vertical-align: top;
  color: rgba(180, 190, 203, 1);
}
.nav_lable:hover {
  color: #ffffff;
}
.left {
  display: inline-block;
}
.right {
  height: 50px;
  float: right;
  top: 8px;
  right: 20px;
}
.nav_win {
  position: relative;
  z-index: 1;
  right: 100px;
  top: 10px;
  width: 330px;
  background-color: #66ccff;
}
.nav_win .center {
  display: grid;
  vertical-align: auto;
  width: 300px;
  margin: auto;
}
</style>
