<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from './header.vue'

const router = useRouter()

onMounted(() => {
  const student = localStorage.getItem('user')
  if (!student) {
    router.push({ name: 'signup' })
  }
})
</script>

<template>
  <Header />
  <h1>Welcome to Home Page</h1>
</template>
