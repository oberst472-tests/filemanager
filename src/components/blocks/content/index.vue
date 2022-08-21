<template>
  <div class="block-content">
    <BlockContentItem class="block-content__el"></BlockContentItem>
    <BlockContentPreview class="block-content__preview"></BlockContentPreview>
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
</script>

<style lang="scss">
.block-content {
  display: flex;
  overflow-x: auto;;
  padding: 0;

  &__el {
    flex-shrink: 0;
    min-width: 200px;
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
