<template>
  <label :for="id" class="block text-2xl font-medium text-gray-700 text-left">
    {{ label }}
  </label>
  <input
    v-bind="$attrs"
    :name="id"
    :id="id"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue'.$event.target.value)"
    class="h-14 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-2xl sm:text-xl border-gray-300 rounded-md"
  />
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
      type: [String, Number],
      default: "",
    },
  },
});
</script>
