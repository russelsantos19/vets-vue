import Vue from 'vue'
import Router from 'vue-router'
import signUp from './components/sign-up.vue'
import logIn from './components/log-in.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sign-up',
      component: signUp
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: logIn
    }
  ]
})