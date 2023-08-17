import type { NpmSearchResponse, PackageDetail } from '../../env'
import { NpmClient } from '@/utils/constants'
import moment from 'moment'

export const searchNpmPackages = async (query: string, from = 0): Promise<NpmSearchResponse> => {
  const { data } = await NpmClient.get<NpmSearchResponse>(`/-/v1/search`, {
    params: {
      text: query,
      from
    }
  })
  return data
}

export const getNpmPackage = async (packageName: string): Promise<PackageDetail> => {
  const { data } = await NpmClient.get<PackageDetail>(`/${packageName}`)
  return data
}

export const timesAgo = (date: string) => {
  return moment(date, 'YYYY-MM-DDTHH:mm:ss.GMTZ').fromNow()
}

export const roundScore = (value: number) => {
  return Math.round(value * 100)
}

export const repoBreak = (repo: string) => {
  return repo.replace('https://github.com/', '')
}
