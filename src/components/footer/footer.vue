<template>
	<div id="footer">
		<img id="footlogo" :src="logo" height="100" width="170"/>
		<div class="footnav mtbt20">
			<ul>
				<li><a href="#">工作机会</a></li>
				<li>|</li>
				<li><a href="#">关于</a></li>
				<li>|</li>
				<li><a href="#">支持</a></li>
				<li>|</li>
				<li><a href="#">媒体中心</a></li>
				<li>|</li>
				<li><a href="#">API</a></li>
				<li>|</li>
				<li><a href="#">安全中心</a></li>
			</ul>
		</div>
		<div class="clearall"></div>
		<div class="copyright">
			<p>@2020暴风雪娱乐有限公司版权所有。</p>
			<p>
				在此提及的其他所有
				<a href="#">商标</a>
				均是其各自所有人的财产。
			</p>
			<p>由上海网之易网络科技发展有限公司运营。</p>
		</div>
		<div class="mtbt10">
			<ul>
				<li><p><a href="#">隐私</a></p></li>
				<li><p>|</p></li>
				<li><p><a href="#">法律</a></p></li>
				<li><p>|</p></li>
				<li><p><a href="#">条款</a></p></li>
			</ul>
		</div>
		<div class="clearall"></div>
		<div class="addrsnum">
			<ul class="work">
				<li><a href="#">沪网文〔2017〕9633-727号</a></li>
				<li>|</li>
				<li><a href="#">增值电信业务经营许可证编号：沪B2－20080012</a></li>
				<li>|</li>
				<li><a href="#">沪ICP备: 沪B2－20080012</a></li>
			</ul>
		</div>
		<div class="clearall"></div>
		<div class="report">
			<ul>
				<li><p>互联网违法和不良信息举报电话：0571-28090163</p></li>
				<li><p>沪公网安备：31011502002167</p></li>
				<li><p>网上有害信息专区</p></li>
			</ul>
		</div>
		<div class="addr">
			<ul>
				<li><a href="#">适龄提示：适合13岁及以上使用 家长监护工程></a></li>
				<li>|</li>
				<li><a href="#">上海市网络游戏行业自律公约</a></li>
			</ul>
		</div>
		<div class="addr">
			<ul>
				<li><p>上海市张江高科技园区碧波路690号5号楼301-A</p></li>
				<li>|</li>
				<li><p>客服电话：0571-28090163</p></li>
			</ul>
		</div>
		<div class="footicon mtbt10" >
			<a href="#" v-for="(isrc,key) in imgsrc" :key="key"><img :src="isrc" /></a>
		</div>
		<div class="add">
				<p>健康游戏忠告：抵制不良游戏  拒绝盗版游戏  注意自我保护  谨防受骗上当</p>
				<p>适度游戏益脑  沉迷游戏伤身  合理安排时间  享受健康生活</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "v-footer",
		data(){
			return {
				imgsrc:['https://blznav.akamaized.net/img/legal/icon-cn-cyberpolice-8030c963aa438de3.gif',
				'https://blznav.akamaized.net/img/legal/icon-cn-zx100-1b6b7d14bf4a236f.gif',
				'https://blznav.akamaized.net/img/legal/icon-cn-sgs-668b0f6a4fb9c4bd.gif',
				'https://blznav.akamaized.net/img/legal/icon-cn-shjbzx-ddcf1546d4122b14.gif',
				'https://blznav.akamaized.net/img/legal/icon-cn-culture-logo-1eefdfed9b7decc1.png'],
				logo:'https://www.battlenet.com.cn/login/static/images/toolkit/defaults/logos/blizzard/blizzard-default.1C4OH.png'
			}
		}
	}
</script>

<style scoped>
.clearall {
	clear: both;
}
#footer{
	/*background-color: #062959;*/
	text-align: center;
	margin-top: 100px;
}
p,
a {
	font-family: Blizzard, Arial, Helvetica, 'Segoe UI Symbol', 'Segoe MDL2 Assets', '微软雅黑', 'Microsoft YaHei', 'Hei SC', sans-serif;
	transition: color 0.2s, background-color 0.2s, border-color 0.2s;
	text-transform: uppercase;
}
p {
	margin-block-start: 0;
	margin-block-end: 0;
	font-size: 13px;
	color: rgba(255,255,255,0.3) ;
}
a {
	color: rgba(255,255,255,0.7) ;
	text-decoration: none;
	font-size: 14px;
}
.f-17 {

}

.foot {
	width: 100%;
	margin: 0 auto;
	text-align: center;
	font-weight: 400;
	line-height: 1.4;
	color: #fff;
}
.el-breadcrumb {
	margin: 0 auto;
	width: 700px;
}

#footer ul {
	margin: 0 auto;
	text-align: center;
}
#footer ul li {
	margin-left: 10px;
	display: inline-block;
	list-style-type: none;
}
#footer .footnav ul li a{
	font-size: 17px;
	transition: color 0.2s, background-color 0.2s, border-color 0.2s;
	text-transform: uppercase;
}
#footer ul li a:hover {
	color: #ffffff;
}
.copyright {
	color: rgb(79, 104, 134);
}
.mtbt5 {
	margin-top: 5px;
	margin-bottom: 5px;
}
.mtbt10 {
	margin-top: 10px;
	margin-bottom: 10px;
}
.mtbt20 {
	margin-top: 20px;
	margin-bottom: 20px;
}
.footicon a img{
	width: 26px;
	height: 26px;
	margin: 0 5px;
	vertical-align: top;
}
.add{
	padding-bottom: 30px;
}
</style>
