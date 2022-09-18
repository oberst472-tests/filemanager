<template>
   <div class="block-placeholder">
      <span class="block-placeholder__title">Drag and drop or upload files</span>
      <ul class="block-placeholder__list">
        <li class="block-placeholder__item">Images to upload jpg, png.</li>
        <li class="block-placeholder__item">The file size is no more 30 MB</li>
      </ul>
    </div>
</template>


<script lang="ts">
export default {
  name: 'LBlockPlaceholder'
}
</script>

<script setup lang="ts">

</script>

<style lang="scss">
.block-placeholder {
  &__title {
    margin-top: 40px;
    font-weight: 600;
    font-size: 16px;
    display: block;
    padding: 0 40px;
    color: #FFFFFF;
  }

  &__list {
    display: block;
    margin-top: 10px;
    padding: 0;
    text-align: center;
  }

  &__item {
    display: block;
    list-style: none;
    font-size: 12px;
    font-weight: 500;
    position: relative;
    color: white;
    padding: 0 15px;
    text-align: left;

    & + & {
      margin-top: 5px;
    }

    &:before {
      content: '';
      width: 4px;
      margin-right: 5px;
      height: 4px;
      border-radius: 50%;
      background-color: white;
      display: inline-flex;
      position: relative;
      top: 50%;
      transform: translateY(-50%)
    }
  }
}
</style>
