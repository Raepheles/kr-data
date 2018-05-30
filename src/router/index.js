import Vue from 'vue'
import Router from 'vue-router'
import Heroes from '@/components/Heroes'
import Artifacts from '@/components/Artifacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Heroes',
      component: Heroes
    },
    {
      path: '/heroes',
      name: 'Heroes',
      component: Heroes
    },
    {
      path: '/artifacts',
      name: 'Artifacts',
      component: Artifacts
    }
  ]
})
