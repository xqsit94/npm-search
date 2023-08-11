<script setup lang="ts">
import HomeIcon from '@/components/icons/HomeIcon.vue'
import NpmIcon from '@/components/icons/NpmIcon.vue'
import BugIcon from '@/components/icons/BugIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'

defineProps<{
  homepage?: string
  repository?: string
  npm?: string
  bugs?: string
}>()
</script>

<template>
  <div class="mt-4 flex flex-row gap-2 items-center">
    <a v-if="homepage" :href="homepage" target="_blank" class="badge badge-ghost">
      <HomeIcon class="w-3 h-3 mr-1" />
      Homepage
    </a>
    <a v-if="repository" :href="repository" target="_blank" class="badge badge-ghost">
      <GithubIcon class="w-3 h-3 mr-1" />
      Github
    </a>
    <a v-if="npm" :href="npm" target="_blank" class="badge badge-ghost">
      <NpmIcon class="w-3 h-3 mr-1" />
      NPM
    </a>
    <a v-if="bugs" :href="bugs" target="_blank" class="badge badge-ghost">
      <BugIcon class="w-3 h-3 mr-1" />
      Bugs
    </a>
  </div>
</template>
