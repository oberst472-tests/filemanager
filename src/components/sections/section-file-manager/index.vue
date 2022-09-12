<template>
  <section class="section-file-manager section-file-manager--theme-light">
    <UiLoading v-if="mainStore.isLoading" class="section-file-manager__loading"></UiLoading>
    <BlockAside
        class="section-file-manager__aside"
        :items="tagsStore.tags"
    />

    <BlockHeader
        class="section-file-manager__header"
        :items="foldersStore.breadcrumbs"
    />

    <BlockContent
        class="section-file-manager__content"
        :items="foldersStore.items"
    />
  </section>
</template>


<script lang="ts">
export default {
  name: 'SectionFileManager'
}
</script>

<script setup lang="ts">

import BlockAside from '@/components/blocks/aside/index.vue'
import BlockHeader from '@/components/blocks/header/index.vue'
import BlockContent from '@/components/blocks/content/index.vue'
import UiLoading from '@/components/ui/loading/index.vue'
import { onMounted } from 'vue';
import { useFoldersStore } from '../../../stores/folders';
import { useMainStore } from '../../../stores/main';
import { useTagsStore } from '../../../stores/tags';
const foldersStore = useFoldersStore()
const tagsStore = useTagsStore()
const mainStore = useMainStore()
onMounted(async () => {
  mainStore.changeLoading()
  document.cookie = "REMEMBERME=QXBwXEVudGl0eVxVc2VyOmRHVnpkQzF0WVdsc01FQjBaWE4wTG1OdmJRPT06MTY2MjMyMzk0OTppVGFaUy9xTDdJTkVUK0RJZTNQWnRISWw2YkNVVkpmcE5BaER5WWVuang2czhGL3ZxbWdsYTYzbFpRRUthbzFRdzBKUEhFeWlDblQwQ0p5cXc4amEwQT09OmVmM2I4NDA4ZTQ2OGZiZjk5OThlNTI5NTkwZGYwNDZiN2JlMzBmZmUzZjcxZjMxNjVlOTUwYWIwMmJiZDI3M2Q%3D"
  const folders = await foldersStore.stGetFolders()
  const tags = await tagsStore.stGetTags()
  const res = await Promise.all([folders, tags])
  mainStore.changeLoading(false)
})
</script>

<style lang="scss">
//TODO: need to delete
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-file-manager {
  position: relative;
  color: var(--f-text-color);
  font-family: $main-font;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
      'aside header'
      'aside content';

  &__loading {
    z-index: 100;
  }

  &__aside {
    grid-area: aside;
  }

  &__header {
    grid-area: header;
  }

  &__content {
    grid-area: content;
  }

  * {
    box-sizing: border-box;
  }
  &--theme-dark {
    .block-aside {
      background-color: var(--f-aside-color-dark-theme);
    }
  }
  &--theme-light {
    .block-aside {
      background-color: var(--f-aside-color);
    }
  }
}
</style>
