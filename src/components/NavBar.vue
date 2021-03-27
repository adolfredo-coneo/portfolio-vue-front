<template>
  <nav
    :class="{ scrolled: !view.atTopOfPage }"
    class="fixed w-full p-8 m-auto top-0 animate"
  >
    <div
      className="max-w-7xl flex justify-between border-b-2 border-blue-400 items-center mx-auto px-4 sm:px-0"
    >
      <div class="flex items-center justify-center h-12 font-black text-3xl">
        <span class="text-yellow-400">{&nbsp;</span>
        <span class="text-red-500">adolConeo</span>
        <span class="text-yellow-400">&nbsp;}</span>
      </div>
      <div class="flex text-red-500 text-xl font-semibold">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  props: {},
  // it's 'view' state - ie loading,
  // or in this case, if the user is at the top of the page or not
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    };
  },
  // a beforeMount call to add a listener to the window
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
});
</script>

<style scoped lang="scss">
nav {
  z-index: 10;
}

nav.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
}

nav a {
  @apply ml-6;
}
</style>
