<script setup lang="ts">
import { roundScore } from '@/utils/functions'

withDefaults(
  defineProps<{
    score: number
    size?: number
    thickness?: number
    className?: string
    textSize?: string
  }>(),
  {
    size: 2,
    thickness: 2,
    textSize: 'xs'
  }
)
</script>

<template>
  <div
    class="radial-progress"
    :class="className"
    :style="`--value: ${roundScore(score)}; --size: ${size}rem; --thickness: ${thickness}px`"
  >
    <span :class="`text-${textSize}`">{{ roundScore(score) }}</span>
  </div>
</template>
