<template>
 <div clas='menu'>
        <ul>
            <li>Back to All posts</li>
            <li>Back to Home Page</li>
        </ul>
    </div>
   <div class='countainer'>
   
    <div>
        <img :src='mountains' alt ='photo' class ='photo'>
    </div>
   
    <div class="discribe">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.</p>
        <p class ='autor'>Lily Smith</p>
        <p class ='delete'>Delete post</p>
         <input type="text" placeholder="Write your comment">
         <button>Send</button>
    </div>
        
   </div> 
</template>

<script>
import mountains from '../assets/img/mountains.jpg'
export default {
    data (){
        return{
            mountains: mountains
        }
    }
}
</script>

<style scoped>
.countainer {
    display: flex;
    justify-content: center;
    padding: 0px 40px 0px 50px;
}

.photo{
    width: 320px;
}

.discribe{
    padding-left: 20px;
}

.text{
    text-align: justify;

}

.autor,
.delete{
    text-align: right;
    cursor: pointer;
}
</style>
