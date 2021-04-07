<template>
  <BaseRadio
    v-for="option in options"
    :key="option.value"
    :label="option.label"
    :value="option.value"
    :name="id"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseRadio from "./BaseRadio.vue";

export default defineComponent({
  components: { BaseRadio },
  props: {
    options: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
});
</script>
