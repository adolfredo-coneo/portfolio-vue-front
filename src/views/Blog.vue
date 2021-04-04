<template>
  <div class="pt-20">
    <section id="blog-header">
      <RegularPageHeader :title="title" :description="description" />
    </section>
    <section id="blog-info"></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegularPageHeader from "@/components/RegularPageHeader.vue";

export default defineComponent({
  name: "Blog",
  components: {
    RegularPageHeader,
  },
  data() {
    return {
      title: "Blogging",
      description: "These are some of the articles I've written recently.",
    };
  },
});
</script>
