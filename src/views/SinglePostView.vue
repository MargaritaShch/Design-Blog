<script>
import Header from '../components/Header.vue';
import avatar from '../assets/img/avatar.webp';
import singlepic1 from '../assets/img/singlepic1.webp';
// import './assets/main.scss';

export default {
     components: {
    Header,
  },
    data (){
        return{
            avatar: avatar,
            singlepic1: singlepic1,
            isOpenModal: false
        }
    },

    getOpenModal(){

    },
    getCloseModal(){

    }

}
</script>

<template>
 <Header/>
 <div class ='countainer'>
    <div class='menu'>
        <ul>
             <router-link to="/posts-list-view">
            <li>Back to All posts</li>
            </router-link>
          <router-link to="/">
            <li>Back to Home Page</li>
            </router-link>
        </ul>
    </div>
    <div class="discribe">
        <div className="general-info">
            <!-- <img :src="avatar" alt="avatar" class="avatar" /> -->
            <p class="date">19.04.2023</p>
            <h3> FETCH FESTIVAL LONDON</h3>
            <p className="name">Author: Amalia Nguema</p>
        </div>
   <div class='countainer'>
   
    <div>
        <img :src='singlepic1' alt ='photo' class ='photo'>
    </div>
    <div class='discribe-post'>
               <p class='text'>Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.</p>
    </div>
    </div>
        
   </div> 
 </div>
</template>



<style scoped>
.countainer{
    margin-top: -18px;
}
.menu ul {
    display: flex;
    justify-content: space-between;
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
    margin-left: 12%;
}

.discribe-post p{
    width: 729px;
    font-weight: 300;
    font-size: 18px; 
    text-align: justify;
    letter-spacing: 1px;
    margin-top: 20px;
    margin-left: 120px;
}
.name{
    padding-bottom: 15px;
    cursor: pointer;
}
.name:hover{
    color: grey;
}
.discribe-post p{
    font-weight: 300;
    font-size: 15px;
    margin-bottom: 20px;
}
</style>
