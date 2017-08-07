<template>
  <div class="tab-warp">
    <el-tabs v-model="activeName">
      <el-tab-pane name="first">
        <span slot="label">To do <span class="badge">{{todoNum}}</span> </span>
        <todo></todo>
      </el-tab-pane>
      <el-tab-pane label="Done" name="second">
        <span slot="label">To do <span class="badge">{{doneNum}}</span> </span>
        <done></done>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import todo from '../components/TodoComp'
import done from '../components/DoneComp'
export default {
  data () {
    return {
      activeName: 'first',
      todoNum: 5, // TODO: Dynamic acquisition
      doneNum: 7
    }
  },
  components: {
    todo,
    done
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
