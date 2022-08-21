<template>
    <span
        class="ui-switch"
        :class="classes"
        @click="changeSwitch"
    >
      <span class="ui-switch__switch">
        <span class="ui-switch__circle"></span>
      </span>

      <span class="ui-switch__text"><slot/></span>
    </span>
</template>


<script lang="ts">
export default {
  name: 'UiSwitch'
}
</script>

<script setup lang="ts">
interface Props {
  theme?: string
}

import { computed, ref } from 'vue';
const props = defineProps<Props>()


const isActive = ref(false)
const classes = computed(() => {
  return {
    'ui-switch--active': isActive.value,
    [`ui-switch--theme-${props.theme || 'default'}`]: true
  }
})

const changeSwitch = function () {
  isActive.value = !isActive.value
}
</script>

<style lang="scss">
.ui-switch {
  user-select: none;
  display: flex;
  cursor: pointer;
  align-items: center;

  &__switch {
    width: 36px;
    height: 22px;
    padding: 2px;
    background: rgba(0, 0, 0, 0.05);
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.2);
    border-radius: 11px;
    display: inline-flex;
    transition-duration: 0.3s;
    margin-right: 5px;
  }

  &__circle {
    width: calc(50% + 2px);
    height: 100%;
    background-color: #fff;
    border-radius: 50%;
    flex-shrink: 0;
    position: relative;
    transition-duration: 0.3s;
    left: 0;
  }

  &__text {
    font-size: 13px;
    line-height: 1;
  }

  &--active {
    .ui-switch__circle {
      left: calc(50% - 2px);
    }
  }
  &--theme {
    &-blue {
      .ui-switch__switch {
        background-color: var(--f-active-color);
      }
    }
  }
}
</style>
