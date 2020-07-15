<template>
	<div class="reg">
		<img class="logo" :src="logo" />
		<div class="title">
			<h1>创建账号</h1>
			<button class="wy">网易</button>
			<div class="party"><span>或</span></div>
			<div class="tip"><p>创建暴雪游戏通行证，开启您的冒险旅程。</p></div>
		</div>
		<div class="clearall"></div>
		<form class="from-reg">
			<input type="text" @click="checkedid(checkid)" v-model="userid" placeholder="身份证号码" />
			<br />
			<div class="cout" v-show="checkid">
				<div class="arrow"></div>
				<div class="cbox"><p>请仔细核对并填写您真实有效的个人身证号码。</p></div>
			</div>
			<input type="text" v-model="username" placeholder="姓名" />
			<br />
			<input type="email" v-model="useremail" placeholder="电子邮箱" />
			<br />
			<input type="password" @click="checkedpwd(checkpwd)" v-model="userpwd" placeholder="密码" />
			<div class="cout" v-show="checkpwd">
				<div class="arrow"></div>
				<ul style="height: 170px;">
					<li>
						<i class="el-icon-info"></i>
						使用8-16个字符。
					</li>
					<li>
						<i class="el-icon-info"></i>
						使用至少一个数字字符以及一个字母字符。
					</li>
					<li class="neutral">
						<i class="el-icon-info"></i>
						请勿使用任何特殊字符。
					</li>
					<li>
						<i class="el-icon-info"></i>
						请勿使用与您账号名称相似的密码。
					</li>
				</ul>
			</div>
			<div class="phone_num">
				<input class="phone1" type="text" disabled placeholder="+86" />
				<input class="phone2" @click="checkednum(chenum)" type="text" v-model="phone_num" placeholder="手机号码" />
				<div class="cout" v-show="chenum">
					<div class="arrow"></div>

					<div class="cbox">
						<p>
							您可以通过该手机号码进行修改密码、解除密保等操作
							<a :href="hrlink" target="_blank">了解详情<i class="el-icon-link"></i></a>
						</p>
					</div>
				</div>
			</div>
			<div class="capt">
				<input class="cap1" type="text" v-model="captcha" placeholder="验证码" />
				<input class="cap2" type="button" value="获取验证码" />
			</div>
			<div class="hread">
				<div class="tip">
					<el-checkbox>我已阅读并接受</el-checkbox>
					<a :href="hrlink">
						隐私政策
						<i class="el-icon-link"></i>
						。
					</a>
				</div>
			</div>
			<div class="clearall"></div>
			<div class="from-btn">
				<input type="button" class="btn1" value="免费注册暴雪游戏通行证" />
				<input type="button" class="btn2" value="已经有通行证了?" />
			</div>
			<div class="fine-print">
				<p>
					点击“免费注册暴雪游戏通行证”即表示我同意并接受
					<a target="_blank" :href="hrlink">
						暴雪战网最终用户许可协议
						<i class="el-icon-link"></i>
					</a>
					。
				</p>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'register',
	data() {
		return {
			logo: 'https://www.battlenet.com.cn/login/static/images/toolkit/defaults/logos/blizzard/blizzard-default.1C4OH.png',
			hrlink: '#',
			userid: '',
			username: '',
			useremail: '',
			userpwd: '',
			phone_num: '',
			captcha: '',
			checkid: false,
			checkpwd: false,
			chenum: false
		};
	},
	methods: {
		checkedid: function(che) {
			return (this.checkid = !che);
		},
		checkedpwd: function(che) {
			return (this.checkpwd = !che);
		},
		checkednum: function(che) {
			return (this.chenum = !che);
		}
	}
};
</script>

