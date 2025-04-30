<script setup>
import Header from './Header.vue'
</script>
<template>
  <div
    id="body-main-div"
    class="bg-[linear-gradient(rgba(15,23,43,0.9),rgba(15,23,43,0.9)),url('/public/bg-hero.jpg')] bg-center bg-no-repeat bg-cover w-full md:h-[400px] h-[300px] mx-auto"
  >
    <Header />
    <h1 class="text-center mx-auto text-4xl text-white font-bold mt-[69px]">About us</h1>
  </div>
  <!-- main div for image gellary -->
  <div
    class="main mt-[80px] md:flex md:justify-center md:gap-[50px] sm:grid sm:grid-cols-1 sm:justify-center md:mx-auto w-full"
  >
    <div
      class="gellary sm:grid sm:grid-cols-2 sm:gap-[2px] flex flex-col gap-[15px] justify-center items-center sm:mx-auto sm:py-4"
    >
      <img src="/public/about-1.jpg" class="sm:w-[180px] sm:h-[180px] w-[300px] h-300px" alt="" />
      <img src="/public/about-2.jpg" class="sm:w-[200px] sm:h-[200px] w-[300px] h-300px" alt="" />
      <img src="/public/about-3.jpg" class="sm:w-[200px] sm:h-[200px] w-[300px] h-300px" alt="" />
      <img src="/public/about-4.jpg" class="sm:w-[180px] sm:h-[180px] w-[300px] h-300px" alt="" />
    </div>
    <div class="content sm:w-[600px] sm:mr-[100px] sm:mt-[50px] mx-auto px-7 ml-[20px] mt-[50px]">
      <h1 class="text-2xl font-mono text-yellow-500">About us___</h1>
      <h1 class="text-4xl font-sans text-slate-800 mt-5 font-bold">Welcome to Restoran</h1>
      <p class="mt-4 text-slate-700 text-[17px]">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos
        erat ipsum et lorem et sit, sed stet lorem sit. Tempor erat elitr rebum at clita. Diam dolor
        <br />
        <br />
        diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
        lorem sit clita duo justo magna dolore erat ame
      </p>
      <button
        class="bg-amber-500 mt-[30px] text-white px-6 py-3 rounded hover:bg-amber-600 transition md:ml-0"
      >
        Reed More
      </button>
    </div>
  </div>
</template>
