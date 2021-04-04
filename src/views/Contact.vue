<template>
  <div class="pt-20">
    <section id="contact-header">
      <RegularPageHeader :title="title" :description="description" />
    </section>
    <section id="contact-form">
      <ContactForm />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegularPageHeader from "@/components/RegularPageHeader.vue";
import ContactForm from "@/views/ContactForm.vue";

export default defineComponent({
  name: "Contact",
  components: {
    RegularPageHeader,
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
