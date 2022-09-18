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

    <span
        class="block-upload__content"
        v-else
    >
      Drag files or Browse
    </span>

    <LBlockPreview
        :items="state.files"
        @delete="deletePreview"
        v-if="state.files.length"
    />

    <input
        type="file"
        class="block-upload__inp"
        multiple
        name="files[]"
        @input="handleInput"
    >

    <UiBtn
        class="block-upload__send-btn"
        v-if="state.files.length"
        @click.prevent="downloadFiles"
        :isLoading="props.isLoading"
    >
      Download files
    </UiBtn>

  </label>
</template>


<script lang="ts">
export default {
  name: 'BlockUpload'
}
</script>

<script setup lang="ts">
import { FileType } from '../../../types/files';
import { defineProps, reactive, watch } from 'vue';
import LBlockPlaceholder from './placeholder/index.vue'
import LBlockPreview from './preview/index.vue'

import UiBtn from '@/components/ui/btn/index.vue'

interface Props {
  isLoading: boolean
}

const props = defineProps<Props>()
const emits = defineEmits(['sendFiles'])

const state = reactive({
  isActive: false,
  files: [] as FileType[],
})
const changeHover = function (val: boolean) {
  if (!state.isActive) state.isActive = true
}
const closeHover = function () {
  state.isActive = false
}

const handleDrop = async function (e: any) {
  const dt = e.dataTransfer
  if (!state.isActive) state.isActive = true
  if (!dt.files.length) return

  showPreviews(dt.files)
}

const handleInput = async function (e: any) {
  if (!state.isActive) state.isActive = true
  if (!e.target.files.length) return

  showPreviews(e.target.files)
}

function showPreviews(items: FileType[]) {
  const arr = []

  for (let item of items) {
    item.preview = URL.createObjectURL(item as any)
    item.id = Math.random().toString(12)
    arr.push(item)
  }
  if (state.files.length) state.files = [...state.files, ...arr]
  else state.files = arr
}

function deletePreview(id: string) {
  setTimeout(() => {
    let index = state.files.findIndex(item => item.id === id)
    state.files.splice(index, 1)
  }, 0);
}

function downloadFiles() {
  emits('sendFiles', state.files)
}

watch(() => props.isLoading, () => {
  if (props.isLoading) return
  state.isActive = false
  state.files = []
})

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

  &--loading {
    pointer-events: none !important;
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

  &__send-btn {
    cursor: pointer;
    width: calc(100% - 40px);
    transition-duration: 0.3s;
    transition-property: background-color;

    &:hover {
      background-color: rgba(1, 122, 255, 0.78);
    }

    &:active {
      opacity: 0.6;
    }
  }
}
</style>
