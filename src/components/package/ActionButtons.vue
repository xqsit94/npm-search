<script setup lang="ts">
import ViewIcon from '@/components/icons/ViewIcon.vue'
import { usePackageDetailStore } from '@/stores/PackageDetailStore'

defineProps<{
  packageName: string
}>()

const { openModal } = usePackageDetailStore()
</script>

<template>
  <div class="flex flex-row gap-3">
    <button @click="openModal(packageName)" class="btn btn-sm btn-circle btn-accent">
      <ViewIcon class="w-5 h-5" />
    </button>
  </div>
</template>
