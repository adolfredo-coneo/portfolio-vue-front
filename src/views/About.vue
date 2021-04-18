<template>
  <div class="pt-20">
    <section id="about-header">
      <RegularPageHeader :title="title" :description="description" />
    </section>
    <HeaderDivider />
    <section id="personal-info" class="bg-white pt-10"><Profile /></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegularPageHeader from "@/components/RegularPageHeader.vue";
import HeaderDivider from "@/components/HeaderDivider.vue";
import Profile from "@/components/Profile.vue";

export default defineComponent({
  name: "About",
  components: {
    RegularPageHeader,
    HeaderDivider,
    Profile,
  },
  data() {
    return {
      title: "About Me",
      description: "This is just who I am",
    };
  },
  mounted: function () {
    window.scrollTo(0, 0);
  },
});
</script>
