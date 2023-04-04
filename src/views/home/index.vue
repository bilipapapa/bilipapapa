<template>
  <div>Home</div>
  <span>{{ state.count }}</span>
  <el-button type="primary">按钮</el-button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Home',
})
const state = reactive({
  count: 0,
})

setInterval(() => {
  state.count++
}, 1000)
</script>

<style lang="scss" scoped></style>
