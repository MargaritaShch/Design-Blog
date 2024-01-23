import App from './App.vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SinglePost from './views/SinglePost.vue';
import  PostsList  from './views/PostsList.vue';
import Home from './views/Home.vue'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name:'home',
        component: Home,
        meta: {
            breadcrumb: 'Main',
        },
    },
    {
        path: '/posts',
        name:'posts',
        component: PostsList,
    },

    {
        path: '/post',
        name:'post',
        component: SinglePost ,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);
app.use(router);
app.mount('#app');