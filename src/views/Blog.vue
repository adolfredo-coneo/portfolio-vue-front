<template>
  <div class="pt-20">
    <section id="blog-header">
      <RegularPageHeader :title="title" :description="description" />
    </section>
    <HeaderDivider />
    <section id="blog-info" class="bg-white pt-10">
      <ArticleContainer />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegularPageHeader from "@/components/RegularPageHeader.vue";
import HeaderDivider from "@/components/HeaderDivider.vue";
import ArticleContainer from "@/components/ArticleContainer.vue";

export default defineComponent({
  name: "Blog",
  components: {
    RegularPageHeader,
    HeaderDivider,
    ArticleContainer,
  },
  data() {
    return {
      title: "Blogging",
      description: "These are some of the articles I've written recently.",
    };
  },
});
</script>
