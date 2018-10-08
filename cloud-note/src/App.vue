<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Layout from '@/views/Layout'
export default {
  name: 'App',
  // components:{
  //   Layout
  // }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
.w1170{
  width: 1170px;
  margin: 0 auto;
}
body{
  background: #f1f1f1;
}
.flr{
  float: right;
}
.fll{
  float: left;
}
.clearfix::after{
  content: '';
  display: block;
  clear: both;
}
</style>
