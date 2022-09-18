<template>
  <div class="block-content">
    <BlockContentItem
        v-for="(item, index) in props.items"
        class="block-content__el"
        :info="item"
        :index="index"
        @addFolder="addFolder"
        @openFolder="openFolder"
        @reOpenFolder="reOpenFolder"
        @addTag="addTag"
    />

    <BlockContentPreview
        class="block-content__preview"
        :img="img"
        :downloadLink="downloadLink"
    />
  </div>
</template>


<script lang="ts">
export default {
  name: 'BlockContent'
}
</script>

<script setup lang="ts">
import BlockContentItem from '@/components/blocks/content-item/index.vue'
import BlockContentPreview from '@/components/blocks/preview/index.vue'
import { useFoldersStore } from '../../../stores/folders';
import { useMainStore } from '../../../stores/main';
import { useTagsStore } from '../../../stores/tags';
import { computed, defineProps } from 'vue';
import { useFilesStore } from '../../../stores/files';

const tagsStore = useTagsStore()
const foldersStore = useFoldersStore()
const filesStore = useFilesStore()
const mainStore = useMainStore()

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const addFolder = async function ({parentId, name}: { parentId: number, name: string }) {
  try {
    await foldersStore.stAddNewFolder({parentId, name})
  } finally {
    mainStore.changeLoading(false)
  }
}

const addTag = async function ({tags, type, folderId}: any) {
  try {
    await tagsStore.stAddTag({tags, type, folderId})
  } finally {
    mainStore.changeLoading(false)
  }
}

const openFolder = async function ({id, name, index}: { id: string | number, name: string, index: number }) {
  mainStore.changeLoading()
  try {
    await foldersStore.stGetFolderById({id, name, index})
  } finally {
    mainStore.changeLoading(false)
  }
}

const reOpenFolder = async function ({id, name, index}: { id: string | number, name: string, index: number }) {
  mainStore.changeLoading()
  try {
    await foldersStore.stGetFolderById({id, name, index})
  } finally {
    mainStore.changeLoading(false)
  }
}

const img = computed(() => `https://demo-fklvc3a-d3spspfn365bc.eu-5.platformsh.site/api/link/download/${filesStore.activeFileUrl}`)
const downloadLink = computed(() => `https://demo-fklvc3a-d3spspfn365bc.eu-5.platformsh.site/api/link/download/${filesStore.activeFileUrl}?download`)
</script>

<style lang="scss">
.block-content {
  display: flex;
  overflow-x: auto;;
  padding: 0;

  &__el {
    flex-shrink: 0;
    width: 250px;
    flex-grow: 1;
    border-right: 1px solid var(--f-border-color);
    overflow-y: auto;
  }

  &__preview {
    width: 100%;
    max-width: 300px;
    flex-shrink: 0;
  }
}
</style>
