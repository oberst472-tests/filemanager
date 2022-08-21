<template>
  <section class="section-file-manager">
    <BlockAside class="section-file-manager__aside"/>
    <BlockHeader class="section-file-manager__header"/>
    <BlockContent class="section-file-manager__content"/>
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
  color: var(--f-text-color);
  font-family: $main-font;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
      'aside header'
      'aside content';

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
}
</style>
