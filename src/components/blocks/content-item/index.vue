<template>
  <div class="block-content-item">
    <div class="block-content-item__content">
      <BlockUpload class="block-content-item__upload"/>

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
                   @openFolder="openFolder({id: item.id, name: item.name})"
                   @chooseTag="addTag"
                   v-for="item in info.children"
                   :info="item"
        >
          {{ item.name }} / {{ item.id }}
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
import BlockItem from '@/components/blocks/item/index.vue'
import BlockUpload from '@/components/blocks/upload/index.vue'
import BlockAddForm from '@/components/blocks/add-form/index.vue'
import { defineProps, reactive, ref } from 'vue';

const props = defineProps({
  info: {
    type: Object,
    default: () => {
      return {}
    }
  },
  index: {
    type: Number,
    default: 0
  }
})

const activeItem = ref(0)
const state = reactive({
  isCreateFolderActive: false
})
const emits = defineEmits(['addFolder', 'openFolder', 'addTag'])
const addFolder = function (name: string) {
  emits('addFolder', {parentId: props.info.parentId, name})
}

const addTag = function ({tags, type, folderId}: any) {
  emits('addTag', {tags, type, folderId})
}
const openFolder = function ({id, name}: { id: number, name: string }) {
  console.log(55);
  activeItem.value = Number(id)
  emits('openFolder', {id, name, index: props.index})
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
}
</style>
