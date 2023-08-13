<script setup lang="ts">
import { usePackageDetailStore } from '@/stores/PackageDetailStore'
import { storeToRefs } from 'pinia'

const { showModal, packageName } = storeToRefs(usePackageDetailStore())
const { closeModal } = usePackageDetailStore()
</script>

<template>
  <dialog id="package-detail-modal" class="modal" :open="showModal">
    <form method="dialog" class="modal-box w-11/12 max-w-5xl">
      <button @click="closeModal" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
      <h3 class="font-bold text-4xl">{{ packageName }}</h3>
      <div>
        <p class="py-4">{{ `Package description` }}</p>
      </div>
    </form>
  </dialog>
</template>
