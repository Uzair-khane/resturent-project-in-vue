<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <!-- cards main div -->
  <div
    class="cards w-full mt-[50px] px-4 lg:flex lg:flex-row mx-auto lg:gap-[2px] md:grid md:grid-cols-2 md:gap-[8px] sm:px-9 flex flex-col gap-[15px]"
  >
    <!-- card 1 -->
    <div
      class="card1 group bg-white hover:bg-amber-400 md:w-[250px] md:h-[300px] md:mx-auto md:px-4 shadow-lg rounded-[3px] transition duration-300"
    >
      <i
        class="fa-solid fa-user-tie text-5xl px-3 py-5 text-yellow-500 group-hover:text-white transition duration-300"
      ></i>

      <h1
        class="text-[22px] px-3 font-bold text-black group-hover:text-white transition duration-300"
      >
        Master Chefs
      </h1>

      <p
        class="text-[16px] text-slate-700 px-3 mt-4 group-hover:text-white transition duration-300"
      >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
      </p>
    </div>

    <!-- card 2 -->
    <div
      class="card1 group bg-white hover:bg-amber-400 md:w-[250px] md:h-[300px] md:mx-auto md:px-4 shadow-lg rounded-[3px] transition duration-300"
    >
      <i
        class="fa-solid fa-utensils text-5xl px-3 py-5 text-yellow-500 group-hover:text-white transition duration-300"
      ></i>

      <h1
        class="text-[22px] px-3 font-bold text-black group-hover:text-white transition duration-300"
      >
        Quality Food
      </h1>

      <p
        class="text-[16px] text-slate-700 px-3 mt-4 group-hover:text-white transition duration-300"
      >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
      </p>
    </div>
    <!-- card 3
      -->

    <div
      class="card1 group bg-white hover:bg-amber-400 md:w-[250px] md:h-[300px] md:mx-auto md:px-4 shadow-lg rounded-[3px] transition duration-300"
    >
      <i
        class="fa-solid fa-truck text-5xl px-3 py-5 text-yellow-500 group-hover:text-white transition duration-300"
      ></i>

      <h1
        class="text-[22px] px-3 font-bold text-black group-hover:text-white transition duration-300"
      >
        Online Order
      </h1>

      <p
        class="text-[16px] text-slate-700 px-3 mt-4 group-hover:text-white transition duration-300"
      >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
      </p>
    </div>

    <!-- card 4 -->
    <div
      class="card1 group bg-white hover:bg-amber-400 md:w-[250px] md:h-[300px] md:mx-auto md:px-4 shadow-lg rounded-[3px] transition duration-300"
    >
      <i
        class="fa-brands fa-servicestack text-5xl px-3 py-5 text-yellow-500 group-hover:text-white transition duration-300"
      ></i>

      <h1
        class="text-[22px] px-3 font-bold text-black group-hover:text-white transition duration-300"
      >
        24/7 Service
      </h1>

      <p
        class="text-[16px] text-slate-700 px-3 mt-4 group-hover:text-white transition duration-300"
      >
        Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
      </p>
    </div>
  </div>
</template>
