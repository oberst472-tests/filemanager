<template>
  <ul class="block-header">
    <UiItem
        class="block-header__item"
        tag="li"
        type="folder"
        v-for="item in 4"
    >
      First Folder
    </UiItem>
  </ul>
</template>


<script lang="ts">
export default {
  name: 'BlockHeader'
}
</script>

<script setup lang="ts">
import UiItem from '@/components/ui/item/index.vue'

</script>

<style scoped lang="scss">
.block-header {
  margin: 0;
  padding: 5px 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--f-border-color);
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: auto;

  &__item {
    line-height: 0.9;
    font-size: 11px;

    &:not(:last-of-type) {
      &:after {
        margin-left: 5px;
        content: '';
        width: 5px;
        height: 10px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url('@/assets/images/arrow.svg');
      }
    }
  }
}
</style>
