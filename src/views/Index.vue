<template>
  <el-scrollbar height="100%">
    <Header></Header>
    <main class="main">
      <router-view></router-view>
    </main>
  </el-scrollbar>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
:deep(.el-scrollbar__view) {
  height: 100%;
}
.main {
  width: 100vw;
  height: calc(100% - 80px);

  &::before {
    content: '';
    position: absolute;
    top: 68px;
    left: 0;
    width: 100%;
    height: calc(100% - 70px);
    background: transparent url(/src/assets/img/app_bg.png) no-repeat 0 0/100%
      100%;
    filter: blur(5px);
    z-index: -99;
    background-size: cover;
  }
}
</style>
