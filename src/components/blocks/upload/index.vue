<template>
  <div class="block-upload">
    <div class="block-upload__content">Drag and drop or upload files</div>
  </div>
</template>


<script lang="ts">
export default {
  name: 'BlockUpload'
}
</script>

<script setup lang="ts">

</script>

<style lang="scss">
.block-upload {
  height: 50px;
  background: #F9F9F9;
  border: 1px dashed #000000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  transition-duration: 0.3s;
  position: absolute;

  &--active {
    z-index: 2;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    background-color: transparent;
    border: none;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(180deg, rgba(138, 138, 138, 0.6) 0%, rgba(138, 138, 138, 0.5) 100%);
      backdrop-filter: blur(3px);
      transition-duration: 0.3s;
    }
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      z-index: -1;
      border: 1px dashed white;
      transition-duration: 0.3s;

    }
    .block-upload__content {
      position: relative;
      z-index: 1;
      padding: 20px;
      font-weight: 600;
      font-size: 16px;
      /* or 22px */

      text-align: center;

      color: #FFFFFF;
      transition-duration: 0.3s;
    }
  }
}
</style>
