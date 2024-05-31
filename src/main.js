import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueResource from "vue-resource";
Vue.use(VueResource);

// Pages
import Designers from '@/components/designers/index'
import Home from '@/components/home/index'
import About from '@/components/about/index'
import EditProjects from '@/components/admin/EditProjects.vue'


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
  },
  {
    name:"edit",
    path:"/admin/EditProjects",
    component:EditProjects
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
  router
}).$mount('#app')
