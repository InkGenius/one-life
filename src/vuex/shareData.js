import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoList: [{itemContext: '铲土', fromNow: '一天前', type: '工作', done: false},
        {itemContext: '浇花', fromNow: '一时前', type: '生活', done: false},
        {itemContext: '打怪', fromNow: '5分钟前', type: '娱乐', done: false},
        {itemContext: '送花', fromNow: '1年前', type: '娱乐', done: true}],
    todoStatus: false,
    doneStatus: false,
    todoFilterList: [],
    doneFilterList: []
  },
  mutations: {
    todoFilterList (state, val) {
      state.todoStatus = true
      state.todoFilterList = val
    },
    doneFilterList (state, val) {
      state.doneStatus = true
      state.doneFilterList = val
    },
    initStatus (state) {
      state.todoStatus = false
      state.doneStatus = false
    }
  }
})
export default store
