<script setup lang="ts">
import CopyBoard from '@/components/others/CopyBoard.vue'

defineProps<{
  packageName: string
}>()
</script>

<template>
  <div v-if="packageName" class="mt-4 flex flex-row gap-3">
    <CopyBoard
      :text-to-copy="`npm i ${packageName}`"
      bg-class="bg-primary/20 hover:bg-primary-focus/20"
    />
    <CopyBoard
      :text-to-copy="`yarn add ${packageName}`"
      bg-class="bg-secondary/20 hover:bg-secondary-focus/20"
    />
    <CopyBoard
      :text-to-copy="`pnpm add ${packageName}`"
      bg-class="bg-accent/20 hover:bg-accent-focus/20"
    />
  </div>
</template>
