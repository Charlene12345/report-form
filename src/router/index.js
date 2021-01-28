import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import BMap from '../views/BMap.vue'
// import BMap2 from '../views/BMap2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
