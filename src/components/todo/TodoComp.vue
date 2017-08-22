<template>
  <div>
    <todo-filter :type='type'></todo-filter>
    <todo-item v-for="item in todoList" v-if="type === 'todo' && !item.done" :itemData="item" :key="item.id"></todo-item>
    <todo-item v-for="item in todoList" v-if="type === 'done' && item.done" :itemData="item" :key="item.id"></todo-item>
  </div>
</template>

<script>
  import todoFilter from './TodoFilter'
  import todoItem from './TodoItem'
  export default {
    data () {
      return {
      }
    },
    props: ['type'],
    components: {
      todoFilter,
      todoItem
    },
    methods: {
    },
    computed: {
      todoList: {
        get: function () {
          var res = []
          if (this.type === 'todo') {
            if (this.$store.state.todoStatus) {
              res = this.$store.state.todoFilterList
            } else {
              res = this.$store.state.todoList
            }
          } else {
            if (this.$store.state.doneStatus) {
              res = this.$store.state.doneFilterList
            } else {
              res = this.$store.state.todoList
            }
          }
          return res
        },
        set: function () {}
      }
    }
  }
</script>

<style>
 
</style>
