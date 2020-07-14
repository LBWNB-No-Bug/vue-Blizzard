<template>
    <span class="ico-Game" :class="[iconCls,sizeCls]"></span>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'game-icon',
        props: {
            size: {
                type: Number,
                default() {
                    return 0
                }
            },
            type: {
                type: Number,
                default() {
                    return 1;
                }
            }
        },
        computed: {
            iconCls() {
                return `ico-ia_2000000${this.size}${this.type}`
            },
            sizeCls() {
                if (this.size === 0 || this.size === 3) {
                    return 'ico-size-20'
                } else if (this.size === 1 || this.size === 2) {
                    return 'ico-size-40'
                } else if (this.size === 4) {
                    return 'ico-size-16'
                }
            }
        }
    }
</script>

<style>
    .ico-Game {
        display: inline-block;
        background: no-repeat;
    }

    .ico-size-20 {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
    }

    .ico-size-16 {
        width: 16px;
        height: 16px;
        background-size: 16px 16px;
    }

    .ico-size-40 {
        width: 40px;
        height: 40px;
        background-size: 40px 40px;
    }

    .ico-ia_200000000 {background-image: url("ia_200000000.png");}

    .ico-ia_200000001 {background-image: url("ia_200000001.png");}

    .ico-ia_200000002 {background-image: url("ia_200000002.png");}

    .ico-ia_200000003 {background-image: url("ia_200000003.png");}

    .ico-ia_200000004 {background-image: url("ia_200000004.png");}

    .ico-ia_200000005 {background-image: url("ia_200000005.png");}

    .ico-ia_200000006 {background-image: url("ia_200000006.png");}

    .ico-ia_200000007 {background-image: url("ia_200000007.png");}

    .ico-ia_200000008 {background-image: url("ia_200000008.png");}

    .ico-ia_200000010 {background-image: url("ia_200000010.png");}

    .ico-ia_200000011 {background-image: url("ia_200000011.png");}

    .ico-ia_200000012 {background-image: url("ia_200000012.png");}

    .ico-ia_200000013 {background-image: url("ia_200000013.png");}

    .ico-ia_200000014 {background-image: url("ia_200000014.png");}

    .ico-ia_200000015 {background-image: url("ia_200000015.png");}

    .ico-ia_200000016 {background-image: url("ia_200000016.png");}

    .ico-ia_200000017 {background-image: url("ia_200000017.png");}

    .ico-ia_200000018 {background-image: url("ia_200000018.png");}

    .ico-ia_200000020 {background-image: url("ia_200000020.svg");}

    .ico-ia_200000021 {background-image: url("ia_200000021.svg");}

    .ico-ia_200000022 {background-image: url("ia_200000022.svg");}

    .ico-ia_200000023 {background-image: url("ia_200000023.svg");}

    .ico-ia_200000024 {background-image: url("ia_200000024.svg");}

    .ico-ia_200000025 {background-image: url("ia_200000025.svg");}

    .ico-ia_200000027 {background-image: url("ia_200000027.svg");}

    .ico-ia_200000028 {background-image: url("ia_200000028.svg");}

    .ico-ia_200000030 {background-image: url("ia_200000030.svg");}

    .ico-ia_200000040 {background-image: url("ia_200000040.svg");}

    .ico-ia_200000041 {background-image: url("ia_200000041.svg");}

    .ico-ia_200000042 {background-image: url("ia_200000042.svg");}

    .ico-ia_200000043 {background-image: url("ia_200000043.svg");}

    .ico-ia_200000044 {background-image: url("ia_200000044.svg");}

    .ico-ia_200000045 {background-image: url("ia_200000045.svg");}

    .ico-ia_200000046 {background-image: url("ia_200000046.svg");}

    .ico-ia_200000047 {background-image: url("ia_200000047.svg");}

    .ico-ia_200000048 {background-image: url("ia_200000048.svg");}

    .ico-ia_200000049 {background-image: url("ia_200000049.svg");}
</style>
