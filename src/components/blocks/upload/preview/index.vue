<template>
  <div class="block-preview">
    <div class="block-preview__img-box">
      <img
          class="block-preview__img"
          :src="item"
          alt="preview"
          v-for="item in props.items"
      >
      <button class="block-preview__delete">x</button>
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

</script>

<style lang="scss" scoped>
.block-preview {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
  &__img-box {
    border-radius: 6px;
    width: calc(50% - 5px);
    max-width: 300px;
    overflow: hidden;
    position: relative;
    display: flex;
  }
  &__img {
    width: 100%;
    max-width: 100%;
  }
  &__delete {
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: var(--f-error-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    border: none;
    border-radius: 50%;
    color: white;
    right: 4px;
    top: 4px;

  }
}
</style>
