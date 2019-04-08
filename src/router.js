import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import App from './App.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children:[
      	{
            path: '',
            redirect: '/home'
        },
         //首页城市列表页
        {
            path: '/home',
            component: Home
        },
      ]
    },
   
  ]
})
