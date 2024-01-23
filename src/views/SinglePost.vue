<script setup>
import Header from '../components/Header.vue';
import avatar from '../assets/img/avatar.webp';
import pic1 from '../assets/img/pic1.webp';
import pic2 from '../assets/img/pic2.webp';
import pic3 from '../assets/img/pic3.webp';
import pic4 from '../assets/img/pic4.webp';
import pic5 from '../assets/img/pic5.webp';
import pic6 from '../assets/img/pic6.webp';
import pic7 from '../assets/img/pic7.webp';
import { ref, onMounted } from "vue";
import { getPostById, getUserById } from "../api/api.ts";
import { useRoute } from 'vue-router'


const post = ref({});
const user = ref({});
const route = useRoute()

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
  try {
    post.value = await getPostById(route.params.id);
    const { userId } = post.value;
    user.value = await getUserById(userId);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
});
</script>


<template>
 <Header/>
 <div class ='countainer1'>
    <div class='menu'>
        <ul>
             <router-link :to="{name:'posts'}">
            <li>Back to All posts</li>
            </router-link>
          <router-link :to="{name:'home'}">
            <li class='left-li'>Back to Home Page</li>
            </router-link>
        </ul>
    </div>
    <div class="discribe">
        <div className="general-info">
            <h3>{{ post.title }}</h3>
            <p className="name">Author: {{ user.name }}</p>
            <p>Email: {{user.email }} <br>
               Phone: {{user.phone}} <br>
               Website: {{user.website}} <br>
            </p>
        </div>
   <div class='countainer'>
   
    <div>
        <img :src="getImageForPost(post.id)"  alt ='photo' class ='photo'>
    </div>
    <div class='discribe-post'>
        <p class='text'>{{ post.body }}</p>
    </div>
    </div>
        
   </div> 
 </div>
</template>


<style scoped lang ='scss'>
.countainer{
    margin-top: 45px;
    margin-bottom: 25px;
    display: flex;
}
.menu ul {
    display: flex;
    justify-content:space-around;
    padding: 30px 50px 20px 50px;
    list-style: none;
    font-size: 18px;
}
a{
    text-decoration: none;
    color:  black;
}

a:hover{
    color: rgb(96, 94, 94);
}
li{
    text-decoration: none;   
}
.general-info h3{
font-weight: bold;
}
.left-li{
    padding-left: 180px;
}

.discribe h3{
    font-weight: 500;
    font-size: 27px;
    text-align: center;
    letter-spacing: 1px;
}

.discribe p{
    font-weight: 100;
    font-size: 18px;
    text-align: center;
    letter-spacing: 1px;
    cursor: pointer;
    margin-top: -15px;
}

.photo{
    margin-left: 30%;
    width: 60%;

}

.discribe-post p{
    width: 450px;
    font-weight: 300;
    font-size: 18px; 
    text-align: justify;
    letter-spacing: 1px;
    margin-top: 120px;
    padding-right: 60px;
}
.name{
    padding-bottom: 15px;
    cursor: pointer;
}
.name:hover{
    color: grey;
}


@media (min-width: 1536px) {
   .photo{
        margin-left: 25%;
    }
    .discribe-post p{
        margin-left: 25%;
    }
}

@media (min-width: 1920px) {
   .photo{
        margin-left: 30%;
    }
     .discribe-post p{
        margin-left: 30%;
    }
}
</style>
