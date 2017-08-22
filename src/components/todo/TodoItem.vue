<template>
  <div>
    <div class="todo"><span>{{itemData.itemContext}}</span><span class="mini-font">· {{itemData.fromNow}}</span> <span class="mini-font">· {{itemData.type}}</span>
      <div class="pull-right" v-if="!itemData.done"><el-button size="mini" type="info" :plain="true" @click="handleDone">Done</el-button></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
      }
    },
    props: ['itemData'],
    methods: {
      handleDone () {
        var url = this.$server_host + '/todos/done/'
        axios.post(url, {
          data: this.itemData.id
        }).then((res) => {
          this.$store.commit('updateList', res.data)
        })
      }
    }
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
