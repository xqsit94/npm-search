<script setup lang="ts">
import PackageLinks from '@/components/package/PackageLinks.vue'
import PackageCommands from '@/components/package/PackageCommands.vue'
import { timesAgo } from '@/utils/functions'
import type { Package } from '../../../env'

defineProps<{
  package: Package
}>()
</script>

<template>
  <div class="flex flex-col bg-base-200 px-5 py-4">
    <div class="flex flex-row justify-between">
      <div>
        <h1 class="text-xl font-semibold text-secondary">
          {{ package.name }}
          <span class="ml-0.5 text-xs text-base-content sup">v{{ package.version }}</span>
        </h1>
        <p class="text-sm">
          {{ package.description }}
        </p>
      </div>
      <div class="text-sm">
        <p>
          Last update: <span class="font-bold">{{ timesAgo(package.date) }}</span>
        </p>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <PackageCommands :package-name="package.name" :package-version="package.version" />
      <PackageLinks
        :homepage="package.links.homepage"
        :repository="package.links.repository"
        :npm="package.links.npm"
        :bugs="package.links.bugs"
      />
    </div>
  </div>
</template>
