<template>
  <div class="max-w-7xl mx-auto flex flex-col px-6">
    <div class="w-full border-b-2 border-blue-200 text-left mb-10">
      <h1 class="mb-2 text-2xl text-black font-semibold">LATEST ARTICLES</h1>
    </div>
    <div class="flex flex-wrap mb-14 mt-6">
      <div class="blog-posts-wrapper text-black text-left">
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectService from "@/services/ProjectService";
import ArticleCard from "@/components/ArticleCard.vue"; // @ is an alias to /src
import { AxiosResponse } from "node_modules/axios";

export default defineComponent({
  name: "ProjectContainer",
  components: {
    ArticleCard,
  },
  props: {
    limit: Number,
  },
  data() {
    return {
      articles: null,
    };
  },
  created() {
    ProjectService.getArticles()
      .then((response: AxiosResponse) => {
        if (this.limit) {
          this.articles = response.data.slice(0, this.limit);
        } else {
          this.articles = response.data;
        }
      })
      .catch((error: void) => {
        console.log(error);
      });
  },
});
</script>
