<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginUser = ref({
  userName: '',
  email: '',
})
function onsubmit() {
  let existing = localStorage.getItem('user')
  let student = existing ? JSON.parse(existing) : alert('not found')
  const arr = [{ name: 'test' }]

  const isStudentExist = student.find((std) => {
    return std.username == loginUser.value.userName && std.email == loginUser.value.email
  })
  if (isStudentExist) {
    loginUser.value = {
      userName: '',
      email: '',
    }
    alert('your Successfully log in')

    router.push({ name: 'home' })
  } else {
    alert('username or password is invalid')
  }
}
</script>
<template>
  <!-- main div -->
  <div id="login-div">
    <!-- logo -->
    <img
      class="md:w-[250px] md:h-[250px] mx-auto mt-[5px] w-[200px] h-[200px]"
      src="../assets/logo for signup.jpg"
      alt=""
    />
    <h1 class="text-[24px] text-black font-bold text-center">Login</h1>
    <!-- form -->
    <div id="form" class="flex flex-col p-6 justify-center w-full md:w-[500px] md:mx-auto">
      <!-- input for name -->
      <input
        type="text"
        v-model="loginUser.userName"
        placeholder="Enter your Name"
        class="w-full bg-slate-100 border-none outline-none rounded-[5px] pl-[13px] text-[18px ] mx-auto mt-[25px] w-[350px] h-[50px]"
      />

      <!-- input for emil -->
      <input
        type="email"
        v-model="loginUser.email"
        placeholder="Enter your email"
        class="w-full bg-slate-100 border-none outline-none rounded-[5px] pl-[13px] text-[18px ] mx-auto mt-[25px] w-[350px] h-[50px]"
      />
      <!-- button -->
      <button
        v-on:click="onsubmit()"
        class="w-full mt-[20px] h-[40px] bg-red-700 rounded-[10px] text-white"
      >
        Login
      </button>
    </div>
  </div>
</template>
