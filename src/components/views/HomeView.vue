<script setup>
import {ref} from 'vue';
import { useCartStore } from '../stores/cart';
const store=useCartStore();
const {addItems}=store;
const items=ref([
    {
        title : 'Lavie',
        
        id:1
    },
    {
        title: 'Zouk',
        id: 2
      },
      {
        title: 'Storite',
        id: 3
      },
      {
        title: 'Yoyowing',
        id: 4
      },
      {
        title: 'woman marks',
        id: 5
      },
])
</script>

<template>
    <v-container>
    <v-row>
    <v-col cols="6" md="4" v-for="i in items" :key="i.id" class="h-100">
      <v-hover v-slot="{ isHovering, props }">
      <v-card class="d-flex align-center justify-center pa-5 flex-column bg-red-lighten-5"
        v-bind="props"
      :elevation="isHovering ? 24 : 2">
      
     <v-card-item-title>{{ i.title }}</v-card-item-title>
     <v-btn @click="addItems(i)">Add</v-btn>
    </v-card>
  </v-hover>
  
    </v-col>
    </v-row>
    </v-container>

</template>