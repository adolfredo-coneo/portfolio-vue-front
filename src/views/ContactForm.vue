<template>
  <div class="max-w-7xl mx-auto pb-20 flex flex-col px-6">
    <div class="w-full border-b-2 border-blue-200 text-left mb-10">
      <h1 class="mb-2 text-2xl text-black font-semibold">CONTACT FORM</h1>
    </div>
    <form @submit.prevent="sendForm">
      <div class="max-w-5xl mx-auto shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-black sm:p-6">
          <div class="grid grid-cols-6 gap-6" v-if="!showMessage">
            <div class="col-span-6 sm:col-span-3">
              <BaseInput
                v-model="contact.name"
                label="Name"
                type="text"
                required
                id="name"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <BaseInput
                v-model="contact.email"
                label="Email"
                type="email"
                required
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
                  type="text"
                  id="company"
                />
              </div>
            </div>
            <div class="col-span-6">
              <BaseTextArea
                v-model="contact.message"
                label="What can I do for you?"
                required
                id="message"
              />
            </div>
            <div class="col-span-6">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-xl sm:text-2xl font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </div>
          <div class="text-xl sm:text-2xl" v-if="showMessage">
            <p>{{ messageResponse }}</p>
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
import ProjectService from "@/services/ProjectService";
import { AxiosResponse } from "node_modules/axios";

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
        name: "",
        email: "",
        messageType: "",
        message: "",
        company: "",
      },
      messageResponse:
        "Thank you for contacting me. I'll get back to you as soon as possible.",
      showMessage: false,
    };
  },
  methods: {
    sendForm() {
      ProjectService.sendContact(this.contact)
        .then((response: AxiosResponse) => {
          console.log("Response", response);
          this.showMessage = true;
        })
        .catch((error: void) => {
          console.log("Error", error);
        });
    },
  },
});
</script>
