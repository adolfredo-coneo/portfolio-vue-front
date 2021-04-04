<template>
  <div
    class="max-w-7xl mx-auto mb-10 flex flex-col justify-center items-center"
  >
    <h1 class="text-5xl mb-10">{{ title }}</h1>
    <h2 class="w-3/4 text-3xl mb-10">{{ description }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegularPageHeader",
  props: {
    title: String,
    description: String,
  },
});
</script>
