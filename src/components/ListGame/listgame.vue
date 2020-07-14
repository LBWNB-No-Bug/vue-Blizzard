<template>
    <div class="ListGame">
        <div class="list-wrapper">
            <h1 class="bt">{{this.bt}}</h1>
            <div class="game_wrapper" >
                <ul>
                    <li class="game"
                        v-for="(item,index) in data"
                        :key="index"
                        :style="{backgroundImage: 'url(' + item.bgImgUrl + ')'}"
                    >
                        <div class="conten-wrapper">
                            <game-icon class="game-icon"
                                :size=2
                                :type=item.iconType></game-icon>
                            <p class="text">{{item.text}}</p>
                            <p class="text-Golden">{{item.Golden}}</p>
                            <p class="text-white">{{item.white}}</p>
                            <p class="price">{{item.price === 0?"免费":"￥"+item.price}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import GameIcon from '@/components/GameIcon/GameIcon'
    export default {
        name: 'list-game',
        props: {
            data: {},
            bt: ""
        },
        components: {
            GameIcon
        }
    }
</script>

<style>
    .ListGame {
        width: 1600px;
        margin: 40px auto;
    }
    .bt {
         color: white;
         font-weight: 300;
         padding-left: 13px;
     }
    .list-wrapper {
        width: 100%;
        margin: 30px auto;
    }
    .game_wrapper ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .game {
        height: 414px;
        width: 288px;
        margin-top: 15px;
        overflow: hidden;
        position: relative;
        z-index: 10;
        background-repeat: no-repeat;
        background-size: 320px 414px;
        transition: all 0.3s;
        cursor:pointer;
        position: relative;
    }
    .game:hover {
        transform:scale(1.05);
    }
    .conten-wrapper {
        top: 210px;
        position: absolute;
        text-align: left;
        padding: 20px;
    }
    .conten-wrapper .text{
        font-weight: 700;
        font-size: 18px;
        color: white;
        margin-bottom: 6px;
    }
    .conten-wrapper .text-Golden {
        color: #fecc00;
        font-size: 14px;
        margin-bottom: 6px;
    }
    .conten-wrapper .text-white {
        color: #bfbfbf;
        font-size: 14px;
        margin-bottom: 6px;
    }
    .conten-wrapper .price {
        font-size: 16px;
        color: white;
        position: absolute;
        top: 165px;
    }
</style>
