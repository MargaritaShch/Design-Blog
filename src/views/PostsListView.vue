<template>
<div class="posts">
     <Header/>
    <div class='menu'>
        <ul>
            <li>MOST POPULAR</li>
            <router-link to="/">
            <span>Back to Home Page</span>
            </router-link>
        </ul>
    </div>
    <div class="block">
        <router-link to ='/single-post-view' @contextmenu="deletePost(0)">
        <div class ='' >
            <img :src='pic2' alt ='photo' class ='photo'>
            <p>19.04.2023: <br>FETCH FESTIVAL LONDON</p>
        </div>
        </router-link>
        
        <div>
            <img :src='pic5' alt ='photo' class ='photo'>
            <p>29.08.2023: <br>73 QUESTION WITH DANA DOLARENTO</p>
          
        </div>
        <div>
            <img :src='pic3' alt ='photo' class ='photo'>
            <p>09.10.2023: <br>THE UNBRAND BRAND</p> 
        </div>
    </div>
    
    <div class="block">
        <div >
            <img :src='pic1' alt ='photo' class ='photo'>
            <p>20.10.2023: <br>10 MUEMAS YOU SHOULD VISIT AT LEAST ONCE</p>
        </div>
        <div>
            <img :src='pic6' alt ='photo' class ='photo'>
            <p>13.11.2023: <br>365 DAYS. 365 FRAMES</p>
        </div>
        <div>
            <img :src='pic7' alt ='photo' class ='photo'>
            <p>30.07.2024: <br>SUMMERRIGHT</p>
        </div>
    </div>
</div>
</template>

<script>
import Header from '../components/Header.vue';
import pic1 from '../assets/img/pic1.webp';
import pic2 from '../assets/img/pic2.webp';
import pic3 from '../assets/img/pic3.webp';
import pic4 from '../assets/img/pic4.webp';
import pic5 from '../assets/img/pic5.webp';
import pic6 from '../assets/img/pic6.webp';
import pic7 from '../assets/img/pic7.webp';
// import './assets/main.scss';

export default {
       components: {
    Header,
  },
    data (){
        return{
            pic1: pic1,
            pic2: pic2,
            pic3: pic3,
            pic4: pic4,
            pic5: pic5,
            pic6: pic6,
            pic7: pic7,
            posts: [
                {
                date: '19.04.2023',
                title: 'FETCH FESTIVAL LONDON',
                image: pic2,
                } 
        ]

        }
    },
    methods: {
        deletePost(index){
             console.log('Deleting :', index);
           this.posts.splice(index, 1);
        return false
    }
    
}
}
</script>

<style scoped lang ='scss'>
.posts{
    display: block;
    align-items: center;
}
.menu ul {
  display: flex;
  justify-content: space-between;
  padding: 30px 72px 20px 50px;
  font-size: 18px;

  li {
    list-style: none;
    color: black;
  }
  span{
    color: black;
    
    &:hover{
        color: rgb(105, 104, 104);
    }
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
    display: flex;
    justify-content: center;
}

p{
    cursor: pointer;
    color: black;
    text-align: left;
    letter-spacing: 1px;
    width: 250px;
    padding: 0px 40px 0px 10px;
    font-size: 18px;  
}

.photo{
    width: 270px;
}
</style>
