<script setup>
import { ref, onMounted } from 'vue';
import {deletePostById, getPosts} from '../api/api.ts';
import { useRouter } from "vue-router";
import Header from '../components/Header.vue';
import pic1 from '../assets/img/pic1.webp';
import pic2 from '../assets/img/pic2.webp';
import pic3 from '../assets/img/pic3.webp';
import pic4 from '../assets/img/pic4.webp';
import pic5 from '../assets/img/pic5.webp';
import pic6 from '../assets/img/pic6.webp';
import pic7 from '../assets/img/pic7.webp';


const router = useRouter();
const posts = ref([]);

const getImageForPost = (postId) => {
  switch (postId) {
            case 1:
                return pic2;
            case 2:
                return pic5;
            case 3:
                return pic3;
            case 4:
                return pic1;
            case 5:
                return pic6;
            case 6:
                return pic7;
            default:
                return ''; 
        }
};

onMounted(async () => {
  const fetchedPosts = await getPosts();
  posts.value = fetchedPosts.slice(0, 6).map(post => ({
    id: post.id,
    title: post.title,
    image: getImageForPost(post.id),
  }));
});

const showPost = (id) => {
  router.push({ name: 'post', params: { id }});
}
</script>


<template>
<div class="posts">
     <Header/>
    <div class='menu'>
        <ul>
            <router-link to="/">
            <span>Back to Home Page</span>
            </router-link>
        </ul>
    </div>
    
    <div class="block">
        <div v-for="post in posts" 
        :key="post.id" 
        @click.left="showPost(post.id)"
        :to="{ name: 'post', params: { id: post.id } }">
            <img :src="getImageForPost(post.id)" alt ='photo' class ='photo'>
            <p>{{ post.title }}</p>
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
        color: rgb(105, 104, 104);
  }
}

a{
    text-decoration: none;
}

img{
    cursor: pointer;  
}

p{
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
    font-weight: bold;  
}

.photo{
    width: 270px;
}

@media (min-width: 1920px){
    .block{
        margin-left: 10%;
}
}
</style>
