<template>
  <div class="max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row items-center">
    <div class="w-1/2 text-left">
      <h1 class="text-4xl mb-10">Adolfredo Coneo</h1>
      <h2 class="text-2xl mb-10 w-11/12">
        I'm a full-stack developer from Cartagena, Colombia, with over 10 years
        of experience in diverse companies, and with the ability to deliver
        high-level results in different types of projects.
      </h2>
      <div
        class="text-3xl w-10/12 font-bold rounded-xl bg-blue-400 text-white py-3 text-center cursor-pointer"
      >
        <router-link to="/projects">My Projects</router-link>
      </div>
    </div>
    <div class="w-1/2 flex justify-center">
      <!--<img alt="Vue logo" src="../assets/logo.png" />-->
      <img
        class="rounded-full"
        alt="Main Photo"
        src="https://www.sliderrevolution.com/wp-content/uploads/revslider/woocommerce-carousel-one-static/woo_product1.jpg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeHeader",
});
</script>
