import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Vuetify */
import './plugins/vuetify'
Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')