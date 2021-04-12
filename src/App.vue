<template>
  <header>
    <NavBar />
  </header>
  <main>
    <h1 class="pt-24"></h1>
    <div class="">
      <router-view />
    </div>
  </main>
  <footer><ContactFooter /> <Footer /></footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ContactFooter from "./components/ContactFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Footer,
    ContactFooter,
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
