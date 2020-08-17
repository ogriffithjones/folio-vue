import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// Pages
import Designers from '@/components/designers/index'
import Home from '@/components/home/index'
import About from '@/components/about/index'

const routes = [
  {
    path: '/',
    component: Home
  },{
    path: '/designers',
    component: Designers
  },{
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes: routes,
  router,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
