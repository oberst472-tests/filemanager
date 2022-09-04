<template>
  <component
      :is="tag"
      :class="classes"
      class="ui-tag"
  >
    <span class="ui-tag__circle" :style="{'backgroundColor': props.color}"></span>
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: var(--f-text-color)
  }


  &__circle {
    content: '';
    width: 8px;
    height: 8px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: #f5baff;
  }
}
</style>
