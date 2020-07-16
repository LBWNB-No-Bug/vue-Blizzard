<template>
  <div class="longW"
       :style="width">
    <div class="title">
      <h3>{{this.text}}</h3>
    </div>
    <div class="cardBody">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: '',
    width: {}
  }
}
</script>

<style scoped>
.longW {
  float: left;
  padding: 0px 0px;
  margin: 10px 15px;
  background-color: rgba(9, 85, 135, 0.4);
  border-top: 1px solid rgba(9, 85, 135, 0.6);
}
h3 {
  font-size: 25px;
  color: #fff;
}
.title {
  padding: 30px 40px;
  margin-bottom: 0;
  text-transform: uppercase;
  background-color: rgba(9, 85, 135, 0.1);
}
.cardBody {
  padding: 40px;
}
</style>