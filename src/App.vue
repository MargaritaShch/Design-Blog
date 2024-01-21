<template>
  <div class ='main'>
  <Header/>
  <div class ='cover'>
    <h1 class ='main-discribe'>Dreams unfold in pixels and hues
      <br/>
    Where surreal beauty breaks the rules
    <br/>
    Design tales that captivate, amuse</h1> 
    
      <router-link to="/PostsListView">
        <button class='click-posts'>VIEW POSTS</button>
      </router-link>
  </div>   
</div>
  <RouterView/>   
</template>

<script>
import './assets/main.scss';
import SinglePostView from './router/views/SinglePostView.vue';
import Header from './components/Header.vue'

export default {
   components: {
    Header,
  }
}
</script>

<style scoped>
.click-posts{
  align-items: center;
  margin-top: 30px;
  width: 150px;
  height: 40px;
  background: rgba(207, 204, 204, 0.705);
  border: 0.2px solid rgba(0, 0, 0, 0.225);
  font-size: 18px;
  border-radius: 3px;
}

.click-posts:hover{
  background: rgba(176, 173, 173, 0.705);
}

.cover{
  background-image: url(src/assets/img/cover.webp);
  background-size: cover;
  padding-top: 150px;
  padding-bottom: 180px;
  margin: 0px 20px;
    
}

.main-discribe{
  text-align: center;  
  letter-spacing: 3px;
  font-size:40px;
  color: white;
  font-weight: 400; 
  line-height: 2;  
}

.click-posts{
  margin-left: 45%;
}
</style>