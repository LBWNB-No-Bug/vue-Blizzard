<template>
    <span class="ico-Game" :class="iconCls"></span>
</template>

<script type="text/ecmascript-6">
    export default {
        name:'game-icon',
        props: {
            size: {
                type: Number
            },
            type: {
                type: Number
            }
        },
        computed: {
            iconCls () {
                return `ico-ia_2000000${ this.size }${ this.type }`
            }
        }
    }
</script>

<style>
    .ico-Game {
        display: inline-block;
        background: no-repeat;
    }
    .ico-ia_200000000 {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-image: url(ia_200000000.png);
    }
    .ico-ia_200000001 {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-image: url("ia_200000001.png");
    }
    .ico-ia_200000002 {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-image: url("ia_200000002.png");
    }
    .ico-ia_200000003 {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-image: url("ia_200000003.png");
    }
    .ico-ia_200000004 {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-image: url("ia_200000004.png");
    }
    .ico-ia_200000005 {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-image: url("ia_200000005.png");
    }
    .ico-ia_200000006 {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-image: url("ia_200000006.png");
    }
    .ico-ia_200000007 {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-image: url("ia_200000007.png");
    }
    .ico-ia_200000008 {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-image: url("ia_200000008.png");
    }
    .ico-ia_200000010 {
        width: 40px;
        height: 40px;
        background-size: 40px 40px;
        background-image: url("ia_200000010.png");
    }
    .ico-ia_200000011 {
        width: 40px;
        height: 40px;
        background-size: 40px 40px;
        background-image: url("ia_200000011.png");
    }
    .ico-ia_200000012 {
        width: 40px;
        height: 40px;
        background-size: 40px 40px;
        background-image: url("ia_200000012.png");
    }
    .ico-ia_200000013 {
        width: 40px;
        height: 40px;
        background-size: 40px 40px;
        background-image: url("ia_200000013.png");
    }
    .ico-ia_200000014 {
        width: 40px;
        height: 40px;
        background-size: 40px 40px;
        background-image: url("ia_200000014.png");
    }
    .ico-ia_200000015 {
        width: 40px;
        height: 40px;
        background-size: 40px 40px;
        background-image: url("ia_200000015.png");
    }
    .ico-ia_200000016 {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-image: url("ia_200000016.png");
    }
    .ico-ia_200000017 {
        width: 40px;
        height: 40px;
        background-size: 40px 40px;
        background-image: url("ia_200000017.png");
    }
    .ico-ia_200000018 {
        width: 40px;
        height: 40px;
        background-size: 40px 40px;
        background-image: url("ia_200000018.png");
    }
</style>
