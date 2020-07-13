<template>
	<div class="block">
		<el-carousel height="300px" :interval="5000" arrow="always">
			<el-carousel-item v-for="item in Carousel" :key="item.id">
				<img class="img" :src="item.bgImgUrl" />
				
				<div class="box">
						<img class="icon" :src="item.icon" />
					<div class="announcement">
						<p>{{ item.announcement }}</p>
						<el-button type="primary">立即购买</el-button>
					</div>
				</div>
	
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
	name: 'carousel',
	props: {
		Carousel: {
			default() {
				return {};
			}
		}
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
	display: flex;
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
		display: flex;
	z-index: 10;
	max-width: 320px;
	width: 300px;
	transition-duration: 0.2s;
	max-height: 150px;
	left: 225px;
}
h2 {
		display: flex;
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
.el-button {
	position: relative;
	z-index: 10;
	bottom: 15px;
	width: 280px;
	height: 40px;
	font-size: 20px;
}

.v-enter,
.v-leave-to {
	opacity: 0;
	transform: translateX(150px);
}

.v-enter-active,
.v-leave-active {
	transition: all 0.8s ease;
}
</style>
