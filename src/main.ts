import App from './App.vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SinglePostView from './views/SinglePostView.vue';
import  PostsListView  from './views/PostsListView.vue';
import { VModalPlugin } from 'vue3-modal';
import  Modal  from './components/Modаl.vue'; 

const routes: Array<RouteRecordRaw> = [
  
    {
        path: '/posts-list-view',
        component: PostsListView,
    },

    {
        path: '/single-post-view',
        component: SinglePostView ,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);
app.use(router);
app.use(VModalPlugin);
app.component('Modal', Modal);
app.mount('#app');