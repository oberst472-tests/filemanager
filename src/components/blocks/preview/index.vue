<template>
  <div class="block-preview">
    <LBlockImgBox
        v-if="props.downloadLink"
        class="block-preview__img-box"
        :img="props.img"
        :downloadLink="props.downloadLink"
    />
    <LBlockInfo
        class="block-preview__info"
        :downloadLink="props.downloadLink"
    />
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
interface Props {
  img: string
  downloadLink: string
}
const props = defineProps<Props>()
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
