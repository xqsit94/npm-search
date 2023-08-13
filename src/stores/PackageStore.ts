import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { PackageData, PackageDetail } from '../../env'
import { getNpmPackage, searchNpmPackages } from '@/utils/functions'

export const usePackageStore = defineStore('package', () => {
  const packages = ref<PackageData[]>([])
  const total = ref<number>(0)
  const from = ref<number>(0)

  const setPackages = (data: PackageData[]) => {
    packages.value = data
    setFrom(packages.value.length)
  }

  const addPackages = (data: PackageData[]) => {
    packages.value = [...packages.value, ...data]
    setFrom(packages.value.length)
  }

  const setTotal = (data: number) => {
    total.value = data
  }

  const setFrom = (data: number) => {
    from.value = data
  }

  const fetchPackages = async (query: string, type: string = 'search') => {
    if (query === '') return
    const data = await searchNpmPackages(query, from.value)
    if (type === 'search') {
      setPackages(data.objects)
    } else {
      addPackages(data.objects)
    }
    setTotal(data.total)
  }

  return {
    packages,
    total,
    from,
    fetchPackages,
    setPackages
  }
})
