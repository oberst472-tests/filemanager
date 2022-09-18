<template>
  <div class="block-preview">
    <div
        v-for="(item, index) in props.items"
        :key="item.id"
        @click.prevent="onClick(item.id)"
        class="block-preview__img-box"
    >
      <img
          class="block-preview__img"
          :src="item.preview"
          alt="preview"
      >
    </div>
  </div>
</template>


<script lang="ts">
export default {
  name: 'LBlockPreview'
}
</script>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  items: any
}

const props = defineProps<Props>()
const emits = defineEmits(['delete'])
const onClick = function (id: string) {
  emits('delete', id)
}

</script>

<style lang="scss" scoped>
.block-preview {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  position: relative;

  &__img-box {
    border-radius: 6px;
    width: calc(33.333% - 5px);
    max-width: 300px;
    overflow: hidden;
    position: relative;
    display: flex;
    cursor: default;

    &:hover {
      &:before {
        opacity: 1;
      }
    }

    &:before {
      opacity: 0;
      content: '';
      position: absolute;
      cursor: pointer;
      left: 50%;
      top: 50%;
      display: inline-flex;
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      background-image: url('@/assets/images/bin.svg');
      z-index: 5;
      background-size: contain;
      transform: translate(-50%, -50%);
      transition-duration: 0.3s;
    }
  }

  &__img {
    width: 100%;
    max-width: 100%;
  }
}
</style>
