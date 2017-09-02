<template>
  <div>
    <div class="todo"><span>{{itemData.context}}</span><span class="mini-font">· {{itemData.createdAt}}</span> <span class="mini-font">· {{todoType}}</span>
      <div class="pull-right" v-if="!itemData.status"><el-button size="mini" type="info" :plain="true" @click="handleDone">Done</el-button></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  moment.locale('zh-cn')
  export default {
    data () {
      return {
        todoType: {}
      }
    },
    props: ['itemData'],
    methods: {
      handleDone () {
        var url = this.$server_host + '/todos/done/'
        axios.post(url, {
          data: this.itemData.id
        }).then((res) => {
          console.log(res.data)
          this.$store.commit('updateList', res.data)
        })
      }
    },
    mounted () {
      this.todoType = this.$store.state.typeOptions[this.itemData.typeId - 1].label
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
