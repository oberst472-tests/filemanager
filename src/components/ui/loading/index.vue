<template>
  <div class="ui-loading">
    <svg class="ui-loading__icon" x="0" y="0" viewBox="0 0 375.023 375.023">
      <path d="M81.305,293.711c-58.3-58.5-58.3-153.8,0-212.3l31.1,31.1v-93.7h-93.7l36.2,36.2c-73.2,73.1-73.2,192,0,265.2    c46.2,46.1,110.5,63.2,170.1,51v-38.6C175.305,345.511,120.205,332.611,81.305,293.711z" fill="#4F93FE"></path>
      <path d="M320.105,55.011c-46.2-46.3-110.5-63.4-170.1-51.2v38.6c49.7-12.9,104.9,0.2,143.7,39c58.5,58.5,58.5,153.8,0,212.3    l-31.1-31.1v93.8h93.8l-36.2-36.2C393.305,247.011,393.305,128.111,320.105,55.011z" fill="#4F93FE"></path>
    </svg>
  </div>
</template>


<script lang="ts">
export default {
  name: ''
}
</script>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

.ui-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.44);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  &__icon {
    width: 60px;
    height: 60px;
    animation-name: spin;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}
</style>
