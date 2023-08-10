<script setup lang="ts">
import ThemeToggler from '@/components/shared/ThemeToggler.vue'
</script>

<template>
  <div class="h-20 navbar bg-base-100 border-b-4 border-secondary">
    <div class="container mx-auto">
      <div class="flex-1">
        <router-link to="/" class="btn btn-ghost normal-case text-2xl">NPM Search</router-link>
      </div>
      <div class="flex-none">
        <ThemeToggler />
      </div>
    </div>
  </div>
</template>
