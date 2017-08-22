var GlobalConfig = {}
GlobalConfig.install = function (Vue, options) {
  Vue.prototype.$server_host = 'http://localhost:3001'
}
module.exports = GlobalConfig
