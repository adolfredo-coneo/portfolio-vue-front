<template>
  <div class="pt-20">
    <section id="contact-header">
      <RegularPageHeader :title="title" :description="description" />
    </section>
    <HeaderDivider />
    <section id="contact-form" class="bg-white pt-10">
      <ContactForm />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegularPageHeader from "@/components/RegularPageHeader.vue";
import HeaderDivider from "@/components/HeaderDivider.vue";
import ContactForm from "@/views/ContactForm.vue";

export default defineComponent({
  name: "Contact",
  components: {
    RegularPageHeader,
    HeaderDivider,
    ContactForm,
  },
  data() {
    return {
      title: "Contact Me",
      description:
        "Don't hesitate to contact me if you have any questions or project ideas. I'll get back to you as soon as possible.",
    };
  },
});
</script>
