import Vue from 'vue'
import App from './App'
import router from './routes'
import store from './vuex'

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
