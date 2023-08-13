<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { usePackageDetailStore } from '@/stores/PackageDetailStore'
import { storeToRefs } from 'pinia'
import PackageLinks from '@/components/package/PackageLinks.vue'
import { markdownOptions } from '@/utils/constants'
import RadialScore from '@/components/package/RadialScore.vue'
import CopyBoard from '@/components/others/CopyBoard.vue'
import { timesAgo } from '../../utils/functions'

const { isLoading, showModal, npmPackage, npmPackageDetail, npmPackageFlags, npmPackageScore } =
  storeToRefs(usePackageDetailStore())
const { closeModal } = usePackageDetailStore()
</script>

<template>
  <dialog id="package-detail-modal" class="modal modal-shade" :open="showModal">
    <form v-if="npmPackage" method="dialog" class="modal-box max-w-4xl">
      <button
        @click="closeModal"
        class="btn btn-sm btn-circle btn-ghost sticky right-0 top-0 float-right"
      >
        ✕
      </button>
      <div v-if="isLoading" class="flex justify-center my-14">
        <progress class="progress w-56"></progress>
      </div>
      <div v-else-if="npmPackageDetail">
        <div class="flex flex-row flex-wrap justify-center gap-3 my-5">
          <CopyBoard
            bg-class="bg-primary/20 hover:bg-primary-focus/20"
            :text-to-copy="`npm i ${npmPackage.name}@${npmPackage.version}`"
            :replace="`npm i`"
          />
          <CopyBoard
            bg-class="bg-secondary/20 hover:bg-secondary-focus/20"
            :text-to-copy="`yarn add ${npmPackage.name}@${npmPackage.version}`"
            :replace="`yarn add`"
          />
          <CopyBoard
            bg-class="bg-accent/20 hover:bg-accent-focus/20"
            :text-to-copy="`pnpm add ${npmPackage.name}@${npmPackage.version}`"
            :replace="`pnpm add`"
          />
        </div>
        <div class="flex flex-row flex-wrap gap-1 justify-center">
          <h1 class="text-2xl md:text-4xl font-semibold text-secondary">
            <a target="_blank" :href="npmPackageDetail.homepage">{{ npmPackage.name }}</a>
          </h1>
          <span class="ml-0.5 font-semibold text-base-content sup">v{{ npmPackage.version }}</span>
          <div v-if="npmPackageFlags" class="ml-2">
            <div v-for="(_, key) in npmPackageFlags" :key="key" class="badge badge-warning gap-2">
              {{ key }}
            </div>
          </div>
        </div>
        <p class="my-2 text-center">{{ npmPackageDetail.description }}</p>
        <div class="my-5 flex flex-wrap gap-2 justify-center">
          <div
            v-for="keyword in npmPackageDetail.keywords"
            :key="keyword"
            class="badge badge-neutral"
          >
            {{ keyword }}
          </div>
        </div>
        <PackageLinks
          class="flex justify-center"
          :homepage="npmPackage.links.homepage"
          :repository="npmPackage.links.repository"
          :npm="npmPackage.links.npm"
          :bugs="npmPackage.links.bugs"
        />
        <div class="mt-10">
          <div class="flex flex-wrap gap-3 justify-center">
            <div
              v-for="(vNumber, key) in npmPackageDetail['dist-tags']"
              :key="key"
              class="border rounded border-base-content/20 w-32 text-center"
            >
              <div class="text-sm bg-base-300">
                {{ key }}
              </div>
              <div class="text-sm font-semibold p-1">{{ vNumber }}</div>
            </div>
          </div>
        </div>
        <div class="my-8 flex flex-wrap justify-center gap-10" v-if="npmPackageScore">
          <div class="border rounded border-base-content/20 p-4 w-32 text-center">
            <RadialScore
              class-name="text-info"
              :score="npmPackageScore.detail.popularity"
              :size="4"
              :thickness="6"
            />
            <h6 class="mt-1 text-center text-sm">Popularity</h6>
          </div>
          <div class="border rounded border-base-content/20 p-4 w-32 text-center">
            <RadialScore
              class-name="text-secondary"
              :score="npmPackageScore.detail.quality"
              :size="4"
              :thickness="6"
            />
            <h6 class="mt-1 text-center text-sm">Quality</h6>
          </div>
          <div class="border rounded border-base-content/20 p-4 w-32 text-center">
            <RadialScore
              class-name="text-accent"
              :score="npmPackageScore.detail.maintenance"
              :size="4"
              :thickness="6"
            />
            <h6 class="mt-1 text-sm">Maintenance</h6>
          </div>
          <div class="border rounded border-base-content/20 p-4 w-32 text-center">
            <RadialScore
              class-name="text-error"
              :score="npmPackageScore.final"
              :size="4"
              :thickness="6"
            />
            <h6 class="mt-1 text-center text-sm">Final</h6>
          </div>
        </div>
        <div class="mt-8 border rounded border-base-content/20 w-3/4 p-2 mx-auto">
          <p v-if="npmPackage.author?.name" class="text-center">
            Author: <span class="font-semibold">{{ npmPackage.author?.name }}</span>
          </p>
          <p class="text-center">
            Last publish: <span class="font-semibold">{{ timesAgo(npmPackage.date) }}</span>
          </p>
        </div>
        <div class="mt-10 prose mx-auto">
          <vue-markdown :source="npmPackageDetail.readme" :options="markdownOptions" />
        </div>
      </div>
    </form>
  </dialog>
</template>
