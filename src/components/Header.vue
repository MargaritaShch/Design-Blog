<template>
    <div class ='header'>
      <button>SUBSCRIBE</button>
      <div class ='logo'>
        <h1>LODI</h1> 
        <br/>
        <p>Stories About Design</p>
      </div>
      <p class ='item-menu'>MENU</p>
  </div> 
</template>

<script>
// import './assets/main.scss';
export default {

}   
</script>

<style scoped>



.header{
  display: flex;
  justify-content: space-between;
  padding: 20px 50px 20px 50px; 
}

.header button{
  margin-top: 30px;
  width: 150px;
  height: 40px;
  background: rgba(207, 204, 204, 0.234);
  border: 0.2px solid rgba(0, 0, 0, 0.225);
  font-size: 18px;
  border-radius: 5px;
}


.header button:hover{
  background: rgba(176, 173, 173, 0.705);
}

.logo h1{
  text-align: center;
  letter-spacing: 15px;
  color: black;
  font-weight: bold;
 
}

.logo p{
  text-align: center;
  display: block;
  margin-top: -30px;
  font-size: 18px;
}

.item-menu{
  margin-top: 30px;
  font-size: 25px;
}
</style>