import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import EPL from '@/views/Epl/Epl.vue';
import ManU from '@/views/Epl/ManU.vue';
import ManCity from '@/views/Epl/ManCity.vue';
import Liverpool from '@/views/Epl/Liverpool.vue';
import Laliga from '@/views/Laliga/Laliga.vue';
import RealMadrid from '@/views/Laliga/RealMadrid.vue'
import Barcelona from '@/views/Laliga/Barcelona.vue';
import AtleticoMadrid from '@/views/Laliga/AtleticoMadrid.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/epl',
    name: 'epl',
    component: EPL,
    children: [
      {
        path: 'manu',
        name: 'manu',
        component: ManU,
      },
      {
        path: 'mancity',
        name: 'mancity',
        component: ManCity,
      },
      {
        path: 'liverpool',
        name: 'liverpool',
        component: Liverpool,
      },
    ],
  },
  {
    path: '/laliga',
    name: 'laliga',
    component: Laliga,
    children: [
      {
        path: 'realmadrid',
        name: 'realmadrid',
        component: RealMadrid,
      },
      {
        path: 'barcelona',
        name: 'barcelona',
        component: Barcelona,
      },
      {
        path: 'atleticomadrid',
        name: 'atleticomadrid',
        component: AtleticoMadrid,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
