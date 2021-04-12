<template>
  <div class="max-w-7xl mx-auto flex flex-col">
    <div class="w-full border-b-2 border-blue-200 text-left mb-10">
      <h1 class="mb-2 text-2xl text-black font-semibold">ABOUT ME</h1>
    </div>
    <div class="flex flex-wrap mb-10">
      <div class="w-5/6 sm:w-1/2 text-justify text-black text-2xl">
        <p class="mb-6 sm:mt-5">
          My name is Adolfredo Coneo, I'm a software developer currently located
          in Cartagena, Colombia.
        </p>
        <p class="mb-6">
          I'm a passionate developer with over ten years of experience in great
          companies. I can deliver high-level results in different types of
          projects.
        </p>
        <p class="mb-6">
          I have worked throughout my career in different Front and Backend
          positions.
        </p>
        <p class="mb-6">
          I've been working on a project called Reado Kids, which aims to help
          children in their path to learning how to read.
        </p>
      </div>
      <div class="w-full sm:w-1/2 flex justify-center items-center">
        <img
          class="rounded-md shadow-lg"
          alt="Profile Photo 2"
          src="assets/adol_2.png"
        />
      </div>
    </div>
    <ArticleContainer limit="2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArticleContainer from "./ArticleContainer.vue";

export default defineComponent({
  name: "Profile",
  components: { ArticleContainer },
});
</script>
