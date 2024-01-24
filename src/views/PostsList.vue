<script setup>
import { ref, onMounted } from 'vue';
import {deletePostById, getPosts} from '../api/api.ts';
import { useRouter } from "vue-router";
import Header from '../components/Header.vue';


const router = useRouter();
const posts = ref([]);

onMounted(async () => {
  const fetchedPosts = await getPosts();
  posts.value = fetchedPosts.slice(0, 6).map(post => ({
    id: post.id,
    title: post.title,
  }));
});

const showPost = (id) => {
  router.push({ name: 'post', params: { id }});
}

const deletePost = async (id) => { 
  await deletePostById(id);
  posts.value = posts.value.filter((post) => post.id !== id);
}
</script>


<template>
<div class='posts'>
     <Header/>
    <div class='menu'>
        <ul>
            <router-link to='/'>
                <span>Back to Home Page</span>
            </router-link>
        </ul>
    </div>
    
    <div class='block'>
        <div class='info-post'
        v-for='post in posts' 
        :key='post.id'
        @click.left='showPost(post.id)'
        @click.right.prevent='deletePost(post.id)'
        :to="{ name: 'post', params: { id: post.id } }">
            <!-- <img :src="getImageForPost(post.id)" alt ='photo' class ='photo'> -->
            <p class ='num'>{{ `Post # ${post.id}:` }}</p>
            <p class ='title'>{{ post.title }}</p>
        </div>
    </div>
</div>
</template>


<style scoped lang ='scss'>
.menu ul {
  display: flex;
  justify-content: left;
  font-size: 20px;
}
span{
  color: black;
  padding-left: 20px;
    
    &:hover{
       color: rgb(96, 60, 214);
  }
}

a{
    text-decoration: none;
}

img{
    cursor: pointer;  
}
.info-post p{
    text-align: center ;
}
.num{
    font-weight: bold;
}
p{
    text-align: center ;
    text-decoration: none;
    transition: transform 500ms ease;

    &:hover{
        color: rgb(105, 104, 104);
        transform: translateY(-5px);
    }
}

.block{
    padding: 20px 50px 20px 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

p{
    cursor: pointer;
    color: black;
    text-align: left;
    letter-spacing: 1px;
    width: 250px;
    padding: 0px 40px 0px 10px;
    font-size: 18px;
    /* font-weight: bold;   */
}

.photo{
    width: 270px;
}

@media (min-width: 992px){
        .menu{
        margin-left: 3% ;
        padding: 30px 0px 30px;
    }
}

@media (min-width: 1536px) {
       .menu{
        margin-left: 12% ;
        padding: 50px 0px 50px;
    }
    .block{
        margin-left: 10%;
    }
}

@media (min-width: 1920px){
    .block{
        margin-left: 10%;
    }
    .menu{
        margin-left: 12%;
        padding: 50px 0px 50px;
    }
}
</style>
