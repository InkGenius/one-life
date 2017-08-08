<template>
  <div>
    <div class="todo"><span>{{itemContext}}</span><span class="mini-font">· {{fromNow}}</span> <span class="mini-font">· {{type}}</span>
      <div class="pull-right" v-if="!done"><el-button size="mini" type="info" :plain="true">Done</el-button></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    props: ['itemContext', 'fromNow', 'type', 'done']
  }
</script>

<style>
  .todo {
    border-top: 1px solid transparent;
    text-align: left;
    padding: 10px 16px;
    border-bottom: 1px solid #eee;
    font-size:12px;
  }
  .todo:hover {
    background-color: #f7faff;
    border-color: #b2d7ff;
    cursor: pointer;
  }
  .pull-right {
    float: right;
  }
  .todo span {
    margin-left: 8px;
  }
  .mini-font {
    font-size: 8px;
  }
</style>
