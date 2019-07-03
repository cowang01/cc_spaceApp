import Vue from 'vue';
import Router from 'vue-router';
import Ether from '@/views/Ether';
import Question1 from '@/views/Question1.vue'


Vue.use(Router);

const router = new Router({

  routes: [
    {
      path: '',
      name: 'ether',
      component: Ether
    },
    {
      path: '/question',
      name: 'question1',
      component: Question1
    }
  ]
})


export default router;
