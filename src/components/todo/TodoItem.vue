<template>
  <div>
    <div class="todo"><span>{{itemData.context}}</span><span class="mini-font">· {{itemData.createdAt}}</span> <span class="mini-font">· {{todoType}}</span>
      <div class="pull-right" >
        <el-button v-if="!itemData.status" size="mini" type="info" :plain="true" @click="handleDone">Done</el-button>
        <el-button size="mini" type="danger" @click="handleDelete">delete</el-button>
      </div>
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
          this.$store.commit('updateList', res.data)
        })
      },
      handleDelete () {
        this.$confirm('确定删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url = this.$server_host + '/todos/delete'
          axios.post(url, {
            data: this.itemData.id
          }).then((res) => {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.$store.commit('updateList', res.data)
          }).catch(function (error) {
            console.log(error)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
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
