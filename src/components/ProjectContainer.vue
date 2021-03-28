<template>
  <div class="max-w-7xl mx-auto flex flex-col">
    <div class="w-full border-b-2 border-blue-200 text-left mb-20">
      <h1 class="mb-2 text-2xl">Recent Projects</h1>
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
import ProjectCard from "@/components/ProjectCard.vue"; // @ is an alias to /src

export default defineComponent({
  name: "ProjectContainer",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          category: "Front-End",
          title: "Reado Kids",
          description:
            "Web App designed to teach kids how to read in Spanish in a fun and entertaining way.",
          date: "October, 2020",
          stack: ["ReactJs", "Javascript", "TailwindCSS", "Apollo Client"],
          hosted: "Netlify",
          link: "https://readokids.app/",
          image: "",
          status: true,
        },
        {
          id: 2,
          category: "Back-End",
          title: "GraphQL API for Reado Kids",
          description: "Back-End Reado Kids Description",
          date: "November, 2020",
          stack: [
            "NodeJS",
            "Typescript",
            "Express",
            "GraphQL",
            "PostgreSQL on AWS",
          ],
          hosted: "Heroku",
          link: "",
          image: "",
          status: true,
        },
      ],
    };
  },
});
</script>
