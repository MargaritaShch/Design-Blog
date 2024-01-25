<script setup>
import HeaderBase from '../components/HeaderBase.vue'
</script>


<template>
<HeaderBase/>
    <div class='breadcrumbs'>
      <slot name='breadcrumbs'></slot>
    </div>   
<div class ='main'>
  <div class ='cover'>
    <h1 class ='main-describe'>Dreams unfold in pixels and hues
      <br/>
        Where surreal beauty breaks the rules
    <br/>
        Design tales that captivate, amuse</h1> 
    
    <router-link :to="{name:'posts'}">
        <button class='click-posts'>VIEW POSTS</button>
    </router-link>
  </div>   
</div>
  <RouterView/>  
</template>


<style scoped lang="scss">
.click-posts {
    align-items: center;
    margin-top: 30px;
    width: 200px;
    height: 50px;
    background: rgba(207, 204, 204, 0.705);
    border: 0.2px solid rgba(0, 0, 0, 0.225);
    font-size: 20px;
    border-radius: 10px;
    margin-left: 45%;
    cursor: pointer;
    transition: transform 500ms ease;

  &:hover {
    background: rgba(176, 173, 173, 0.705);
    transform: translateY(-5px);
  }
}

.cover {
    background-image: url(src/assets/img/cover.webp);
    background-size: cover;
    padding-top: 150px;
    padding-bottom: 180px;
    margin: 0px 20px;
}

.main-describe {
    text-align: center;
    letter-spacing: 3px;
    font-size: 40px;
    color: white;
    font-weight: 400;
    line-height: 2;
}

@media (min-width: 992px) {
   .click-posts {
        margin-left: 40%;
    }
}

@media (min-width: 1536px) {
   .click-posts {
        margin-left: 43%;
    }
}

@media (min-width: 1920px) {
   .click-posts {
        margin-left: 45%;
    }
}
</style>
