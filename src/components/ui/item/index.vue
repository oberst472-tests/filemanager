<template>
    <component
        :is="tag"
        :class="classes"
        class="ui-item"
        @dblclick.self="emits('dblClick')"
    >
      <span class="ui-item__text"><slot/></span>
      <button class="ui-item__add-tag" title="add-tag" @click.self="emits('addTag')">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M9.705 4.79L5.205 0.29C5.025 0.11 4.775 0 4.5 0H1C0.45 0 0 0.45 0 1V4.5C0 4.775 0.11 5.025 0.295 5.21L4.795 9.71C4.975 9.89 5.225 10 5.5 10C5.775 10 6.025 9.89 6.205 9.705L9.705 6.205C9.89 6.025 10 5.775 10 5.5C10 5.225 9.885 4.97 9.705 4.79ZM1.75 2.5C1.335 2.5 1 2.165 1 1.75C1 1.335 1.335 1 1.75 1C2.165 1 2.5 1.335 2.5 1.75C2.5 2.165 2.165 2.5 1.75 2.5Z" fill="currentColor"/>
        </svg>
      </button>
<!--      <ul class="ui-item__tags" v-if="props.tags?.length">-->
<!--        <li-->
<!--            class="ui-item__tag"-->
<!--            v-for="item in props.tags"-->
<!--            :style="{backgroundColor: item?.color}"-->
<!--        >tag</li>-->
<!--      </ul>-->
    </component>
</template>


<script lang="ts">
export default {
  name: 'UiItem'
}
</script>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue';
import { TagType } from '../../../types/tags';

interface Props {
  tag?: string
  tags?: TagType[]
  type: string
  isActive?: boolean
}

const props = defineProps<Props>()
const emits = defineEmits(['addTag', 'dblClick'])
const classes = computed(() => {
  return {
    [`ui-item--type-${props.type}`]: true,
    [`ui-item--active`]: props.isActive
  }
})
</script>

<style lang="scss">
.ui-item {
  user-select: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  //transition-duration: 0.3s;
  &__text {
    pointer-events: none;
  }

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

    &-image {
      &:before {
        background-image: url('./images/img.svg');
      }
    }
  }
  &--active {
    background-color: var(--f-active-color);
    color: #ffffff;
  }
  &__add-tag {
    border: none;
    background-color: transparent;
    display: inline-flex;
    width: 10px;
    height: 10px;
    background-repeat: no-repeat;
    margin-left: 10px;
    color: #CBCBCD;
    transition-duration: 0.3s;
    transform: scale(1.1);
    cursor: pointer;
    padding: 0;
    &:hover {
      color: #2BB708;
    }
    svg {
      pointer-events: none;
    }
  }
}
</style>