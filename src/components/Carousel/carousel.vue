<template>
    <div class="block">
        <el-carousel @change="Am" height="300px" :interval="5000" arrow="hover">
            <el-carousel-item v-for="item in Carousel" :key="item.id">
                <img ref="imgAms" class="img" :src="item.bgImgUrl"/>
                <div class="box">
                    <img class="icon" :src="item.icon"/>
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
    const SCALE = 1.05
    export default {
        name: 'carousel',
        props: {
            Carousel: {}
        },
        methods: {
            Am(key) {
                this.$refs.imgAms[key].style.transform = `scale(${SCALE})`
                this.$refs.imgAms[key].style.transition = 'all 1.5s'
                this.$refs.imgAms.forEach((node, index) => {
                    if (index !== key) {
                        node.style.transform = 'scale(1)'
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .block {
        text-align: center;
        position: relative;
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
        overflow: hidden;
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

    .el-button {
        position: relative;
        z-index: 10;
        bottom: 15px;
        width: 280px;
        height: 40px;
        font-size: 20px;
        line-height: 15px;
    }
</style>
