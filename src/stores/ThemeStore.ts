import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<string>(localStorage.getItem('theme') || 'dark')

  const setTheme = (theme: string) => {
    document.body.setAttribute('data-theme', theme)
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', theme.value)
    setTheme(theme.value)
  }

  return {
    theme,
    setTheme,
    toggleTheme
  }
})
