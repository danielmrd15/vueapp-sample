import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import dashboard from '@/components/dashboard/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
