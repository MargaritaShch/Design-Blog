<script setup>
import HeaderBase from '../components/HeaderBase.vue';
import { ref, onMounted,onBeforeUnmount } from "vue";
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
 <HeaderBase/>
 <div>
    <div :class="$style.describe">
        <h3>{{ post.title }}</h3>

        <div :class="$style.container">
            <div :class="$style.describePost">
                <p>{{ post.body }}</p>
            </div>

            <div :class="$style.generalInfo">
                <p>Author: {{ user.name }}</p>
                <p>Email: {{user.email }} <br>
                Phone: {{user.phone}} <br>
                Website: {{user.website}} <br>
                </p>
            </div>

        </div>     
   </div> 
 </div>
</template>


<style module lang="scss">
.container{
    margin-top: 45px;
    margin-bottom: 25px;
}

.describe{
    h3{
    font-weight: bold;
    font-size: 27px;
    text-align: center;
    letter-spacing: 1px;
}

p {
    font-weight: 100;
    font-size: 18px;
    text-align: center;
    letter-spacing: 1px;
    cursor: pointer;
    margin-top: -15px;
  }
} 

.describePost {
    p{
        width: 500px;
        font-weight: 300;
        font-size: 18px; 
        text-align: justify;
        letter-spacing: 1px;
        margin-top: 20px;
        
        @media (min-width: 992px){
            margin-left: 24%;
        }
        @media (min-width: 1536px){
            margin-left: 34%;
        }
        @media (min-width: 1920px) {
            margin-left: 35%;
        
        }
    }
}

.generalInfo{
    margin-top: 60px;

    @media (min-width: 992px){
        margin-left: 30px;
    }
    @media (min-width: 1536px){
        margin-left: 150px;
    }
    @media (min-width: 1920px){
        margin-left: 150px;
    }
}

p{
    font-size: 16px;
    color: rgb(99, 96, 96);  
}
</style>
