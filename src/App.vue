<template>
  <div id="app">
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
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
