<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import SunIcon from '@/components/icons/SunIcon.vue'
import MoonIcon from '@/components/icons/MoonIcon.vue'
import { useThemeStore } from '@/stores/ThemeStore'

const { theme } = storeToRefs(useThemeStore())
const { setTheme, toggleTheme } = useThemeStore()

const isDark = ref<boolean>(theme.value === 'dark')

onMounted(() => {
  setTheme(theme.value)
})
</script>

<template>
  <label class="swap swap-rotate">
    <input v-model="isDark" type="checkbox" @change="toggleTheme" />
    <SunIcon />
    <MoonIcon />
  </label>
</template>
