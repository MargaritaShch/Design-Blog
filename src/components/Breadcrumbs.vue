<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const breadCrumbs = computed(() => {
  if (typeof route.meta.breadCrumb === "function") {
    return route.meta.breadCrumb(route);
  }
  return route.meta.breadCrumb;
})
</script>

<template class ='breadcrumbs'>
  <ul >
    <li
        v-for="item in breadCrumbs"
        :key="item.text"
    >
      <router-link
        v-if="item.to"
        :to="item.to"
      >
        {{ item.text }}
      </router-link>
      <p v-else>{{ item.text }}</p>
    </li>
  </ul>
</template>

<style module lang="scss">
ul{
  display: flex;
  list-style: none;
    li{
      padding-left: 20px;
    }
    a{
    color: black;
    text-decoration: underline;
    font-size: 20px;
    
    &:hover{
      color: rgb(105, 105, 234);
    }
  }
    p{
      font-size: 20px;
        margin-top: -1px;
    }
}
</style>