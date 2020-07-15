<template>
    <div class="ListGame">
        <div class="list-wrapper">
            <h1 class="bt">{{this.bt}}</h1>
            <div class="game_wrapper">
                <unity v-for="(item,index) in data" :key="index" :item="item"></unity>
            </div>
        </div>
    </div>
</template>

<script>
    import Unity from '@/components/unity/unity'

    export default {
        name: 'list-game',
        props: {
            data: {},
            bt: ""
        },
        components: {
            Unity
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
    }

    .list-wrapper {
        width: 100%;
        margin: 30px auto;
    }

    .game_wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
