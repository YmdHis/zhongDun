import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import organ from '@/pages/organ/organ'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'organ',
      component: organ
    }
  ]
})
