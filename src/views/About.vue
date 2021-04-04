<template>
  <div class="pt-20">
    <section id="about-header">
      <RegularPageHeader :title="title" :description="description" />
    </section>
    <section id="personal-info"></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegularPageHeader from "@/components/RegularPageHeader.vue";

export default defineComponent({
  name: "About",
  components: {
    RegularPageHeader,
  },
  data() {
    return {
      title: "About Me",
      description: "This is just who I am",
    };
  },
});
</script>
