<template>
  <div class="pt-20">
    <section id="project-header">
      <RegularPageHeader :title="title" :description="description" />
    </section>
    <HeaderDivider />
    <section class="bg-white pt-10" id="projects">
      <ProjectContainer />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectContainer from "@/components/ProjectContainer.vue"; // @ is an alias to /src
import HeaderDivider from "@/components/HeaderDivider.vue";
import RegularPageHeader from "@/components/RegularPageHeader.vue";

export default defineComponent({
  name: "Projects",
  components: {
    ProjectContainer,
    RegularPageHeader,
    HeaderDivider,
  },
  data() {
    return {
      title: "Recent Projects",
      description:
        "These are some of the recent Front-End and Back-End projects I've been working lately.",
    };
  },
  mounted: function () {
    window.scrollTo(0, 0);
  },
});
</script>
