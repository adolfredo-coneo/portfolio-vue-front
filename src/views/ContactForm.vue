<template>
  <div class="max-w-7xl mx-auto flex flex-col">
    <div class="w-full border-b-2 border-blue-200 text-left mb-10 shadow-lg">
      <h1 class="mb-2 text-2xl">CONTACT FORM</h1>
    </div>
    <form>
      <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-blue-400 sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <BaseInput
                v-model="contact.name"
                label="Name"
                type="text"
                id="name"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <BaseInput
                v-model="contact.email"
                label="Email"
                type="email"
                id="email"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <BaseSelect
                :options="categories"
                v-model="contact.messageType"
                label="Message Type"
                id="messageType"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <div class="col-span-6 sm:col-span-3">
                <BaseInput
                  v-model="contact.company"
                  label="Company"
                  type="company"
                  id="company"
                />
              </div>
            </div>
            <div class="col-span-6">
              <BaseTextArea
                v-model="contact.email"
                label="What can I do for you?"
                id="message"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "@/components/forms/BaseInput.vue";
import BaseSelect from "@/components/forms/BaseSelect.vue";
import BaseTextArea from "@/components/forms/BaseTextArea.vue";

export default defineComponent({
  name: "ContactForm",
  components: {
    BaseInput,
    BaseSelect,
    BaseTextArea,
  },
  data() {
    return {
      categories: ["General Question", "New Project", "Job Offer"],
      contact: {
        category: "",
        name: "",
        email: "",
        messageType: "",
        message: "",
        company: "",
      },
    };
  },
});
</script>
