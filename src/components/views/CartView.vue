<script setup>
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia"; //it helps to add reactivity to the state
const store = useCartStore();
const { removeItems } = store;
const { cartItems } = storeToRefs(store);
</script>
<template>
  <h1>Your cart</h1>
  <v-container class="bg-grey">
    <div v-if="cartItems.length > 0">
      <v-card
        v-for="i in cartItems"
        class="pa-10 ma-5 d-flex flex-row justify-space-around bg-primary text-h4"
      >
        <v-card-item-title>{{ i.title }}</v-card-item-title>
        <v-btn @click="removeItems(i.id)">Remove</v-btn>
      </v-card>
    </div>
    <main v-else>
      <h2>There is nothing in your cart</h2>
    </main>
  </v-container>
</template>
