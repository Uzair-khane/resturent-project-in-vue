<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()

// Form data
const formdata = ref({
  username: '',
  email: '',
  password: '',
})

// Submit function
function onsubmit() {
  alert('Successfully submitted')

  // Get existing data from localStorage
  const existing = localStorage.getItem('student-Detail')

  // Parse to array or start with empty array
  const students = existing ? JSON.parse(existing) : []

  // Push new student record
  students.push({ ...formdata.value })

  // Save back to localStorage
  localStorage.setItem('user', JSON.stringify(students))

  // Reset form
  formdata.value = {
    username: '',
    email: '',
    password: '',
  }
  router.push({ name: 'home' })
}

onMounted(() => {})
</script>
<template>
  <div id="signdiv" class="flex flex-col justify-center">
    <img
      class="md:w-[250px] md:h-[250px] mx-auto mt-[5px] w-[200px] h-[200px]"
      src="../assets/logo for signup.jpg"
      alt=""
    />
    <h1 class="text-[24px] text-black font-bold text-center">Sign Up</h1>
    <!-- form -->
    <div id="form" class="flex flex-col p-6 justify-center w-full md:w-[500px] md:mx-auto">
      <!-- input for name -->
      <input
        type="text"
        v-model="formdata.username"
        placeholder="Enter your Name"
        class="w-full bg-slate-100 border-none outline-none rounded-[5px] pl-[13px] text-[18px ] mx-auto mt-[25px] w-[350px] h-[50px]"
      />

      <!-- input for emil -->
      <input
        type="email"
        v-model="formdata.email"
        placeholder="Enter your email"
        class="w-full bg-slate-100 border-none outline-none rounded-[5px] pl-[13px] text-[18px ] mx-auto mt-[25px] w-[350px] h-[50px]"
      />
      <!-- input for password -->
      <input
        type="password"
        placeholder="Enter your Email password"
        v-model="formdata.password"
        class="w-full bg-slate-100 border-none outline-none rounded-[5px] pl-[13px] text-[18px ] mx-auto mt-[25px] w-[350px] h-[50px]"
      />
      <!-- button -->
      <button
        v-on:click="onsubmit()"
        class="w-full mt-[20px] h-[40px] bg-red-700 rounded-[10px] text-white"
      >
        Sign UP
      </button>
    </div>
  </div>
</template>
