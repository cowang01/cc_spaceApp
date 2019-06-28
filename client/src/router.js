import Vue from 'vue';
import Router from 'vue-router';
import Ether from '@/views/Ether';


Vue.use(Router);

const router = new Router({

  routes: [
    {
      path: '',
      name: 'ether',
      component: Ether
    }
  ]
})


export default router;
