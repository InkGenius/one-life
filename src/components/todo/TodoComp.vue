<template>
  <div>
    <todo-filter></todo-filter>
    <todo-item v-for="item in todoList" v-if="type === 'todo' && !item.done" :itemContext="item.itemContext" :fromNow="item.fromNow" :type="item.type" :done="item.done" :key="item.id"></todo-item>
    <todo-item v-for="item in todoList" v-if="type === 'done' && item.done" :itemContext="item.itemContext" :fromNow="item.fromNow" :type="item.type" :done="item.done" :key="item.id"></todo-item>
  </div>
</template>

<script>
  import todoFilter from './TodoFilter'
  import todoItem from './TodoItem'
  export default {
    data () {
      return {
        todoList: [{itemContext: '铲土', fromNow: '一天前', type: '工作', done: false},
        {itemContext: '浇花', fromNow: '一时前', type: '生活', done: false},
        {itemContext: '打怪', fromNow: '5分钟前', type: '娱乐', done: false},
        {itemContext: '送花', fromNow: '1年前', type: '娱乐', done: true}]
      }
    },
    props: ['type'],
    components: {
      todoFilter,
      todoItem
    }
  }
</script>

<style>
 
</style>
