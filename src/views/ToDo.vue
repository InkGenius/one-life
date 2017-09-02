<template>
  <div class="tab-warp">
    <el-tabs v-model="activeName">
      <el-tab-pane name="first">
        <span slot="label">To do <span class="badge">{{todoNum}}</span> </span>
        <todo-comp type="todo"></todo-comp>
      </el-tab-pane>
      <el-tab-pane label="Done" name="second">
        <span slot="label">Done <span class="badge">{{doneNum}}</span> </span>
        <todo-comp type="done"></todo-comp>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import todoComp from '../components/todo/TodoComp'
import axios from 'axios'

export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    todoComp
  },
  mounted () {
    var url = this.$server_host + '/todos/list'
    axios.get(url).then((res) => {
      this.$store.commit('initStatus', res.data)
    })
  },
  computed: {
    todoNum: {
      get: function () {
        return this.$store.state.todoNum
      },
      set: function () {}
    },
    doneNum: {
      get: function () {
        return this.$store.state.doneNum
      },
      set: function () {}
    }
  }
}
</script>
<style>
  .tab-warp{
    width: 65%;
    margin:100px auto 0 auto;
  }
  .badge {
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: bold;
    color: rgba(0,0,0,0.55);
    line-height: 1;
    vertical-align: middle;
    white-space: nowrap;
    text-align: center;
    background-color: #eee;
    border-radius: 10px;
  }
</style>
