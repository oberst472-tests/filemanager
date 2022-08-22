<template>
  <component
      :is="tag"
      :class="classes"
      class="ui-item"
  >
    <slot/>
  </component>
</template>


<script lang="ts">
export default {
  name: 'UiItem'
}
</script>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  tag?: string
  type: string
}

const props = defineProps<Props>()
const tag = computed(() => props.tag || 'div')

const classes = computed(() => {
  return {
    [`ui-item--type-${props.type}`]: true
  }
})
</script>

<style lang="scss">
.ui-item {
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  //transition-duration: 0.3s;

  &:hover {
    background-color: var(--f-active-color);
    color: #ffffff;
  }

  &:before {
    content: '';
    width: 14px;
    height: 10px;
    margin-right: 5px;
    background-size: contain;
    background-repeat: no-repeat;
    flex-shrink: 0;
  }

  &--type {
    &-root-folder {
      &:before {
        background-image: url('./images/root-folder.svg');
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: var(--f-text-color)
      }
    }

    &-folder {
      &:before {
        background-image: url('./images/folder.svg');
      }
    }

    &-img {
      &:before {
        background-image: url('./images/img.svg');
      }
    }
  }
}
</style>
