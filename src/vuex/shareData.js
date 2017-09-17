import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoNum: 0,
    doneNum: 0,
    todoList: [],
    // 是否经过过滤，false 表示没有过滤，true表示经过过滤
    todoStatus: false,
    doneStatus: false,
    // 过滤后的数据列表
    todoFilterList: [],
    doneFilterList: [],
    typeOptions: [{
      value: '1',
      label: '工作'
    }, {
      value: '2',
      label: '生活'
    }, {
      value: '3',
      label: '娱乐'
    }],
    recordList: [],
    currentUser: {}
  },
  mutations: {
    setCurrentUser (state, val) {
      state.currentUser = val
    },
    updateRecordList (state, val) {
      state.recordList = val
    },
    // 过滤后修改状态，保存过滤数据
    todoFilterList (state, val) {
      state.todoStatus = true
      state.todoFilterList = val
    },
    doneFilterList (state, val) {
      state.doneStatus = true
      state.doneFilterList = val
    },
    // 初始化为没有过滤
    initStatus (state, data) {
      state.todoStatus = false
      state.doneStatus = false
      state.doneNum = data.doneNum
      state.todoNum = data.todoNum
      state.todoList = data.list
    },
    updateList (state, data) {
      state.doneNum = data.doneNum
      state.todoNum = data.todoNum
      state.todoList = data.list
    }
  }
})
export default store
