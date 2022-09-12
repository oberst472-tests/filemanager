<template>
  <label
      class="block-upload"
      :class="{'block-upload--active': state.isActive}"
      @dragenter.prevent="changeHover(true)"
      @dragover.prevent="changeHover(true)"
      @dragleave.prevent="closeHover()"
      @drop.prevent="handleDrop"
  >
    <LBlockPlaceholder v-if="state.isActive"/>

    <span class="block-upload__content" v-else>Drag files or Browse</span>

    <LBlockPreview :items="state.urls" v-if="state.urls.length"/>

    <input type="file" class="block-upload__inp" @input="handleInput">

  </label>
</template>


<script lang="ts">
export default {
  name: 'BlockUpload'
}
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import LBlockPlaceholder from './placeholder/index.vue'
import LBlockPreview from './preview/index.vue'

const state = reactive({
  isActive: false,
  files: [],
  urls: [] as any[]
})
const changeHover = function (val: boolean) {
  if (!state.isActive) state.isActive = true
}
const closeHover = function () {
  state.isActive = false
}

const testSendFiles = async function (files: any[]) {
  const formData = new FormData();
  formData.append('file[]', files[0], 'image.jpg');

  console.log(formData.has('file[]'));
  console.log(formData.get('file[]'));

  const url = 'https://demo-fklvc3a-d3spspfn365bc.eu-5.platformsh.site/api/image/upload'
  const send = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'form/multipart'
    },
    body: formData
  })
  const data = await send.json()
  console.log(data);
}

const handleDrop = async function (e: any) {
  if (!state.isActive) state.isActive = true
  const dt = e.dataTransfer

  showPreview(dt.files)
  await testSendFiles(dt.files)

}
const handleInput = async function (e: any) {
  if (!state.isActive) state.isActive = true

  showPreview(e.target.files)
  await testSendFiles(e.target.files)
}

function showPreview(files: any) {
  if (files.length > 0) {
    const src = URL.createObjectURL(files[0]);
    state.urls = [src]
  }
}

</script>

<style lang="scss">
.block-upload {
  overflow: hidden;
  height: 50px;
  background-color: #F9F9F9;
  border: 1px dashed #000000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  position: absolute;

  &:hover {
    border-color: var(--f-success-color);
    cursor: pointer;
    background-color: rgba(95, 207, 101, 0.25);
  }

  &:active {
    opacity: 0.9;
  }

  &--active {
    z-index: 2;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    background-color: transparent;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    border: none;
    &:active {
      opacity: 1;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(180deg, rgba(138, 138, 138, 0.6) 0%, rgba(138, 138, 138, 0.5) 100%);
      backdrop-filter: blur(3px);
      transition-duration: 0.3s;
      pointer-events: none;
    }

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      z-index: -1;
      border: 1px dashed white;
      transition-duration: 0.3s;
      pointer-events: none;

    }

    .block-upload__content {
      position: relative;
      z-index: 1;
      padding: 20px;
      font-weight: 600;
      font-size: 16px;
      /* or 22px */

      text-align: center;

      color: #FFFFFF;
      transition-duration: 0.3s;
    }
  }


  &__label {
    z-index: 3;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    background-color: rgba(149, 255, 199, 0.2);
    border: none;
  }

  &__inp {
    position: absolute;
    left: -400px;
  }
}
</style>
