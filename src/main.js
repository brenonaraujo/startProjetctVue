import Vue from 'vue'
import App from './App'
import router from './routes'
import store from './vuex'
import loader from './plugins/loader'

Vue.use(loader, store)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
