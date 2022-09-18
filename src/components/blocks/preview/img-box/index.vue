<template>
  <div class="block-img-box">
    <img class="block-img-box__img" :src="img" alt="img">
    <a :href="props.downloadLink" class="block-img-box__btn" target="_blank">
      Download
      <IconDownload class="block-img-box__icon"/>
    </a>
  </div>
</template>


<script lang="ts">
export default {
  name: 'LBlockImgBox'
}
</script>

<script setup lang="ts">
import IconDownload from '@/components/icons/download/index.vue'
interface Props {
  img: string,
  downloadLink: string
}
const props = defineProps<Props>()
</script>

<style lang="scss">
.block-img-box {
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  &__img {
    margin: auto;
    max-width: 100%;
  }

  &__btn {
    background-color: rgba(255, 248, 248, 0.6);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
    border: none;
    outline: none;
    min-height: 22px;
    font-size: 13px;
    line-height: 1;
    align-items: center;
    cursor: pointer;
    transition-duration: 0.3s;
    padding: 0;
    text-decoration: none;
    color: #ffffff;
    display: inline-flex;
    justify-content: center;
    align-content: center;

    &:hover {
      color: var(--f-active-color);
    }

    &:active {
      opacity: 0.7;
    }
  }

  &__icon {
    margin-left: 3px;
    position: relative;
    top: 0.5px;
  }
}
</style>
