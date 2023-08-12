<script setup lang="ts">
import { roundScore } from '@/utils/functions'

defineProps<{
  score: number
}>()
</script>

<template>
  <div
    class="radial-progress"
    :style="`--value: ${roundScore(score)}; --size: 2rem; --thickness: 2px`"
  >
    <span class="text-xs">{{ roundScore(score) }}</span>
  </div>
</template>
