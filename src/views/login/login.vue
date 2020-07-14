<template>
	<div class="login">
		<img class="logo" :src="logo" />
		<div class="from-login">
			<form>
				<div class="username"><input type="text" v-model="username" placeholder="电子邮箱或手机号码"/></div>
				<div class="pwd"><input type="password" v-model="pwd" placeholder="密码"/></div>
				<div class="sub" ><el-button @click="decide" class="btn" type="primary">登录</el-button></div>
			</form>
		</div>
		<div class="party"><span> 或使用以下账号登录</span></div>
		<div class="wyicon"><a href="https://reg.163.com/open/oauth2/authorize.do?client_id=2985644329&response_type=code&state=AQs0gJDJfE_TtmLuXmWRCQ3ktwITn-NR2nwyWgZ3zSgEclBp43_uYsJnZivrUQdZDTpOezDnYi71pvjx6Cn7fsoBD2Wmfhz-bsi1JmAc85OKhAnvbFmwcKM-UXW0oRO_sknuRtMIvbTNJDxn73jRAGKFWwVOLQcniv7SUOtiEyMIxVtXBibdjUJBuDUlHE55BEdDkdsMdyl1RIV7_IRaobBY1E64ZpNajvG61P8Al6oCoLd_jhv_Belv2DfDSfPSN0yh6Yc8tBosN2alJixhBiGYKC_ITmOURpCNOGVgJQ_DoTH0TB8YzFLLTbiRaQ2sJfInuILT0Ri5vo_PLPygAe9mUKp6bD36sYXE4XHRg3y-0UBbV9Zgdnmq_KKXALFwO5_fPh5fkh1cXIOHCGCgCylY6z-oIJyq-13w0EG8xTqGO31HQqpT5XkBcDFmR46jG_BcfIBX2nQmLRWSOaLKXtI1QpX700aqxd0rQ8b1qnjYii0TRz2NaGDj95cZjwYMQOQqWGsKvsu9B-rsZj9dDnFiSxRnQQU8buOTIqBf3w9I_PSV0l37nxwcoBqXzs6z2RfWdi26Tmjdlnd4HDc3gENZy5bkG6IOsNewta6LadGf60BQf7KU-H0Er_yaj2icwMo_EDLp60gaYgRZoAdGRy722dG2IvJ85wutjKd_AF-ghckZ0PUQXtQwCxqjsCjntQ%3D%3D&scheme&redirect_uri=https%3A%2F%2Fwww.battlenet.com.cn%2Flogin%2Fsignin%2Fnetease&scope"><img src="./wy.png"></img></a></div>
		<ul class="help-links">
			<li><a href="#">免费创建暴雪游戏通行证 </a></li>
			<li><a href="#">无法登录？</a></li>
			<li><a href="#">安全令重新同步 </a></li>
		</ul>
		<vfoot/>
	</div>
</template>

<script>
import vfoot from '@/components/footer/footer.vue'


export default {
	name: 'login',
	data(){
		return {
			logo:'https://www.battlenet.com.cn/login/static/images/toolkit/defaults/logos/blizzard/blizzard-default.1C4OH.png',
			username:'',
			pwd:''
			}
		},
		methods:{
			cs() {
				console.log(this.username)
				console.log(this.pwd)
			},
			decide(){
				if(this.username=='zh'&&this.pwd=='123456')
				{
					alert('登陆成功！');
				}
				else
				{
					alert('密码与用户名不匹配！');
				}
				
			}
		},
		components:{
			vfoot
		}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.login {
	background-image: url('https://www.battlenet.com.cn/login/static/images/login/background/login-background-1920.3f7pb.jpg');
	text-align: center;
}
.login .logo {
	margin-top: 55px;
	margin-bottom: 40px;
}
#footlogo{
	display:none;
}

.clearall {
	clear: both;
}
.username,.pwd{
	margin: 0 auto;
	width: 360px;
	height: 50px;
}
input{
	width: 360px;
	height: 40px;
	padding: 0 10px;
	font-size: 17px;
	line-height: 20px;
	height: 40px;
	border-color: rgba(255,255,255,0.5);
	background-color: rgba(0,0,0,0.5);
	color: rgba(255,255,255,0.7);
	border: 1px solid rgba(255,255,255,0.3);
}
.sub{
		margin: 0 auto;
		width: 360px;
}

.btn{
	width: 380px;
	height: 40px;
	font-size: 20px;
    color: #fff;
    border: 1px solid #10a1de;
    box-shadow: 0 0 rgba(0,0,0,0);
    border-radius: 0;
    transition: background-color .2s,box-shadow .2s,background-color .2s,border-color .2s,color .2s;
    box-shadow: 0 1px 1px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.15) inset;
}

.party{
		position: relative;
	    font-size: 13px;
	    color: rgba(255,255,255,.3);
	    text-transform: uppercase;
	    display: block;
	    overflow: hidden;
	    white-space: nowrap;
	    margin: 14px 0 20px;
}
.party span:before,.party span:after {
    content: "————————";
    height: 1px;
    background-color: #fff;
    background-color: rgba(255,255,255,.1);
    position: absolute;
    top: 50%;
}

.party span:before{
	left: 39%;
}
.party span:after{
	right: 38%;
}
.wyicon{
	margin-top: 20px;
	margin-bottom: 15px;
}

.help-links{
	list-style-type: none;
	margin: 10px 0;
}
.help-links li{
	line-height: 25px;
}
.help-links li a{
	font-size: 18px;
	color: #00aeff;
	transition: color .2s;
	text-decoration: none;
}

</style>
