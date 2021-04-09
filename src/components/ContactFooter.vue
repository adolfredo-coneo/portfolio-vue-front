<template>
  <div class="py-10 bg-gray-800">
    <div class="max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row items-center">
      <div class="w-2/2 md:w-1/2 text-left order-last md:order-first">
        <h1 class="text-4xl mb-10">Get in Touch</h1>
        <h2 class="text-2xl mb-10 w-11/12">Let's talk about something.</h2>
        <div
          class="text-2xl w-6/12 font-bold rounded-xl bg-blue-400 text-white py-3 text-center cursor-pointer"
        >
          <router-link to="/contact">Contact Me</router-link>
        </div>
      </div>
      <div class="w-2/2 md:w-1/2 mb-4 md:mb-0 flex justify-center">
        <ul>
          <li>
            <span>
              <svg
                class="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            ado.coneo@gmail.com
          </li>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactFooter",
});
</script>
