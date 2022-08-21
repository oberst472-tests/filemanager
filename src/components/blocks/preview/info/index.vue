<template>
  <div class="block-info">
    <div class="block-info__item">
      <span class="block-info__subtitle">EXIF Information</span>
      <span class="block-info__text block-info__text--ml-auto">Show more</span>
    </div>

    <div class="block-info__item">
      <span class="block-info__subtitle">Short link</span>
      <a href="#" target="_blank" class="block-info__link">http://lorem-ipsum.com</a>
    </div>

    <div class="block-info__item block-info__item--align-start">
      <span class="block-info__subtitle">Message</span>
      <span class="block-info__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid facere sapiente similique.</span>
    </div>

    <div class="block-info__item block-info__item--align-start">
      <span class="block-info__subtitle">Expiry</span>
      <v-date-picker v-model="date">
        <template v-slot="{ inputValue, togglePopover }">
          <input
              @click="togglePopover()"
              :value="inputValue"
              placeholder="choose the date"
              class="block-info__inp"
              readonly
          />
        </template>
      </v-date-picker>
    </div>
  </div>
</template>


<script lang="ts">
export default {
  name: 'LBlockInfo'
}
</script>

<script setup lang="ts">
import { ref } from 'vue';

const date = ref('')
</script>

<style lang="scss" scoped>
.block-info {
  &__item {
    display: flex;
    align-items: flex-end;

    & + & {
      margin-top: 15px;
    }

    &--align-start {
      align-items: flex-start;
    }
  }

  &__subtitle {
    line-height: 16px;
    margin-right: 50px;
    white-space: nowrap;
    min-width: 75px;
  }

  &__text {
    font-size: 10px;
    color: #797979;
    line-height: 1.2;

    &--ml-auto {
      margin-left: auto;
    }
  }

  &__link {
    font-size: 13px;
    text-decoration-line: underline;
    color: var(--f-active-color);

    &:hover {
      color: var(--f-success-color)
    }

  }

  &__inp {
    outline: none !important;
    border: 1px solid #797979;
    border-radius: 3px;
    cursor: pointer;
    font-family: $main-font;
    padding: 5px 5px;
    font-size: 12px;

    &:focus {
      border-color: var(--f-success-color)
    }
  }
}
</style>
