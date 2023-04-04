<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.app_header + div {
  min-height: calc(100% - 60px);
}
</style>
