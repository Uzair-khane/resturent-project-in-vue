<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)

function logout() {
  router.push({ name: 'login' })
  alert('You are successfully logged out')
}
</script>

<template>
  <nav
    id="navBar"
    class="bg-gradient-to-r from-slate-500 to-slate-700 flex justify-between items-center px-6 py-3 shadow-md"
  >
    <img
      class="w-[90px] h-[90px] rounded-full border-4 border-white shadow-lg"
      src="../assets/logo_for_signup-removebg-preview.png"
      alt="Logo"
    />

    <!-- Menu List -->
    <ul
      class="text-[17px] pl-[120px] sm:static top-0 transition-all sm:bg-transparent bg-slate-500 pt-[150px] gap-[50px] sm:h-auto h-screen fixed sm:w-auto w-[300px] text-white flex space-y-6 sm:flex-row flex-col sm:gap-[16px] p-10 sm:p-4 sm:pr-[40px] shadow-lg sm:shadow-none z-50"
      :class="[isMenuOpen ? 'left-0' : ' -left-[300px]']"
    >
      <li>
        <router-link
          to="/"
          class="hover:text-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out font-semibold tracking-wide"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          to="About"
          class="hover:text-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out font-semibold tracking-wide"
          >About</router-link
        >
      </li>
      <li>
        <router-link
          to="Manue"
          class="hover:text-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out font-semibold tracking-wide"
          >Menue</router-link
        >
      </li>
      <li>
        <router-link
          to="Vanue"
          class="hover:text-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out font-semibold tracking-wide"
          >Vanue</router-link
        >
      </li>
      <li>
        <button
          v-on:click="logout"
          class="bg-red-700 hover:bg-red-600 text-white rounded-md w-[90px] h-[40px] cursor-pointer shadow-md transition duration-300"
        >
          Log Out
        </button>
      </li>
    </ul>

    <!-- Hamburger / Close Icon -->
    <div class="block sm:hidden">
      <i
        @click="isMenuOpen = !isMenuOpen"
        :class="[
          'text-[30px] mr-[15px] mt-[20px] cursor-pointer text-white transition-transform duration-300 hover:scale-110',
          isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars',
        ]"
      ></i>
    </div>
  </nav>
</template>
