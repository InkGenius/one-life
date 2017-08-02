<template>
  <el-menu theme="light" :router="true" :default-active="defaultActiveIndex" class="top-container" mode="horizontal" >
    <div class="nva-title">One-Life</div>
    <el-menu-item v-for="(item, index) in items" :key="index" :index="'/'+item.ad" >{{item.name}}</el-menu-item>
     <div class="nva-right">
      <el-tooltip class="item" content="Todos" placement="bottom-start">
        <el-button type="text" icon="circle-check" size="large"></el-button>
      </el-tooltip>
      <el-dropdown class="header-user-drop">
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>DaiSong</el-dropdown-item>
          <el-dropdown-item>Profile</el-dropdown-item>
          <el-dropdown-item>Seetings</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown> 
      <img width="26" height="26" src="../assets/user.png" class="header-user-avatar">
    </div> 
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        defaultActiveIndex: '/dashboard',
        items: [{name: 'Dashboard', ad: 'dashboard'},
        {name: 'Experience', ad: 'experience'},
        {name: 'Group', ad: 'group'},
        {name: 'Activity', ad: 'activity'}
        ]
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
  .nva-right{
    float:right;
    height: 50px;
    line-height: 50px;
    position: relative;
    font-size: 18px;
    margin:0px 10px;
  }
  .header-user-avatar {
     float: right;  
    margin-top: 10px;
    margin-left: 10px; 
    margin-right: 5px; 
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.1); 
  }
  .header-user-drop{
    float: right; 
  }

</style>
