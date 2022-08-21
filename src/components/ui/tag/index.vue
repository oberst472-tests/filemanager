<template>
  <component
      :is="tag"
      :class="classes"
      class="ui-tag"
  >
    <slot/>
  </component>
</template>


<script lang="ts">
export default {
  name: 'UiTag'
}
</script>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  tag?: string
  color?: string
}

const props = defineProps<Props>()
const tag = computed(() => props.tag || 'div')
const classes = computed(() => {
  return {
    [`ui-tag--color-${props.color}`]: true
  }
})
</script>

<style lang="scss">
.ui-tag {
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  line-height: 1;


  &:before {
    content: '';
    width: 8px;
    height: 8px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: #f5baff;
  }
  &--color-orange {
    &:before {
      background-color: #f8a34d;
    }
  }
  &--color-blue {
    &:before {
      background-color: #488ef7;
    }
  }
  &--color-green {
    &:before {
      background-color: #5fcf65;
    }
  }
}
</style>
