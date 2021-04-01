<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
  </div>
</template>

<script lang="ts">
import ProjectService from "@/services/ProjectService";
import { AxiosResponse } from "node_modules/axios";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["id"],
  data() {
    return {
      project: null,
    };
  },
  created() {
    //Fetch project (by id) and set local data
    ProjectService.getProject(this.id)
      .then((response: AxiosResponse) => {
        this.project = response.data;
      })
      .catch((error: void) => {
        console.log(error);
      });
  },
});
</script>
