<template>
  <nav
    :class="{ scrolled: !view.atTopOfPage }"
    class="fixed w-full pt-6 m-auto top-0 animate text-white"
  >
    <div className="max-w-7xl flex justify-between items-center mx-auto px-6">
      <div
        class="flex items-center justify-center h-12 font-black text-2xl sm:text-3xl"
      >
        <router-link :to="{ name: 'Home' }">
          <span class="text-yellow-400">{&nbsp;</span>
          <span class="">adolConeo</span>
          <span class="text-yellow-400">&nbsp;}</span>
        </router-link>
      </div>
      <div class="hidden md:flex gap-6 text-xl font-semibold">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'Projects' }">Projects</router-link>
        <router-link :to="{ name: 'Blog' }">Blog</router-link>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
      </div>
      <div class="flex md:hidden">
        <!-- Mobile menu button -->
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-yellow-400 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          @click="handleClickMenu"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            class="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div
      :class="{ classMovilMenu: !movilMenuOpen }"
      class="md:hidden"
      id="mobile-menu"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          :to="{ name: 'Home' }"
          >Home</router-link
        >
        <router-link
          class="text-black hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          :to="{ name: 'About' }"
          >About</router-link
        >
        <router-link
          class="text-black hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          :to="{ name: 'Projects' }"
          >Projects</router-link
        >
        <router-link
          class="text-black hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          :to="{ name: 'Blog' }"
          >Blog</router-link
        >
        <router-link
          class="text-black hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          :to="{ name: 'Contact' }"
          >Contact</router-link
        >
      </div>
    </div>
    <div
      className="max-w-7xl flex justify-between items-center mx-4 xl:hidden px-4 sm:px-8 border-b-2 border-blue-400"
    ></div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0 mt-2" />
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
      movilMenuOpen: false,
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
        this.movilMenuOpen = false;
      }
    },
    handleClickMenu() {
      if (!this.movilMenuOpen) {
        this.movilMenuOpen = true;
        this.view.atTopOfPage = false;
      } else {
        this.movilMenuOpen = false;
        this.view.atTopOfPage = true;
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
  @apply bg-white;
  @apply bg-opacity-90;
  @apply text-black;
}

.classMovilMenu {
  @apply hidden;
}
</style>
