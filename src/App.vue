<template>
  <div id="app">
    <myHead></myHead>
    <router-view></router-view>
  </div>
</template>

<script>
import myHead from './components/Header'
export default {
  name: 'app',
  components: {
    myHead
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>