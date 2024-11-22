// <script setup>
 import { useCartStore } from '../stores/cart';
import { storeToRefs } from "pinia";//it helps to add reactivity to the state
const store=useCartStore();
 const {removeItems}=store;
const {cartItems} =storeToRefs(store);
</script>
<template>
    <div>
      <h1>This is the cartView page</h1>
      <div v-if="cartItems.length>0">
        <div v-for="i in cartItems" >
            <h1>{{ i.title }}</h1>
            <button v-on:click="removeItems(i.id)">Remove</button>
        </div>
      </div>
      <main v-else>
        <h2>There is nothing in your cart</h2>
      </main>
    </div>
  </template>