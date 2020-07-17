<template>
    <div class="shopping">
        <div class="shopping-header">
            <div class="c-wrapper">
                <img src="//shopbnet.cnc.blzstatic.cn/static/4.26.6/images/family-icons/hearthstone.svg" width="60" height="60">
                <div class="text-wrapper">
                    <h1>《炉石传说®》</h1>
                    <p>策略类卡牌游戏</p>
                </div>
            </div>
        </div>
        <div class="shopping-main">
            <el-button>免费游戏</el-button>
            <div class="shopping-p">
                <game-icon :size=4 :type=2></game-icon>
                <h1>添加至心愿单</h1>
            </div>
        </div>
    </div>
</template>

<script>
    import GameIcon from "@/components/GameIcon/GameIcon"

    export default {
        name:'shopping',
        components: {
            GameIcon
        }
    }
</script>

<style>
    .shopping {
        border-top: 1px solid #585757;
        width: 500px;
        height: 293px;
        background: linear-gradient(to bottom,#272e3b,#1c2534);
        position: relative;
        left: 50px;
        top: 50px;
    }
    .shopping-header {
        border-bottom: 1px solid rgba(0,0,0,.3);
        width: 500px;
        height: 101px;
    }
    .c-wrapper {
        position: absolute;
        left: 30px;
        top: 18px;
    }
    .text-wrapper {
        display: inline-block;
        color: white;
        margin-left: 10px;
    }
    .text-wrapper h1 {
        font-family: inherit;
        font-size: 24px;
        height: 10px;
        font-weight: 500;
    }
    .text-wrapper p {
        color: rgba(255, 255, 255, 0.8);
        margin-left: 5px;
        margin-top: 5px;
        font-family: "Open Sans",Helvetica,Arial,sans-serif;
        font-size: 14px;
    }
    .shopping-main .el-button {
        width: 456px;
        height: 61px;
        display: block;
        border-radius: 0;
        margin: 35px auto;
        background-color: #0e86ca;
        border-color: #10a1de;
        font-size: 1.25rem;
        color: white;
    }
    .shopping-main .el-button:hover {
        background-color: #119ef3;
    }
    .shopping-p{
        text-align: center;
    }
    .shopping-p h1 {
        display: inline-block;
        color: #00aeff;
        font-size: 1.125rem;
        transition: all 0.3s;
        cursor:pointer;
        font-weight: 500;
    }
    .shopping-p h1:hover {
        color: white;
    }
</style>
