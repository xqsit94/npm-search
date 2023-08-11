<script setup lang="ts">
import { useToast } from 'vue-toastification'

const props = withDefaults(
  defineProps<{
    textToCopy: string
    bgClass?: string
  }>(),
  {
    bgClass: 'bg-base-100 hover:bg-base-200'
  }
)

const copyText = async () => {
  const toast = useToast()
  try {
    await navigator.clipboard.writeText(props.textToCopy)
    toast.info('Copied')
  } catch ($e) {
    toast.error('Failed to copy')
  }
}
</script>

<template>
  <span
    class="px-4 py-1.5 border border-dashed cursor-copy rounded-xl text-xs tooltip"
    data-tip="click to copy"
    @click="copyText"
    :class="bgClass"
  >
    {{ textToCopy }}
  </span>
</template>
