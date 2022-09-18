<template>
  <div class="block-content-item" :class="{'block-content-item--disabled': filesStore.isLoading}">
    <div class="block-content-item__content">
      <BlockUpload
          class="block-content-item__upload"
          @sendFiles="sendFiles"
          :isLoading="filesStore.isLoading"
      />

      <div class="block-content-item__btns">
        <div class="block-content-item__btns-box">
          <button
              class="block-content-item__btns-btn"
              @click="state.isCreateFolderActive = true"
          >+
           Add folder
          </button>

          <Transition name="leave">
            <BlockAddForm
                @send="addFolder"
                @close="state.isCreateFolderActive = false"
                id="addFolder"
                v-if="state.isCreateFolderActive"
            />
          </Transition>
        </div>

        <div class="block-content-item__btns-box">
          <button class="block-content-item__btns-btn">Add image</button>
        </div>

        <div class="block-content-item__btns-box">
          <button class="block-content-item__btns-btn block-content-item__btns-btn-delete">Delete</button>
        </div>
      </div>

      <div class="block-content-item__items" v-if="info.children.length">
        <BlockItem class="block-content-item__el"
                   @openFolder="onClick({id: item.id, name: item.name, item})"
                   @chooseTag="addTag"
                   v-for="item in items"
                   :info="item"
                   :isElemActive="state.activeItem === item.id"
        >
          {{ item.name }}
<!--          / {{ item.id }}-->
        </BlockItem>
      </div>

      <div v-else class="block-content-item__placeholder">No any files</div>
    </div>
  </div>
</template>


<script lang="ts">
export default {
  name: 'BlockContentItem'
}
</script>

<script setup lang="ts">
import { FileType } from '../../../types/files';
import BlockItem from '@/components/blocks/item/index.vue'
import BlockUpload from '@/components/blocks/upload/index.vue'
import BlockAddForm from '@/components/blocks/add-form/index.vue'
import { computed, defineProps, reactive, ref } from 'vue';
import { useFilesStore } from '../../../stores/files';

const filesStore = useFilesStore()
interface Props {
  info: any,
  index: number
}
const props = defineProps<Props>()

const state = reactive({
  isCreateFolderActive: false,
  activeItem: 0
})
const emits = defineEmits(['addFolder', 'openFolder', 'reOpenFolder', 'addTag'])
const addFolder = function (name: string) {
  emits('addFolder', {parentId: props.info.parentId, name})
}

const addTag = function ({tags, type, folderId}: any) {
  emits('addTag', {tags, type, folderId, parentId: props.info.parentId})
}
const items = computed(() => props.info.children.filter((item: any) => item.type !== 'tag'))
const onClick = function ({id, name, item}: { id: number, name: string, item: any }) {
  state.activeItem = Number(id)

  item.type === 'image' ?
      openImg(item?.short?.name) :
      openFolder({id, name, type: item.type})
}

const openFolder = function ({id, name, type}: { id: number, name: string, type: string }) {
  filesStore.openedFolder.id = id
  filesStore.openedFolder.name = name

  emits('openFolder', {id, name, index: props.index})
}

const openImg = function (name: string) {
  filesStore.activeFileUrl = name
}

const sendFiles = async function (items: FileType[]) {
  const ind = props.index ? props.index - 1 : 0
  try {
    filesStore.isLoading = true
    const res = await filesStore.stSendFiles(items, props.info.parentId)
    if (res) {
      emits('reOpenFolder', {id: filesStore.openedFolder.id, name: filesStore.openedFolder.name, index: ind})
    }
  } finally {
    filesStore.isLoading = false
  }
}
</script>

<style lang="scss" scoped>
.block-content-item {
  display: flex;
  overflow-y: auto;

  &__content {
    width: 100%;
    padding: 15px 10px;
    position: relative;
  }

  &__placeholder {
    font-size: 12px;
    font-style: italic;
    text-align: center;
    margin-top: 30px;
    opacity: 0.6;
  }

  &__upload {
    width: calc(100% - 20px);

    &.block-upload--active {
      width: 100%;
    }
  }

  &__btns {
    margin-top: 55px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: 0;
    position: relative;

    &-btn {
      flex-shrink: 0;
      font-size: 10px;
      background-color: transparent;
      padding: 0;
      border: none;
      color: var(--f-active-color);
      cursor: pointer;
      &:focus {
        opacity: 0.7;

        & + .block-content-item__btns-form {
          opacity: 1;
          pointer-events: auto;
          top: calc(100% + 6px);
        }
      }

      &:hover {
        opacity: 0.7;
      }

      &-delete {
        color: #FF0000;
        margin-left: auto;
      }
    }

    &-box {
      position: relative;
    }
  }

  &__items {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  &__el {
    &:last-of-type {
      margin-bottom: 15px;
    }
  }

  &--disabled {
    pointer-events: none !important;
  }
}
</style>
