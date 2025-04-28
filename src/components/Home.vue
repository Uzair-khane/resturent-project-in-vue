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
  <!-- body section -->

  <div
    id="body-main-div"
    class="bg-[linear-gradient(rgba(15,23,43,0.9),rgba(15,23,43,0.9)),url('/public/bg-hero.jpg')] bg-center bg-no-repeat bg-cover w-full h-[700px] mx-auto"
  >
    <div class="c">
      <Header />
      <div id="body-data-parent " class="flex justify-center">
        <div id="tittle" class="mt-[60px]">
          <h1
            class="sm:text-4xl md:text-5xl md:mt[120x] md:ml-[100px] mx-auto text-4xl font-bold text-white w-[300px] font-sans md:leading-20 leading-15 md:w-[600px]"
          >
            Enjoy Our Delicious Meal
          </h1>
          <p
            class="text-center sm:text-left sm:ml[100px] w-[300px] mx-auto text-white mt-[30px] md:ml-[100px] text-left md:text-1xl md:w-[500px]"
          >
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
            eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore
            erat amet
          </p>
          <button
            class="bg-amber-500 mt-[30px] md:ml-[100px] text-1xl p-[3px] text-white md:h-[50px] md:w-[200px] rounded-[3px]"
          >
            BOOK A TABLE
          </button>
        </div>
        <div id="spainer-img" class="">
          <img src="/public/hero.png" class="spin-image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Define the spin animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Apply the animation to the image */
img {
  animation: spin 25s linear infinite; /* 3s duration, infinite loop */
}
</style>
