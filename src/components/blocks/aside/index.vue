<template>
  <div class="block-aside">
    <ul class="block-aside__folders">
      <UiItem
          class="block-aside__folders-item"
          tag="li"
          type="root-folder"
          v-for="item in items"
      >
        {{ item }}
      </UiItem>
    </ul>

    <BlockTags class="block-aside__tags">Tags</BlockTags>

    <div class="block-aside__switch-box">
      <UiSwitch class="block-aside__switch">Dark Theme</UiSwitch>
      <UiSwitch class="block-aside__switch" theme="blue">Auto-switch theme</UiSwitch>
    </div>

  </div>
</template>


<script lang="ts">
export default {
  name: 'BlockAside'
}
</script>

<script setup lang="ts">
import UiItem from '@/components/ui/item/index.vue'
import UiSwitch from '@/components/ui/switch/index.vue'
import BlockTags from '@/components/blocks/tags/index.vue'
import { ref } from 'vue';

const items = ref(['Browse files', 'Configure tags', 'Configure users', 'Logout'])
</script>

<style lang="scss">
.block-aside {
  background-color: var(--f-aside-color);
  padding: 25px 10px 15px 26px;
  display: flex;
  flex-direction: column;

  &__folders {
    margin: 0;
    list-style: none;
    padding: 0;

    &-item {
      padding: 8px 10px;
      font-size: 13px;
      width: 100%;

      & + & {
        margin-top: 2px;
      }
    }
  }

  &__tags {
    margin-top: 10px;
  }

  &__switch-box {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
