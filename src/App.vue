<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/shared/AppHeader.vue'
import AppFooter from '@/components/shared/AppFooter.vue'
import PackageDetail from '@/components/package-detail/PackageDetail.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
  <PackageDetail />
</template>
