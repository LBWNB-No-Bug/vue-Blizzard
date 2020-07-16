import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/login/login.vue'
import Reg from '../views/register/register.vue'
import GameContent from '../views/GameContent/GameContent'
import userCenter from "../views/userCenter/userCenter";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
	path:'/login',
	component:Login
  },
  {
  	path:'/register',
  	component:Reg
  },
  {
    path: '/GameContent',
    component: GameContent
  },
  {
    path: '/userCenter',
    component: userCenter
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
