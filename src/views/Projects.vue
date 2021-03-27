<template>
  <div class="pt-20">
    <h1>This is the projects page</h1>
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
  name: "Projects",
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
          description: "Reado Kids Description",
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
