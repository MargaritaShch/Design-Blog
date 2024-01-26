<template>
    <div :class ="$style.header">
      <div :class ="$style.logo">
        <h1>LODI</h1> 
        <br/>
      </div>

    <div :class="$style.breadcrumbs">
      <Breadcrumbs/>
    </div>

  </div> 
</template>

<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue';
</script>

<style module lang="scss">
.header {
  justify-content: center;

  .logo {
    h1 {
      font-size: 45px;
      text-align: center;
      letter-spacing: 15px;
      color: black;
      font-weight: bold;
      padding-top: 20px;
    }
  }
}
  .breadcrumbs {
    display: flex;
    justify-content: left;
    padding-left: 70px;

    @media (min-width: 992px) {
      padding-left: 5px;
    }

    @media (min-width: 1536px) {
      padding-left: 220px;
    }

    @media (min-width: 1920px) {
      padding-left: 230px;
  }
}

</style>