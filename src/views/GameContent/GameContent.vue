<template>
    <div class="game-content">
        <myheader/>
        <headTow/>
        <div class="carousel-mf">
            <img class="car-ico" :src="this.ico" width="230" height="150">
            <img class="car-bg" :src="this.bg">
        </div>
        <div class="main-wrapper">
            <div class="nav-wrapper">
                <div class="nav">
                    <div class="nav-left">
                        <ul>
                            <li class="nav-list"
                                v-for="(item, index) in titleList"
                                :key="index"
                            >
                                <a :href="'#'+index">{{item}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="nav-right">
                        <div class="sel-list">
                            <label for="sel1">分组方式</label>
                            <select id="sel1">
                                <option>按类别分组</option>
                                <option>不分组</option>
                            </select>
                            <i class="el-icon-d-caret"></i>
                        </div>
                        <div class="sel-list">
                            <label for="sel2">分组方式</label>
                            <select id="sel2">
                                <option>精选</option>
                                <option>价格：最低</option>
                                <option>价格：最高</option>
                                <option>折扣</option>
                                <option>名称</option>
                            </select>
                            <i class="el-icon-d-caret"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-content">
                <div class="content" v-for="(item, index) in content" :key="index" :id='index'>
                    <div class="title-wrapper">
                        <h1 class="bt">{{item.title}}</h1>
                        <p class="text">{{item.text}}</p>
                    </div>
                    <div class="game-list">
                        <unity class="game" v-for="(val, ind) in item.content" :key="ind" :item="val"></unity>
                    </div>
                </div>
            </div>
        </div>
        <el-backtop class="top">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
        <VFooter/>
    </div>
</template>

<script>
    import myheader from '@/components/myHeader/myhead'
    import VFooter from '@/components/footer/footer'
    import headTow from '@/components/headTow/headTow'
    import Unity from '@/components/unity/unity'

    import { getGameContent } from '@/api'

    export default {
        name: 'GameContent',
        data() {
            return {
                content: [],
                titleList: [],
                bg: "",
                ico: ""
            }
        },
        created() {
            this._getGameContent()
        },
        methods: {
            _getGameContent() {
                const name = this.$route.query.name
                // console.log(name)
                getGameContent().then( (res) => {
                    res.data.forEach((val) => {
                        if(val.name === name)
                        {
                            this.bg = val.bg
                            this.ico = val.ico
                            val.content.forEach((item) => {
                                this.content.push(item)
                            })
                        }
                    })
                    this.content.forEach((tit) => {
                        this.titleList.push(tit.title)
                    })
                })
            }
        },
        components: {
            myheader,
            VFooter,
            headTow,
            Unity
        }
    }
</script>

<style>
    .carousel-mf {
        width: 100%;
        height: 300px;
        overflow: hidden;
        position: relative;
    }
    .car-ico {
        position: absolute;
        left: 200px;
        top: 60px;
    }
    .game-content{
        background-color: #062959;
        font-family: "Open Sans",Helvetica,Arial,sans-serif;
        color: white;
    }
    .main-wrapper {
        min-height: 1000px;
    }
    .nav-wrapper {
        width: 100%;
        height: 52px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .nav {
        width: 1600px;
        padding: 0 40px;
        height: 52px;
        background-image: url("bg.png");
        margin: 0 auto;
    }
    .nav a {
        list-style: none;
        color: white;
        text-decoration: none;
        transition: all 1s;
    }
    .nav-left, .nav-right {
        display: inline-block;
    }
    .nav-left {
        width: 1114px;
    }
    .nav-left .nav-list {
        display: inline-block;
        line-height: 52px;
        opacity: .6;
        margin: 0 10px;
        font-size: 16px;
        transition: all 0.3s;
        cursor:pointer;
    }
    .nav-list:hover {
        opacity: 1;
    }
    .main-content {
        width: 1600px;
        padding: 0 40px;
        margin: 0 auto;
    }
    .content {
        margin-top: 30px;
        min-height: 414px;
        padding-bottom: 40px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .content:last-child {
        border-bottom: none;
    }
    .sel-list {
        display: inline-block;
        margin-left: 15px;
        position: relative;
    }
    .sel-list .el-icon-d-caret {
        position: absolute;
        left: 174px;
        top: 12px;
        font-size: 14px;
        color: #00aeff;
    }
    select::-ms-expand { display: none; }
    .sel-list #sel1,#sel2 {
        margin-left: 10px;
        background-color: rgba(0, 8, 26, 0.6);
        border: none;
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        width: 122px;
        height: 38px;
        padding: 6px 28px 6px 12px;
        font-family: inherit;
        font-size: inherit;
        color: #fff;
    }
    #sel1 option, #sel2 option {
        text-align: center;
    }
    .title-wrapper {
        width: 304px;
        height: 434px;
        float: left;
    }
    .title-wrapper .bt {
        font-size: 25px;
        margin-bottom: 16px;
    }
    .title-wrapper .text {
        font-size: 16px;
        margin-bottom: 16px;
        color: rgba(255, 255, 255, 0.8);
    }

    .game-list {
        width: 1256px;
        display: inline-block;
        margin-left: 20px;
    }
    .game-list > .game {
        float: left;
        margin-left: 25px;
    }
    .game:hover {
        transform: scale(1.1);
    }
    .top {
        width: 48px;
        height: 48px;
        background-color: rgba(0,0,0,.5);
        border-radius: 0;
    }
    .top:hover {
        background-color: rgba(0,0,0,.5);
    }
    .top:hover .el-icon-caret-top {
        color: #5cb9ec;
    }
    .top .el-icon-caret-top {
        font-size: 32px;
        position: absolute;
        left: 7px;
        top: 7px;
        color: #009ae4;
    }
</style>
