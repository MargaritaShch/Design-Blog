import App from './App.vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SinglePost from './views/SinglePost.vue';
import  PostsList  from './views/PostsList.vue';
import HomePage from './views/HomePage.vue';
import Breadcrumbs from './components/Breadcrumbs.vue'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name:'home',
        component: HomePage,
        meta: {
            breadcrumb: 'Main',
        },
    },
    {
        path: '/posts',
        name:'posts',
        component: PostsList,
        meta: {
          breadCrumb(route: Route) {
            const idParam = route.params.id;
            return [
              {
                text: 'Home',
                to: { name: 'home' },
              },
            ]
          },
        },
    },

    {
        path: "/posts/:id",
        name: "post",
        component: SinglePost,
        meta: {
          breadCrumb(route: Route) {
            const idParam = route.params.id;
            return [
              {
                text: 'Home',
                to: { name: 'home' },
              },
              {
                text: 'Posts',
                to: { name: 'posts' },
              },
              {
                text: `Post № ${idParam}`
              }
            ]
          },
        },
      },
    ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);
app.use(router);
app.mount('#app');