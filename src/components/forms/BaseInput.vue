<template>
  <label
    v-if="label"
    :for="id"
    class="block text-2xl font-medium text-white text-left"
  >
    {{ label }}
  </label>
  <input
    v-bind="$attrs"
    :name="id"
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="h-14 mt-1 focus:ring-indigo-500 bg-gray-200 focus:border-indigo-500 block w-full shadow-sm text-2xl sm:text-xl border-gray-300 rounded-md text-black"
    :aria-describedby="error ? `${id}-error` : null"
    :aria-invalid="error ? true : null"
  />
  <p
    v-if="error"
    class="text-red-500"
    :id="`${id}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
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
    error: {
      type: String,
      default: "",
    },
  },
});
</script>
