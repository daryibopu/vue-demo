<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
<!--    app里面用路由-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app' // app导出
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
    text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body, #app{
  width: 100%;
  height: 100%;
}
</style>
