<template>
  <button class="ui-btn">
    <span v-if="!props.isLoading"><slot/></span>
    <span class="ui-btn__loading" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" id="Sync" d="m16 64c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-30.879 25.121-56 56-56 15.391 0 29.632 6.133 40 16.693v-12.693c0-2.209 1.791-4 4-4s4 1.791 4 4v24c0 2.209-1.791 4-4 4h-24c-2.209 0-4-1.791-4-4s1.791-4 4-4h15.908c-8.975-10.096-21.886-16-35.908-16-26.467 0-48 21.533-48 48zm100-4c-2.209 0-4 1.791-4 4 0 26.467-21.533 48-48 48-14.022 0-26.933-5.904-35.908-16h15.908c2.209 0 4-1.791 4-4s-1.791-4-4-4h-24c-2.209 0-4 1.791-4 4v24c0 2.209 1.791 4 4 4s4-1.791 4-4v-12.693c10.368 10.56 24.609 16.693 40 16.693 30.879 0 56-25.121 56-56 0-2.209-1.791-4-4-4z" fill="#ffffff" data-original="#ffffff" class=""></path></g></svg>
      </span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'UiBtn'
}
</script>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  isLoading: boolean
}

const props = defineProps<Props>()
</script>

<style lang="scss">
.ui-btn {
  font-size: 14px;
  min-height: 40px;
  background-color: var(--f-active-color);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  min-width: 132px;

  &__loading {
    display: flex;
    width: 20px;
    height: 20px;
    animation-name: spin;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    svg {
      width: inherit;
      height: inherit;
    }
  }

  &--loading {
    pointer-events: none;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

</style>
