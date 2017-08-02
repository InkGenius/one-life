<template>
  <el-menu theme="light" :router="true" :default-active="defaultActiveIndex" class="top-container" mode="horizontal" >
    <div class="nva-title">dFight</div>
    <el-menu-item v-for="(item, index) in items" :key="index" :index="'/'+item.ad" >{{item.name}}</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        defaultActiveIndex: '/dashboard',
        items: [{name: 'dashboard', ad: 'dashboard'},
        {name: 'friends', ad: 'friends'},
        {name: 'goal', ad: 'goal'}]
      }
    }
  }
</script>

<style>
  /* * {
    margin: 0;
    padding: 0;
  } */
  .top-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    background-color: #fff;
    z-index: 100;
    font-family: "Microsoft Yahei", sans-serif;
  }
  .el-menu--horizontal .el-menu-item {
    float: left;
    height: 50px;
    line-height: 50px;
    margin: 0;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    border-bottom: 5px solid transparent;
  }
  .nva-title{
    float:left;
    height: 50px;
    line-height: 50px;
    position: relative;
    font-size: 20px;
    margin:0px 10px;
  }
</style>
