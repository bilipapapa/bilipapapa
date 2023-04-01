<template>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent url('@/assets/img/app_bg.png') no-repeat 0 0 / 100% 100%;
    filter: blur(10px);
    z-index: -1;
    background-size: cover;
  }
}
</style>
