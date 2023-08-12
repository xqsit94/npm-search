<script setup lang="ts">
defineProps<{
  search: string
  from: number
  total: number
}>()
</script>

<template>
  <div class="flex flex-row justify-between my-4">
    <div class="flex-1 hidden md:block">
      <h1 class="font-bold">Search results for: {{ search }}</h1>
    </div>
    <div class="flex-none">
      <p>{{ `viewing ${from} of ${total} results` }}</p>
    </div>
  </div>
</template>
