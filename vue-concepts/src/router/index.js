import ComposableView from '@/views/ComposableView.vue'
import DefineModelView from '@/views/DefineModelView/DefineModelView.vue'
import LifeCycleView from '@/views/LifeCycleView.vue'
import PropEventView from '@/views/PropEventView/PropEventView.vue'
import ProvideInjectView from '@/views/ProvideInjectView.vue'
import ReactiveView from '@/views/ReactiveView.vue'
import RefView from '@/views/RefView.vue'
import SignInView from '@/views/FormView/SignInView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import BlogCardView from '@/views/APICallView/BlogCardView.vue'
import BlogCardPostView from '@/views/APICallView/BlogCardPostView.vue'
import BlogCardAddView from '@/views/APICallView/BlogCardAddView.vue'
import FormViewTwo from '@/views/FormViewTwo.vue'

let formSubmitted = false;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ref',
      component: RefView,
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: ReactiveView,
    },
    {
      path: '/life-cycle',
      name: 'life-cycle',
      component: LifeCycleView,
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component: ProvideInjectView,
    },
    {
      path: '/define-model',
      name: 'define-model',
      component: DefineModelView,
    },
    {
      path: '/composable',
      name: 'composable',
      component: ComposableView,
    },
    {
      path: '/prop-event',
      name: 'prop-event',
      component: PropEventView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/NestedView/BlogView.vue'),
      children: [
        {
          path: ':id',
          name: 'blog-post',
          component: () => import('@/views/NestedView/BlogPostView.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/FormView/FormView.vue'),
    },
    {
      path: '/form2',
      name: 'form2',
      component: FormViewTwo,
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInView,
    },

    {
      path: '/success-page',
      name: 'success-page',
      component: () => import('@/views/FormView/SuccessPageView.vue'),
      beforeEnter: [check],
      props: (route) => ({
        // firstName: route.query.firstName,
        // lastName: route.query.lastName,
        email: route.query.email
      }),
    },
    {
      path: '/blog-card',
      name: 'blog-card',
      component: BlogCardView,
    },
    {
      path: '/blog-card/add',
      name: 'blog-card-add',
      component: BlogCardAddView,
    },
    {
      path: '/blog-card/:id(\\d+)',
      name: 'blog-card-detail',
      component: BlogCardPostView,
      props: true,
    },
  ],
})

export function markFormSubmitted() {
  formSubmitted = true;
}

function check(to, from, next){
  if (formSubmitted) {
    next();
  }
  else {
    next('/sign-in');
  }
}

export default router
