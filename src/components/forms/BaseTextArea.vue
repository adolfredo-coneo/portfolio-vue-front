<template>
  <label
    v-if="label"
    :for="id"
    class="block text-2xl font-medium text-black text-left"
  >
    {{ label }}
  </label>
  <textarea
    v-bind="$attrs"
    :name="id"
    :id="id"
    @input="$emit('update:modelValue', $event.target.value)"
    :value="modelValue"
    class="h-52 shadow-sm focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 mt-1 block w-full text-2xl sm:text-xl border-gray-300 rounded-md text-black"
  >
  </textarea>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
});
</script>
