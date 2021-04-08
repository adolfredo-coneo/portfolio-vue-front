<template>
  <input
    type="radio"
    v-bind="$attrs"
    :name="id"
    :id="id"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
  />
  <label v-if="label" :for="id">
    {{ label }}
  </label>
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
    value: {
      type: [String, Number],
      required: true,
    },
  },
});
</script>
