<template>
	<div class="block">
		<el-carousel height="300px" :interval="5000" arrow="always">
			<el-carousel-item v-for="item in Carousel" :key="item.id">
				<img class="img" :src="item.bgImgUrl" />
				<div class="box">
					<img class="icon" :src="item.icon" />
					<div class="announcement">
						<p>{{ item.announcement }}</p>
						<el-button  type="primary">立即购买</el-button>
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
	name: 'carousel',
	data() {
		return {
			Carousel: [
				{
					GanmeName: '魔兽世界',
					bgImgUrl: '//product.cnc.blzstatic.cn//74/4b382158fcc7d9aeb92c30fde57e2812-WoW_Steamscale_Incinerator_Plus_Panda_Cub_Shop_Banners_1900x300_TS01.jpg',
					icon: '//product.cnc.blzstatic.cn//f87/f07df7142c9ec15de82837176b2bb7c9-battle-for-azeroth-cn-clipped.png',
					announcement: '在《魔兽世界》中驾驭坐骑,让宠物伴你漫游《魔兽世界》经典怀旧服，畅享180天游戏时间',
					Jump: '#'
				},
				{
					GanmeName: '魔兽世界',
					bgImgUrl: '//product.cnc.blzstatic.cn//29/50817669fbbc553777b407401a98faa5-WoW_Summer_Sale_Shop_Banners_TS011900x300_TS01.jpg',
					icon: '//product.cnc.blzstatic.cn//f87/f07df7142c9ec15de82837176b2bb7c9-battle-for-azeroth-cn-clipped.png',
					announcement: '截至7月20日，坐骑、宠物等精选商品立享五折优惠',
					Jump: '#'
				},
				{
					GanmeName: '炉石传说',
					bgImgUrl: '//product.cnc.blzstatic.cn//fc5/71654210aac15bb5eeb9048fb33b9020-1900x300.jpg',
					icon: '//product.cnc.blzstatic.cn//64/ac8cce7590f19a85b0dfc5c52c1eb12f-HS17_AoO_Logo_CN_wHS.png',
					announcement: '全新扩展包',
					Jump: '#'
				}
			]
		};
	}
};
</script>

<style scoped>
.block {
	text-align: center;
}
.el-carousel__item .announcement p {
	color: #a7b7c1;
	position: relative;
	font-size: 22px;
	margin-block-start: 1.67em;
	margin-block-end: 1.67em;
	margin-inline-start: 0;
	margin-inline-end: 0;
	z-index: 10;
}
.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
.el-carousel-item {
	position: relative;
}

.box {
	position: relative;
	top: 10px;
}
.img {
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 300px;
	left: 0;
	top: 0;
	overflow-y: hidden;
	overflow-x: hidden;
}
.icon {
	position: absolute;
	z-index: 10;
	max-width: 320px;
	width: 300px;
	max-height: 150px;
	left: 225px;
}
h2 {
	z-index: 10;
	left: 240px;
}
.announcement {
	position: absolute;
	left: 125px;
	top: 120px;
	width: 500px;
	white-space: normal;
	word-break: break-all;
	overflow: hidden;
}
.el-button{
	position:relative;
	z-index: 10;
	bottom: 15px;
	width: 280px;
	height: 40px;
	font-size: 20px;
}
</style>
