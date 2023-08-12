/// <reference types="vite/client" />

export interface NpmSearchResponse {
  objects: PackageData[]
  total: number
  time: string
}

export interface PackageData {
  package: Package
  flags?: Flags
  score: Score
  searchScore: number
}

export interface Package {
  name: string
  scope: string
  version: string
  description: string
  keywords?: string[]
  date: string
  links: Links
  author?: Author
  publisher: Publisher
  maintainers: Maintainer[]
}

export interface Links {
  npm: string
  homepage?: string
  repository?: string
  bugs?: string
}

export interface Author {
  name: string
  email?: string
  url?: string
  username?: string
}

export interface Publisher {
  username: string
  email: string
}

export interface Maintainer {
  username: string
  email: string
}

export interface Flags {
  unstable: boolean
}

export interface Score {
  final: number
  detail: Detail
}

export interface Detail {
  quality: number
  popularity: number
  maintenance: number
}

export interface PackageDetail {
  _id: string
  _rev: string
  name: string
  description: string
  'dist-tags': DistTags
  readme: string
  maintainers: Maintainer[]
  time: Time
  homepage: string
  keywords: string[]
  repository: Repository
  author: Author
  bugs: Bugs
  license: string
  readmeFilename: string
  users: Users
}

export interface DistTags {
  latest: string
}

export interface Repository {
  type: string
  url: string
}

export interface Author {
  name: string
  email: string
}

export interface Bugs {
  url: string
}

export interface Maintainer {
  name: string
  email: string
}

export interface Time {
  modified: string
  created: string
}
