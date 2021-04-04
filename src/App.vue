<template>
  <header>
    <NavBar />
  </header>
  <main>
    <h1 class="pt-24"></h1>
    <div class="px-6">
      <router-view />
    </div>
  </main>
  <footer><Footer /></footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Footer,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
</style>
