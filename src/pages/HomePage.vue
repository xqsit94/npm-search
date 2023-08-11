<script setup lang="ts">
import SearchBar from '@/components/search/SearchBar.vue'
import { ref, watch } from 'vue'
import { useToast } from 'vue-toastification'
import SearchHelper from '@/components/search/SearchHelper.vue'
import SearchStatistic from '@/components/search/SearchStatistic.vue'
import PackageCard from '@/components/package/PackageCard.vue'

const search = ref<string>('')

watch(search, (value) => {
  setTimeout(() => {
    if (value === search.value) {
      const toast = useToast()
      toast.success('Searching for packages...')
    }
  }, 800)
})
</script>

<template>
  <main class="grow container mx-auto p-4">
    <SearchBar v-model="search" />
    <SearchHelper v-if="!search" />
    <template v-else>
      <SearchStatistic :search="search" :total="100" :start="1" :end="20" />
    </template>
    <PackageCard />
  </main>
</template>
