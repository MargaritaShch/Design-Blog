<script setup>
import Header from '../components/Header.vue';
import { ref, onMounted } from "vue";
import { getPostById, getUserById } from "../api/api.ts";
import { useRoute } from 'vue-router'


const post = ref({});
const user = ref({});
const route = useRoute()

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
 <Header>
   <template v-slot:breadcrumbs>
    <div class='menu'>
        <ul>
            <router-link :to="{name:'home'}">
                <li class='left-li'>Back to Home Page/</li>
            </router-link>
            <router-link :to="{name:'posts'}">
                <li>Back to All posts/</li>
            </router-link>
                <li>{{ `Post # ${post.id}` }}</li>
        </ul>
    </div>
    </template> 
</Header>

 <div class ='countainer1'>
    <div class='discribe'>
        <h3>{{ post.title }}</h3>

    <div class='countainer'>
        <div class='discribe-post'>
            <p class='text'>{{ post.body }}</p>
        </div>

        <div className='general-info'>
            <p className='name'>Author: {{ user.name }}</p>
            <p>Email: {{user.email }} <br>
               Phone: {{user.phone}} <br>
               Website: {{user.website}} <br>
            </p>
        </div>
    </div>     
   </div> 
 </div>
</template>


<style scoped lang ='scss'>
.countainer{
    margin-top: 45px;
    margin-bottom: 25px;
}

.menu ul {
    display: flex;
    list-style: none;
    font-size: 18px;
}

a{
    text-decoration: none;
    color:  black;
}

a:hover{
    color: rgb(96, 60, 214);
}

li{
    text-decoration: none;   
    padding-right: 5px;
}


.discribe h3{
    font-weight: bold;
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

.discribe-post p{
    width: 500px;
    font-weight: 300;
    font-size: 18px; 
    text-align: justify;
    letter-spacing: 1px;
    margin-top: 20px;
    margin-left: 24%;
}

.general-info{
    margin-top: 60px;
}

.general-info p{
    font-size: 15px;
    text-align: left;
    padding-left: 70px;
}

@media (min-width: 992px){
    .menu {
        margin-right: 50%;
        padding: 30px 0px;
    }
}

@media (min-width: 1536px) {
    .discribe-post p{
        margin-left: 34%;
    }
      .menu {
        margin-right: 47%;
        padding: 30px 0px;
    }
     .general-info{
        margin-left: 11%;
        padding: 30px 0px;
    }
}

@media (min-width: 1920px) {
     .discribe-post p{
        margin-left: 38%;
    }
    .menu {
        margin-right: 50%;
        padding: 30px 0px;
    }
    .general-info{
        margin-left: 11%;
        padding: 30px 0px;
    }
}
</style>
