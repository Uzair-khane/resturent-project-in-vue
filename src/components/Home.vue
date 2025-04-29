<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from './Header.vue'
import cards from './cards.vue'

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
    class="bg-[linear-gradient(rgba(15,23,43,0.9),rgba(15,23,43,0.9)),url('/public/bg-hero.jpg')] bg-center bg-no-repeat bg-cover w-full md:h-[600px] h-[800px] mx-auto"
  >
    <div class="c">
      <Header />
      <div
        id="body-data-parent"
        class="flex flex-col xl:flex-row xl:justify-center md:flex-row items-center px-4"
      >
        <!-- Text Section -->
        <div
          id="title"
          class="mt-[60px] md:mt-[80px] text-center md:text-left mx-auto md:px-20 sm:px-10 px-8 md:w-[700px]"
        >
          <h1
            class="text-4xl sm:text-4xl md:text-5xl font-bold text-white font-sans leading-tight mx-auto md:mx-auto"
          >
            Enjoy Our Delicious Meal
          </h1>
          <p class="text-white mx-auto md:mx-auto">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
            eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore
            erat amet.
          </p>
          <button
            class="bg-amber-500 mt-[30px] text-white px-6 py-3 rounded hover:bg-amber-600 transition md:ml-0"
          >
            BOOK A TABLE
          </button>
        </div>

        <!-- Image Section -->
        <div
          id="spainer-img"
          class="mt-10 md:mt-[30px] md:ml-10 flex justify-center items-center mx-auto box-border px-4 sm:px-6 md:px-8"
        >
          <img
            src="/public/hero.png"
            alt="Delicious Meal"
            class="spin-image w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- cards section -->
  <cards />
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
  animation: spin 40s linear infinite; /* 3s duration, infinite loop */
}
</style>
