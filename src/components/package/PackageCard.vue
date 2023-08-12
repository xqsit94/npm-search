<script setup lang="ts">
import { ref } from 'vue'
import PackageLinks from '@/components/package/PackageLinks.vue'
import PackageCommands from '@/components/package/PackageCommands.vue'
import { timesAgo } from '@/utils/functions'
import type { Flags, Package, Score } from '../../../env'
import ActionButtons from '@/components/package/ActionButtons.vue'
import RadialScore from '@/components/package/RadialScore.vue'

defineProps<{
  package: Package
  flags?: Flags
  score: Score
}>()

const showButtons = ref<boolean>(false)
</script>

<template>
  <div
    @mouseover="showButtons = true"
    @mouseleave="showButtons = false"
    class="flex flex-col bg-base-200 px-5 py-4"
  >
    <div>
      <div class="flex flex-row flex-wrap justify-between min-h-8">
        <div class="flex flex-row flex-wrap gap-1">
          <h1 class="text-xl font-semibold text-secondary">
            {{ package.name }}
          </h1>
          <span class="ml-0.5 font-semibold text-xs text-base-content sup"
            >v{{ package.version }}</span
          >
          <div v-if="flags" class="ml-2">
            <div v-for="(_, key) in flags" :key="key" class="badge badge-sm badge-warning gap-2">
              {{ key }}
            </div>
          </div>
        </div>
        <div v-if="showButtons" class="text-sm hidden md:block">
          <ActionButtons />
        </div>
        <div v-else class="text-sm hidden md:block">
          <div class="flex items-center gap-5">
            <p>
              Last update: <span class="font-bold">{{ timesAgo(package.date) }}</span>
            </p>
            <RadialScore :score="score.final" />
          </div>
        </div>
      </div>
      <p class="text-sm">
        {{ package.description }}
      </p>
    </div>
    <div class="flex flex-row flex-wrap justify-between">
      <PackageCommands :package-name="package.name" :package-version="package.version" />
      <PackageLinks
        :homepage="package.links.homepage"
        :repository="package.links.repository"
        :npm="package.links.npm"
        :bugs="package.links.bugs"
      />
    </div>
    <div class="text-sm text-center md:hidden mt-4 flex flex-row justify-between items-center">
      <p>
        Last update: <span class="font-bold">{{ timesAgo(package.date) }}</span>
      </p>
      <ActionButtons />
    </div>
  </div>
</template>
