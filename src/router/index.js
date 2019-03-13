import Vue from 'vue'
import Router from 'vue-router'

import Maison from '@/components/Maison'
import Salon from '@/components/Salon'
import Cuisine from '@/components/Cuisine'
import Chambre from '@/components/Chambre'
import Grenier from '@/components/Grenier'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Maison',
      component: Maison
    },
    {
      path: '/Salon',
      name: 'Salon',
      component: Salon
    },
    {
      path: '/Cuisine',
      name: 'Cuisine',
      component: Cuisine
    },
    {
      path: '/Chambre',
      name: 'Chambre',
      component: Chambre
    },
    {
      path: '/Grenier',
      name: 'Grenier',
      component: Grenier
    }

  ]
})
