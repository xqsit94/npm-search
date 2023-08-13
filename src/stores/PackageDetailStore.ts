import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Flags, Package, PackageDetail, Score } from '../../env'
import { getNpmPackage } from '@/utils/functions'

export const usePackageDetailStore = defineStore('packageDetail', () => {
  const isLoading = ref<boolean>(false)
  const showModal = ref<boolean>(false)
  const npmPackageName = ref<string>('')
  const npmPackage = ref<Package>()
  const npmPackageFlags = ref<Flags>()
  const npmPackageScore = ref<Score>()
  const npmPackageDetail = ref<PackageDetail>()

  const fetchPackageDetail = async (packageName: string) => {
    if (packageName === '') return
    npmPackageDetail.value = await getNpmPackage(packageName)
  }

  const openModal = async (packageData: Package, score: Score, flags?: Flags) => {
    npmPackageName.value = packageData.name
    npmPackage.value = packageData
    npmPackageFlags.value = flags
    npmPackageScore.value = score
    showModal.value = true
    isLoading.value = true
    await fetchPackageDetail(packageData.name)
    isLoading.value = false
  }

  const closeModal = () => {
    reset()
    showModal.value = false
  }

  const reset = () => {
    isLoading.value = false
    npmPackageName.value = ''
    npmPackageDetail.value = undefined
    npmPackage.value = undefined
    npmPackageFlags.value = undefined
    npmPackageScore.value = undefined
  }

  return {
    isLoading,
    npmPackageName,
    npmPackage,
    npmPackageFlags,
    npmPackageDetail,
    npmPackageScore,
    fetchPackageDetail,
    showModal,
    openModal,
    closeModal
  }
})
