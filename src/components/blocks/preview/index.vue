<template>
  <div class="block-preview">
    <LBlockImgBox class="block-preview__img-box"/>
    <LBlockInfo class="block-preview__info"/>
  </div>
</template>


<script lang="ts">
export default {
  name: 'BlockPreview'
}
</script>

<script setup lang="ts">
import LBlockImgBox from './img-box/index.vue'
import LBlockInfo from './info/index.vue'
</script>

<style lang="scss">
.block-preview {
  padding: 15px;

  &__img-box {
    display: flex;
    border-radius: 15px;
    overflow: hidden;
  }

  &__info {
    margin-top: 25px;
  }
}
</style>
