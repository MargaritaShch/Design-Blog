<template>
<div class="posts">
    <div clas='menu'>
        <ul>
            <li>Back to Home Page</li>
        </ul>
    </div>
    <div class="block">
        <div class =''>
            <img :src='mountains' alt ='photo' class ='photo'>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.</p>
        </div>
        <div>
            <img :src='mountains' alt ='photo' class ='photo'>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.</p>
        </div>
        <div>
            <img :src='mountains' alt ='photo' class ='photo'>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.</p>
        </div>
    </div>
    
    <div class="block">
        <div >
            <img :src='mountains' alt ='photo' class ='photo'>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.</p>
        </div>
        <div>
            <img :src='mountains' alt ='photo' class ='photo'>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.</p>
        </div>
        <div>
            <img :src='mountains' alt ='photo' class ='photo'>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida magna. Sed feugiat mi at magna efficitur, ut ultricies felis scelerisque.</p>
        </div>
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

.block{
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
}
h4, p{
    color: black;
    text-align: center;
}

.photo{
    width: 270px;
}
</style>
