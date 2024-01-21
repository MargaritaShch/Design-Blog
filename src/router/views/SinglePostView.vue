<script>
import Header from '../../components/Header.vue';
import avatar from '../../assets/img/avatar.webp';
import singlepic1 from '../../assets/img/singlepic1.webp';
export default {
     components: {
    Header,
  },
    data (){
        return{
            avatar: avatar,
            singlepic1: singlepic1
        }
    }
}
</script>

<template>
 <Header/>
 <div class ='container'>
    <div class='menu'>
        <ul>
             <router-link to="/PostsListView">
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
            <p className="name">Autor: Amalia Nguema</p>
        </div>
   <div class='countainer'>
   
    <div>
        <img :src='singlepic1' alt ='photo' class ='photo'>
    </div>

    <div class='discribe-post'>
               <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.</p>
    </div>
    </div>
        
   </div> 
 </div>
</template>



<style scoped>
.container{
    margin-top: -18px;
}
.menu ul {
    display: flex;
    justify-content: space-between;
    padding: 30px 50px 20px 50px;
    list-style: none;
    font-size: 18px;
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

</style>
