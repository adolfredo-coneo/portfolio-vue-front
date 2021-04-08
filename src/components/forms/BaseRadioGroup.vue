<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{ horizontal: !vertical }"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :name="id"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
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
    vertical: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.horizontal {
  @apply mr-10;
}
</style>
