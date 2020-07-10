<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {getHome} from "./api";

  export default {
    name: 'app',
    data() {
      return {
        Carousel: [],
        ListIcon: [],
        ListGame: []
      }
    },
    created() {
      getHome().then( (res) => {
        this.Carousel = res.data.Carousel
        this.ListIcon = res.data.ListIcon
        this.ListGame = res.data.ListGame
      })
    }
  }
</script>

<style>
</style>
