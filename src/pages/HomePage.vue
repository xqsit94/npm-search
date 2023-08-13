<script setup lang="ts">
import SearchBar from '@/components/search/SearchBar.vue'
import { ref, watch } from 'vue'
import SearchStatistic from '@/components/search/SearchStatistic.vue'
import PackageCard from '@/components/package/PackageCard.vue'
import { usePackageStore } from '@/stores/PackageStore'
import { storeToRefs } from 'pinia'
import LoadingSkeleton from '@/components/package/LoadingSkeleton.vue'
import PackageNotFound from '@/components/package/PackageNotFound.vue'
import SearchHelper from '@/components/search/SearchHelper.vue'

const search = ref<string>('')

/* Flags */
const isSearching = ref<boolean>(false)
const isLoadMore = ref<boolean>(false)
const isDataLoaded = ref<boolean>(false)

/* Store */
const { packages, total, from } = storeToRefs(usePackageStore())
const { fetchPackages, setPackages } = usePackageStore()

/* Methods */
const handleSearch = async () => {
  isSearching.value = true
  await fetchPackages(search.value)
  isSearching.value = false
  isDataLoaded.value = true
}

const handleLoadMore = async () => {
  isLoadMore.value = true
  fetchPackages(search.value, 'add').finally(() => {
    isLoadMore.value = false
  })
}

watch(search, async (value) => {
  setTimeout(async () => {
    if (value === search.value && value.length > 0) {
      await handleSearch()
    }
  }, 800)
  if (value.length === 0) {
    setPackages([])
    isDataLoaded.value = false
  }
})
</script>

<template>
  <main class="grow container mx-auto p-4">
    <SearchBar v-model="search" />
    <div v-if="isSearching" class="my-5">
      <LoadingSkeleton
        v-for="n in 5"
        :key="n"
        class="p-4"
        :class="[
          n === 1 ? 'rounded-t-2xl' : 'border-t border-base-content/40',
          n === 5 ? 'rounded-b-2xl' : ''
        ]"
      />
    </div>
    <template v-else-if="!isSearching && isDataLoaded">
      <div v-if="isDataLoaded && packages.length > 0">
        <SearchStatistic :search="search" :total="total" :from="from" />
        <PackageCard
          v-for="(data, i) in packages"
          :key="i"
          :flags="data.flags"
          :package="data.package"
          :score="data.score"
          class="hover:bg-base-300"
          :class="[
            i === 0 ? 'rounded-t-2xl' : 'border-t border-base-content/40',
            i + 1 === packages.length ? 'rounded-b-2xl' : ''
          ]"
        />
      </div>
      <div v-else>
        <PackageNotFound />
      </div>
    </template>
    <div v-else>
      <SearchHelper v-if="search.length <= 0" />
    </div>
    <div class="my-5" v-if="isDataLoaded && packages.length > 0">
      <button class="btn btn-accent btn-block" @click="handleLoadMore" :disabled="isLoadMore">
        <span v-if="isLoadMore" class="loading loading-spinner"></span>
        Load more
      </button>
    </div>
  </main>
</template>
