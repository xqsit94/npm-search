<script setup lang="ts">
import CopyBoard from '@/components/others/CopyBoard.vue'

defineProps<{
  packageName: string
  packageVersion: string
}>()
</script>

<template>
  <div v-if="packageName" class="mt-4 flex flex-row flex-wrap gap-3">
    <CopyBoard
      :text-to-copy="`npm i ${packageName}@${packageVersion}`"
      bg-class="bg-primary/20 hover:bg-primary-focus/20"
    />
    <CopyBoard
      :text-to-copy="`yarn add ${packageName}@${packageVersion}`"
      bg-class="bg-secondary/20 hover:bg-secondary-focus/20"
    />
    <CopyBoard
      :text-to-copy="`pnpm add ${packageName}@${packageVersion}`"
      bg-class="bg-accent/20 hover:bg-accent-focus/20"
    />
  </div>
</template>
