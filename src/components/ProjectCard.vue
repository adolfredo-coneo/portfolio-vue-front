<template>
  <div class="project-card">
    <!-- Display Project Data -->
    <span>@ {{ project.date }} </span>
    <h4>{{ project.title }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
  props: {
    project: Object,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project-card {
  @apply mt-20;
  @apply p-20;
}
</style>
