<template>
  <form
      class="block-form"
      :id="props.id"
      tabindex="1"
      @submit.prevent="emits('send', val)"
  >
    <input
        type="text"
        placeholder="folders name"
        tabindex="1"
        class="block-form__inp"
        v-model="val"
    >
    <button
        type="submit"
        class="block-form__btn"
    >
      Create folder
    </button>
  </form>
</template>


<script lang="ts">
export default {
  name: 'BlockForm'
}
</script>

<script setup lang="ts">
import { defineEmits, defineProps, onMounted, onUnmounted, ref } from 'vue';

const emits = defineEmits(['send', 'close'])
const val = ref('')
const props = defineProps({
})
const close = function (e: Event) {
  if (!(e.target.parentNode.classList.contains('block-form') || e.target.classList.contains('block-form'))) {
    emits('close')
  }
}
onMounted(() => {
  setTimeout(() => {
    window.addEventListener('click', close)
  }, 0);
})
onUnmounted(() => {
  window.removeEventListener('click', close)
})
</script>

<style lang="scss">
.block-form {
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

  &__inp {
    background-color: #F6F6F8;
    border: 1px solid #DFDFDF;
    box-shadow: 4px 4px 20px rgba(84, 84, 84, 0.08);
    border-radius: 6px;
    padding: 6px 8px;
    outline: none;
    font-size: 12px;

    &::placeholder {
      opacity: 0.7;
    }

    &:focus {
      &::placeholder {
        opacity: 0;
      }
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
