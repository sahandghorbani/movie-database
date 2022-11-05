import { createRouter, createWebHashHistory } from 'vue-router'
import Homeview from '../views/Homeview.vue' 
import DetailView from '../views/DetailView.vue'

const routes = [

  {
    path: '/detail/:id',
    name: 'detail',
    props:true ,
    component:  DetailView
  },
  {
    path: '/',
    name: 'home',
    component: Homeview
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
