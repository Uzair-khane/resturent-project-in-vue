<script setup>
import { onMounted } from 'vue'
import Signup from './components/signup.vue'
async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  console.log(data)
}

onMounted(() => {
  getProducts()
})
</script>

<template>
  <Signup />

  <!-- <RouterView /> -->
</template>
