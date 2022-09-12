<template>
  <div class="block-item">
    <UiItem class="block-item__item"
            @addTag="isActive = true"
            @dblclick="emits('openFolder')"
            :type="info.type"
            :isActive="isActive"
            :tags="info.tags"
            tag="span"
    >
      <slot/>
    </UiItem>
    <Transition name="leave">
      <BlockAddTag
          v-if="isActive"
          @close="isActive = false"
          :items="tagsStore.tags"
          :activeTags="info.tags"
          @chooseTag="chooseTag($event)"
      >
        Select a tag
      </BlockAddTag>
    </Transition>
  </div>
</template>


<script lang="ts">
export default {
  name: 'BlockItem'
}
</script>

<script setup lang="ts">
import BlockAddTag from '@/components/blocks/add-tag/index.vue'
import { computed, defineEmits, defineProps, ref } from 'vue';
import UiItem from '@/components/ui/item/index.vue'
import { useTagsStore } from '../../../stores/tags';
const tagsStore = useTagsStore()
interface Props {
  tag?: string
  type?: string
  info: any
}

const props = defineProps<Props>()
const emits = defineEmits(['chooseTag', 'openFolder'])
const isActive = ref(false)
const chooseTag = async function ({tags, type}: any) {
  emits('chooseTag', {tags, type: props.info.type, folderId: props.info.id})
}
</script>

<style lang="scss">
.block-item {
  position: relative;
  &__item {
    padding: 6px 10px;
    font-size: 13px;
    width: 100%;
  }
}
</style>
