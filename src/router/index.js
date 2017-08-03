import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 定义路由组件
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Dashboard = resolve => {
  require.ensure(['../views/Dashboard.vue'], () => {
    resolve(require('../views/Dashboard.vue'))
  })
}

const Activity = resolve => {
  require.ensure(['../views/Activity.vue'], () => {
    resolve(require('../views/Activity.vue'))
  })
}

const Experience = resolve => {
  require.ensure(['../views/Experience.vue'], () => {
    resolve(require('../views/Experience.vue'))
  })
}

const Group = resolve => {
  require.ensure(['../views/Group.vue'], () => {
    resolve(require('../views/Group.vue'))
  })
}

// 定义路由
const routes = [{
  path: '/',
  name: 'home',
  component: Dashboard,
  meta: {keepAlive: true}
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard,
  meta: {keepAlive: true}
}, {
  path: '/experience',
  name: 'experience',
  component: Experience,
  meta: {keepAlive: false}
}, {
  path: '/group',
  name: 'group',
  component: Group,
  meta: {keepAlive: false}
}, {
  path: '/activity',
  name: 'activity',
  component: Activity,
  meta: {keepAlive: false}
}]

const router = new Router({
  mode: 'history',
  routes
})

export default router
