<template>
    <div class="block-tags">
      <div class="block-tags__title"><slot/></div>

      <ul class="block-tags__items">
        <UiTag class="block-tags__item" tag="li" color="orange">Orange-tag</UiTag>
        <UiTag class="block-tags__item" tag="li" color="blue">Blue-tag</UiTag>
        <UiTag class="block-tags__item" tag="li" color="green">Green-tag</UiTag>
      </ul>
    </div>
</template>


<script lang="ts">
export default {
  name: 'BlockTags'
}
</script>

<script setup lang="ts">
import UiTag from '@/components/ui/tag/index.vue'

</script>

<style lang="scss" scoped>
.block-tags {
  &__title {

    font-weight: 700;
    font-size: 12px;
    color: #797979;
  }
  &__items {
    padding: 0;
    list-style: none;
    margin: 0;

  }
  &__item {
    width: 100%;
    padding: 8px 10px 8px 0;
    font-size: 13px;
  }
}
</style>
