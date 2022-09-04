<template>
  <div
      class="block-add-tag"
      @submit.prevent="emits('send', val)"
  >
    <div class="block-add-tag__title">
      <slot/>
    </div>
    <div class="block-add-tag__body">
      <span
          class="block-add-tag__tag"
          :class="{'block-add-tag__tag--active': tagsState[index]}"
          v-for="(item, index) in props.items"
          :style="{'backgroundColor': item?.color}"
          :key="item.id"
          @click="changeTag({id: item.id, index})"
      ></span>
    </div>
    <button
        type="submit"
        class="block-add-tag__btn"
        @click="chooseTag"
    >
      Add tags
    </button>

  </div>
</template>


<script>
export default {
  name: 'BlockAddTag'
}
</script>

<script setup>
import { defineEmits, defineProps, onMounted, onUnmounted, ref } from 'vue';

const emits = defineEmits(['chooseTag', 'close'])
const val = ref('')
const tags = ref([])
const tagsState = ref([])
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
const close = function (e) {
  const el = e.target
  if (
      !(el.classList.contains('block-add-tag') ||
        el.classList.contains('block-add-tag__tag') ||
        el.classList.contains('block-add-tag__body') ||
        el.classList.contains('block-add-tag__btn') ||
        el.parentNode.classList.contains('block-add-tag__body'))) {
    emits('close')
  }

}
const changeTag = function ({id, index}) {
  const ind = tags.value.findIndex(item => item === id)
  if (ind === -1) {
    tags.value.push(id)
  } else {
    tags.value.splice(ind, 1)
  }
  console.log(index);
  console.log(tagsState.value[index]);
  tagsState.value[index] = !tagsState.value[index]
}
const chooseTag = function () {
emits('chooseTag', {tags: tags.value})
}
onMounted(() => {
  setTimeout(() => {
    window.addEventListener('click', close)
  }, 0);
  tagsState.value = new Array(props.items.length).fill(false)
})
onUnmounted(() => {
  window.removeEventListener('click', close)
})
</script>

<style lang="scss">
.block-add-tag {
  z-index: 10;
  transition-duration: 0.3s;
  padding: 10px;
  position: absolute;
  left: 0;
  top: calc(100% + 6px);
  box-shadow: 4px 4px 20px rgba(84, 84, 84, 0.08);
  border-radius: 6px;

  background-color: #F6F6F8;
  border: 1px solid #DFDFDF;

  &:focus {
    opacity: 1;
    pointer-events: auto;
    top: calc(100% + 6px);
  }

  &:before {
    content: '';
    position: absolute;
    left: 10px;
    top: -6px;
    width: 10px;
    height: 10px;
    border-top-left-radius: 3px;
    transform: rotate(45deg);
    background-color: inherit;
    border-top: 1px solid #DFDFDF;
    border-left: 1px solid #DFDFDF;
  }


  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 14px;
    color: #212121;
    pointer-events: none;
  }

  &__body {
    display: flex;
    margin-top: 15px;
    gap: 8px;
    max-width: 190px;
    flex-wrap: wrap;


  }

  &__tag {
    transition-duration: 0.3s;
    cursor: pointer;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    //font-size: 0;
    border-radius: 50%;
    transition-property: transform;
    &:active {
      opacity: 0.7;
    }
    &--active {
      transform: scale(1.3) !important;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
  &__btn {
    border: 0;
    background-color: var(--f-success-color);
    width: 100%;
    margin-top: 10px;
    padding: 6px;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    font-size: 12px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }
}

.leave-enter-active {
  transition: all 0.3s ease-out;
}

.leave-leave-active {
  transition: all 0.3s linear;
}

.leave-enter-from,
.leave-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
