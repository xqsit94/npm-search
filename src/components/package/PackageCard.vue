<script setup lang="ts">
import PackageLinks from '@/components/package/PackageLinks.vue'
import PackageCommands from '@/components/package/PackageCommands.vue'
</script>

<template>
  <div class="flex flex-col bg-base-200 p-4 rounded-xl">
    <div class="flex flex-row justify-between">
      <div>
        <h1 class="font-bold text-secondary">
          adonis-shield <span class="ml-0.5 text-xs text-base-content sup">v6.1</span>
        </h1>
        <p class="text-sm">
          A middleware for AdonisJS to keep web applications secure from common web attacks
        </p>
      </div>
      <div class="text-sm">
        <p>Last update: <span class="font-bold">2 months ago</span></p>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <PackageCommands package-name="slugify" />
      <PackageLinks />
    </div>
  </div>
</template>
