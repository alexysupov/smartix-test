<script setup>
import {computed} from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:modelValue'])

const customModel = computed({
  set: (v) => emits('update:modelValue', v),
  get: () => props.modelValue
})
</script>

<template>
  <input
      v-model="customModel"
      v-bind="{ placeholder }"
  >
</template>

<style scoped lang="scss">
input {
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 4px;
}
</style>