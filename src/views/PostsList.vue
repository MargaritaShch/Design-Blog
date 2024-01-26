<script setup>
import { ref, onMounted } from 'vue';
import {deletePostById, getPosts} from '../api/api.ts';
import { useRouter } from "vue-router";
import HeaderBase from '../components/HeaderBase.vue';
import Breadcrumbs from '../components/Breadcrumbs.vue' 


const router = useRouter();
const posts = ref([]);

onMounted(async () => {
  const fetchedPosts = await getPosts();
  posts.value = fetchedPosts.slice(0, 12)
});

const showPost = (id) => {
  router.push({ name: 'post', params: { id }});
}

const deletePost = async (id) => { 
    console.log("deletePost")
  await deletePostById(id);
  posts.value = posts.value.filter((post) => post.id !== id);
}
</script>


<template>
<div class='posts'>
    <HeaderBase/>
    <div :class="$style.block">
        <div :class="$style.infoPost"
        v-for='post in posts' 
        :key='post.id'
        @click.left='showPost(post.id)'
        @click.right.prevent='deletePost(post.id)'
        >
            <!-- <img :src="getImageForPost(post.id)" alt ='photo' class ='photo'> -->
            <p :class ="$style.num">{{ `Post # ${post.id}:` }}</p>
            <p>{{ post.title }}</p>
        </div>
    </div>
</div>
</template>


<style module lang="scss">
.infoPost{
    text-align: center ;
    .num{
        font-weight: bold;
    }
}

p{
    cursor: pointer;
    color: black;
    letter-spacing: 1px;
    width: 250px;
    padding: 0px 20px 0px 10px;
    font-size: 18px;
    text-align: center ;
    text-decoration: none;

    &:hover{
        color: rgb(128, 128, 128)
    }
}

.block{
    padding: 20px 20px 20px 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (min-width: 1536px) {
        padding-left: 10%;
    }
    @media (min-width: 1920px){
        padding-left: 10%;
    }
}
</style>
