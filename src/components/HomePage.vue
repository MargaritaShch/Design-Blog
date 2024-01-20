<template>
    <div class ='main'>
        <h1>EXPLORE THE WORLD <br/> WITH US!</h1> 
        <h2>Travel Blog</h2>
        <button>Our posts</button>
    </div>

    <PostsListPage/>
    <SinglePostView/>
</template>

<script>
import PostsListPage from './PostsListPage.vue';
import SinglePostView from './SinglePostView.vue';


export default {
    components: {
        PostsListPage,
        SinglePostView
    }
}
</script>

<style scoped>
.main{
    background-image: url(src/assets/img/cover-main.jpg);
    background-size: cover;
    padding-top: 250px;
    padding-bottom: 100px;
}

.main h1{
    text-align: center;  
    text-shadow: 2px 2px 2px rgb(87, 83, 83);
    font-size:40px;
}

.main h2{
    text-align: center;  
    padding-top: -15px;
    color: rgba(0, 0, 0, 0.717);
}

.main button{
    cursor: pointer;
}

</style>
