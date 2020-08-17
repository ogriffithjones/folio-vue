import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from '@/components/home'

const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = new VueRouter({
  routes: routes,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
