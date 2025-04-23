<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from './Header.vue'

const router = useRouter()

onMounted(() => {
  const student = localStorage.getItem('user')

  if (!student) {
    router.push({ name: 'login' })
  }
})
</script>

<template>
  <Header />
  <h1>hello Welcome to Home Page</h1>
</template>
