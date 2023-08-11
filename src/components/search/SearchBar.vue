<script setup lang="ts">
import { computed } from 'vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <label for="search" class="relative">
    <SearchIcon class="absolute w-6 h-6 left-3 top-1/2 transform -translate-y-1/2" />
    <input
      v-model="value"
      type="search"
      id="search"
      placeholder="Start typing to search packages"
      class="input input-bordered w-full pl-11"
      autofocus
      autocomplete="off"
    />
  </label>
</template>
