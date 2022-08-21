<template>
  <div class="block-content-item">
    <div class="block-content-item__content">
      <div class="block-content-item__upload">Uploads</div>

      <div class="block-content-item__items">
        <UiItem class="block-content-item__el" v-for="item in 29" type="img">Folder {{ item }}</UiItem>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
export default {
  name: 'BlockContentItem'
}
</script>

<script setup lang="ts">
import UiItem from '@/components/ui/item/index.vue'

</script>

<style lang="scss" scoped>
.block-content-item {
  display: flex;
  overflow-y: auto;

  &__content {
    width: 100%;
    padding: 15px 10px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  &__el {
    padding: 5px 10px;
    font-size: 14px;

    &:last-of-type {
      margin-bottom: 15px;
    }
  }
}
</style>
