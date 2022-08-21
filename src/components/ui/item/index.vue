<template>
  <component
      :is="tag"
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
  bar?: number
}

const props = defineProps<Props>()
const tag = computed(() => props.tag || 'div')
</script>

<style lang="scss">
.ui-item {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  line-height: 1;


  &:before {
    content: '';
    width: 14px;
    height: 12px;
    margin-right: 5px;
    background-image: url('./images/root-folder.svg');
    background-size: contain;
    background-repeat: no-repeat;
    flex-shrink: 0;
  }
}
</style>
