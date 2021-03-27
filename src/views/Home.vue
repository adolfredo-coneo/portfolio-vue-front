<template>
  <div class="home items-center pt-6">
    <section id="header">
      <HomeHeader />
    </section>
    <section id="projects">
      <ProjectContainer />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/HomeHeader.vue";
import ProjectContainer from "@/components/ProjectContainer.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeHeader,
    ProjectContainer,
  },
  data() {
    return {};
  },
});
</script>