<style scoped>
.reg {
	background-image: url('https://www.battlenet.com.cn/login/static/images/login/background/login-background-1920.3f7pb.jpg');
	background-attachment: fixed;
	text-align: center;
}
.reg .logo {
	margin-top: 55px;
	margin-bottom: 40px;
}
.reg h1 {
	font-weight: 300;
	font-size: 35px;
	line-height: 40px;
	color: #fff;
	margin-bottom: 28px;
}
a {
	text-decoration: none;
}
.title,
.hread {
	max-width: 500px;
	margin: 20px auto;
}
.clearall {
	clear: both;
}
.wy {
	color: #ffffff;
	width: 450px;
	height: 30px;
	background-color: rgb(193, 41, 46);
	border: 1px solid #f22a2f;
	white-space: nowrap;
	font-size: 15px;
	line-height: 20px;
}

.party {
	position: relative;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.3);
	text-transform: uppercase;
	display: block;
	overflow: hidden;
	white-space: nowrap;
	margin: 20px 0 20px;
}
.party span:before,
.party span:after {
	content: '————————————————';
	height: 1px;
	background-color: #fff;
	background-color: rgba(255, 255, 255, 0.1);
	position: absolute;
	top: 50%;
}
.party span:before {
	left: 0%;
}
.party span:after {
	right: 0%;
}

.tip {
	color: rgba(255, 255, 255, 0.8);
	float: left;
	margin-left: 10px;
	font-size: 17px;
	line-height: 25px;
	margin-bottom: 10px;
}
.from-reg input {
	width: 500px;
	display: inline-block;
	vertical-align: middle;
	height: 34px;
	padding: 0 10px;
	margin-top: 20px;
	margin-bottom: 3px;
	font-size: 15px;
	line-height: 20px;
	border: 1px solid rgba(255, 255, 255, 0.3);
	background-color: rgba(0, 0, 0, 0.5);
	color: rgba(255, 255, 255, 0.7);
	box-sizing: border-box;
	border-radius: 2px;
}
.phone_num .phone1 {
	width: 70px;
}
.phone_num .phone2 {
	width: 430px;
}
.capt .cap1 {
	width: 370px;
}
.capt .cap2 {
	width: 125px;
	margin-left: 5px;
	border: 1px solid #0d639f;
}
.cap2:hover,
.from-btn .btn2 {
	background-color: rgba(0, 0, 0, 0.4);
	color: #91e4ff;
	border-color: #0e86ca;
	box-shadow: 0 0 rgba(0, 0, 0, 0);
}
.hread .tip a,.cbox a {
	color: rgb(0, 174, 255);
}
.el-checkbox__label {
	font-size: 17px;
}
.from-btn .btn1,
.from-btn .btn2 {
	margin: 20px auto;
	display: block;
	font-size: 17px;
}
.from-btn .btn1 {
	background-color: rgb(14, 134, 202);
	color: rgba(255, 255, 255, 0.7);
	border: 1px solid rgb(16, 161, 222);
	box-sizing: border-box;
	border-radius: 2px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15) inset;
}
.fine-print {
	color: rgba(255, 255, 255, 0.8);
	font-size: 17px;
	line-height: 25px;
	max-width: 500px;
	margin: 0 auto;
	min-height: 80px;
}
.fine-print a {
	color: rgb(0, 174, 255);
}

.cout {
	z-index: 100;
	width: 500px;
	height: auto;
	padding: 1px;
	margin: 10px auto;
	background-color: #272e3b;
	border: 1px solid #3d434f;
	background-clip: padding-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.75);
	color: rgba(255, 255, 255, 0.6);
}
.cout ul li {
	list-style-type: none;
	text-align: left;
	margin-left: 20px;
	padding: 10px;
}

.arrow {
	position: relative;
	display: block;
	height: 2px;
	width: 2px;
	border-width: 8px;
	z-index: 0;
	left: 50%;
	top: -20px;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0);
	margin-left: -8px;
	border-bottom-color: #3d434f;
}

.arrow:after {
	top: 1px;
	margin-left: -7px;
	border-bottom-color: #272e3b;
}
.cbox {
	width: 496px;
	height: 40px;
	text-align: left;
	margin-left: 20px;
}
.cbox p {
	margin: 0 0 30px 0;
	line-height: 25px;
}
</style>
