import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { PackageDetail } from '../../env'
import { getNpmPackage } from '@/utils/functions'

export const usePackageDetailStore = defineStore('packageDetail', () => {
  const showModal = ref<boolean>(false)
  const packageName = ref<string>('')
  const packageDetail = ref<PackageDetail | null>(null)

  const fetchPackageDetail = async (packageName: string) => {
    if (packageName === '') return
    packageDetail.value = await getNpmPackage(packageName)
  }

  const openModal = (name: string) => {
    packageName.value = name
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
  }

  return {
    packageName,
    packageDetail,
    fetchPackageDetail,
    showModal,
    openModal,
    closeModal
  }
})
