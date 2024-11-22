<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterLink to="/"> Home </RouterLink>
  <RouterLink to="/cart"> Cart</RouterLink>
  <RouterView/>
</template>


