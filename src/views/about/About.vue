<template>
  <div class="about">
	  <vhead/>
	  <headtow/>
	  <div class="about_main">
		  <img class="icon" :src="icon">
		<div class="shop"><shopping/></div>
	 </div>
    <pro/>
	<vfoot/>
  </div>
</template>
<script>
	import vhead from '../../components/myHeader/myhead.vue'
	import headtow from '../../components/headTow/headTow.vue'
	import vfoot from '@/components/footer/footer.vue'
	import pro from './Product_info.vue'
	import shopping from './shopping.vue'
	export default{
		name:'About',
		components:{
			vhead,
			headtow,
			shopping,
			pro,
			vfoot
		},
		data(){
			return {
				icon:'//product.cnc.blzstatic.cn//17/af688583a0d4fe0775a20182a1f30779-HS18_SA_Logo_CN_wHS_1.png',
				bgimg:'//product.cnc.blzstatic.cn//faa/1397797ed56f90239996e6417b94d8c2-prod-full-bg-headerless.jpg'
			}
		}
	}
</script>
<style scoped>
.about{
	background-color: #002650;
}



.about_main{
	background-image:url('//product.cnc.blzstatic.cn//faa/1397797ed56f90239996e6417b94d8c2-prod-full-bg-headerless.jpg') ;
	transform: translate3d(0px, 0px, 0px);
	position: relative;
	box-shadow: inset 0 -30px 60px rgba(0,0,0,.3);
	width: 100%;
	height: 600px;
	display: block;
}
.about_main .shop{
	position: absolute;
	 right: 190px;
	  top: 290px;
}
.about_main .icon{
	position: absolute;
	height: 160px;
	width: 250px;
	top: 100px;
	right: 265px;
}
.el-tabs__nav{
	margin-left: 15px;
}
</style>
