<template>
  <div>
    <todo-filter :type='type'></todo-filter>
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
        // todoList: [{itemContext: '铲土', fromNow: '一天前', type: '工作', done: false},
        // {itemContext: '浇花', fromNow: '一时前', type: '生活', done: false},
        // {itemContext: '打怪', fromNow: '5分钟前', type: '娱乐', done: false},
        // {itemContext: '送花', fromNow: '1年前', type: '娱乐', done: true}]
      }
    },
    props: ['type'],
    components: {
      todoFilter,
      todoItem
    },
    methods: {
      // todoList: function () {
      //   var res = []
      //   if (this.type === 'todo') {
      //     if (this.$store.state.todoStatus) {
      //       res = this.$store.state.todoFilterList
      //     } else {
      //       console.log('else 1')
      //       res = this.$store.state.todoList
      //     }
      //   } else {
      //     if (this.$store.state.doneStatus) {
      //       res = this.$store.state.doneFilterList
      //     } else {
      //       res = this.$store.state.todoList
      //       console.log('else 2')
      //     }
      //   }
      //   console.log(this.type)
      //   console.log(res)
      //   return res
      // }
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
          console.log(this.type)
          console.log(res)
          return res
        },
        set: function () {}
      }
    },
    mounted () {
      this.$store.commit('initStatus')
    }
  }
</script>

<style>
 
</style>
