<template>
  <div class="max-w-7xl mx-auto flex flex-col px-6">
    <div class="w-full border-b-2 border-blue-200 text-left mb-10">
      <h1 class="mb-2 text-2xl text-black font-semibold">RECENT PROJECTS</h1>
    </div>
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectService from "@/services/ProjectService";
import ProjectCard from "@/components/ProjectCard.vue"; // @ is an alias to /src
import { AxiosResponse } from "node_modules/axios";

export default defineComponent({
  name: "ProjectContainer",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: null,
    };
  },
  created() {
    ProjectService.getProjects()
      .then((response: AxiosResponse) => {
        this.projects = response.data;
      })
      .catch((error: void) => {
        console.log(error);
      });
  },
});
</script>
