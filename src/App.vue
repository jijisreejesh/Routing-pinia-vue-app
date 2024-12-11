<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterLink class="links" to="/"> Home </RouterLink>
  <RouterLink class="links" to="/cart"> Cart</RouterLink>
  <RouterView/>
</template>


<style>
.links{
  font-size: 20px;
 color: rgb(8, 61, 206);
padding-left: 20px;
 padding-top: 20px;
  text-decoration: none; 
  margin-right: 20px;

}
</style>