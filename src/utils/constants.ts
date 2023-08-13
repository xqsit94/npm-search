import axios from 'axios'

const NPM_BASE_URL = 'https://registry.npmjs.com'

export const NpmClient = axios.create({
  baseURL: NPM_BASE_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

export const markdownOptions = {
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true
}
