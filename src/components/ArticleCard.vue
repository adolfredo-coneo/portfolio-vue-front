<template>
  <div class="blog-post-card mb-16 px-4 lg:px-16">
    <section class="blog-post-card-wrapper flex flex-wrap items-start flex-row">
      <div class="lg:w-3/5">
        <h1
          class="mb-3 text-2xl font-bold leading-tight tracking-tight blog-post-card-title lg:text-3xl text-brand-black dark:text-white"
        >
          <a
            aria-label="6 Basic Concepts To Getting Started as a ReactJS Developer"
            href="https://codingtheworld.hashnode.dev/6-basic-concepts-to-getting-started-as-a-reactjs-developer"
            target="_blank"
            >{{ article.title }}</a
          >
        </h1>
        <div
          class="blog-post-card-meta mb-3 text-sm text-brand-grey-700 dark:text-brand-grey-400 flex flex-row items-center flex-wrap"
        >
          <a
            aria-label="6 Basic Concepts To Getting Started as a ReactJS Developer"
            href="https://codingtheworld.hashnode.dev/6-basic-concepts-to-getting-started-as-a-reactjs-developer"
            class="mr-4 blog-post-card-time"
            target="_blank"
            >{{ article.date }}</a
          ><a
            aria-label="6 Basic Concepts To Getting Started as a ReactJS Developer min read"
            href="https://codingtheworld.hashnode.dev/6-basic-concepts-to-getting-started-as-a-reactjs-developer"
            class="flex flex-row items-center mr-4"
            target="_blank"
            ><svg class="w-4 h-4 mr-1 fill-current" viewBox="0 0 512 512">
              <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
              ></path></svg
            ><span>{{ article.time }} </span></a
          >
        </div>
        <p
          class="block w-full text-base leading-snug break-words blog-post-card-brief text-brand-grey-700 dark:text-brand-grey-400"
        >
          <a
            aria-label="6 Basic Concepts To Getting Started as a ReactJS Developer"
            href="https://codingtheworld.hashnode.dev/6-basic-concepts-to-getting-started-as-a-reactjs-developer"
            target="_blank"
            >{{ article.description }}</a
          >
        </p>
      </div>
      <div class="blog-post-card-cover mt-6 lg:mt-0 lg:pl-8 w-full lg:w-2/5">
        <a
          aria-label="6 Basic Concepts To Getting Started as a ReactJS Developer"
          href="https://codingtheworld.hashnode.dev/6-basic-concepts-to-getting-started-as-a-reactjs-developer"
          class="post-cover block bg-cover bg-center rounded-lg border dark:border-brand-grey-800 w-full"
          target="_blank"
          ><img :alt="article.title" :src="article.image"
        /></a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArticleCard",
  props: {
    article: Object,
  },
  data() {
    return {};
  },
});
</script>
