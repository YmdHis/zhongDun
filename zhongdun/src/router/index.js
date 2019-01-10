import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import step1 from '@/pages/works/step1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/works',
      name: 'step1',
      component: step1
    }

  ]
})
