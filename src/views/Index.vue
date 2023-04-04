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
  height: calc(100% - 80px);
  padding: 0 10px;
}
</style>
