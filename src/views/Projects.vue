<template>
  <div class="pt-20">
    <h1>This is the projects page</h1>
    <ProjectContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectContainer from "@/components/ProjectContainer.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Projects",
  components: {
    ProjectContainer,
  },
});
</script>
