import App from './App.vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SinglePostView from './router/views/SinglePostView.vue';
import  PostsListView  from './router/views/PostsListView.vue';

const routes: Array<RouteRecordRaw> = [
  
    {
        path: '/PostsListView',
        component: PostsListView,
    },

    {
        path: '/SinglePostView',
        component: SinglePostView ,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);
app.use(router);
app.mount('#app');