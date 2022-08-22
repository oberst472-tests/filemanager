<template>
  <div class="block-content-item">
    <div class="block-content-item__content">
      <BlockUpload class="block-content-item__upload"/>

      <div class="block-content-item__btns">
        <button class="block-content-item__btns-btn">Add folder</button>
        <button class="block-content-item__btns-btn">Add image</button>
        <button class="block-content-item__btns-btn block-content-item__btns-btn-delete">Delete</button>
      </div>

      <div class="block-content-item__items">
        <UiItem class="block-content-item__el" v-for="item in 29" type="folder">Folder {{ item }}</UiItem>
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
import BlockUpload from '@/components/blocks/upload/index.vue'

</script>

<style lang="scss" scoped>
.block-content-item {
  display: flex;
  overflow-y: auto;

  &__content {
    width: 100%;
    padding: 15px 10px;
  }

  &__upload {

  }

  &__btns {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: 0;

    &-btn {
      flex-shrink: 0;
      font-size: 10px;
      background-color: transparent;
      padding: 0;
      border: none;
      text-decoration: underline;
      color: var(--f-active-color);
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      &-delete {
        color: #FF0000;
        margin-left: auto;
      }
    }
  }

  &__items {
    margin-top: 30px;
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
