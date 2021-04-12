<template>
  <div class="home items-center">
    <section id="header">
      <HomeHeader />
    </section>
    <HeaderDivider />
    <section class="bg-white pt-10" id="projects">
      <ProjectContainer />
    </section>
    <section class="bg-white pt-10" id="articles">
      <ArticleContainer limit="2" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/HomeHeader.vue";
import HeaderDivider from "@/components/HeaderDivider.vue";
import ProjectContainer from "@/components/ProjectContainer.vue";
import ArticleContainer from "@/components/ArticleContainer.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeHeader,
    HeaderDivider,
    ProjectContainer,
    ArticleContainer,
  },
  data() {
    return {};
  },
});
</script>
