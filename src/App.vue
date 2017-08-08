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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>