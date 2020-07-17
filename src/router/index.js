import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/login/login.vue'
import Reg from '../views/register/register.vue'
import GameContent from '../views/GameContent/GameContent'
import userCenter from "../views/userCenter/userCenter"
import mydetails from "../views/userCenter/mydetails"
import overview from "../views/userCenter/overview"
import games from "../views/userCenter/games"
import security from "../views/userCenter/security"
import about from '../views/about/About.vue'

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
      component: userCenter,
      children: [
        {
          path: 'mydetails',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'mydetails',
          component: mydetails
        },
        {
          path: 'overview',
          name: 'overview',
          component: overview
        },
        {
          path: 'games',
          name: 'games',
          component: games
        },
        {
          path: 'security',
          name: 'security',
          component: security
        },

      ]
    },
    {
      path: '/about',
      component: about
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
