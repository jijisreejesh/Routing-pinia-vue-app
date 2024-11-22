<script setup>
import {ref} from 'vue';
import { useCartStore } from '../stores/cart';
const store=useCartStore();
const {addItems}=store;
const items=ref([
    {
        title : 'Hp',
        id:1
    },
    {
        title: 'Iphone X',
        id: 2
      },
      {
        title: 'Bag',
        id: 3
      },
      {
        title: 'Nike Shoes',
        id: 4
      },
      {
        title: 'Leather Belts',
        id: 5
      },
])
</script>

<template>
    <div v-for="i in items" :key="i.id">
        <h1>{{ i.title }}</h1>
        <button @click="addItems(i)">Add</button>
    </div>

</template>