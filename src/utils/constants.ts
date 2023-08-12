import axios from 'axios'

const NPM_BASE_URL = 'https://registry.npmjs.com/-/v1'

export const NpmClient = axios.create({
  baseURL: NPM_BASE_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})
