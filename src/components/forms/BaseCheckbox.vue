<template>
  <div class="flex items-start">
    <div class="flex items-center h-5">
      <input
        type="checkbox"
        :name="id"
        :id="id"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="h-6 focus:ring-indigo-500 w-6 text-indigo-600 border-gray-300 rounded"
      />
    </div>
    <div class="ml-3 text-sm">
      <label
        v-if="label"
        :for="id"
        class="block text-2xl font-medium text-gray-700"
      >
        {{ label }}
      </label>
    </div>
  </div>
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
      type: Boolean,
      default: false,
    },
  },
});
</script>
