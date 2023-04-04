<template>
  <div class="home">
    <div class="msg-box"></div>

    <div class="menu-box" v-for="item in 3"></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Home',
})
const state = reactive({})
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .msg-box {
    width: 40%;
    height: 50%;
    border: 1px dashed #000;
  }

  .menu-box {
    width: 300px;
    height: 300px;
    border: 1px dashed #000;
    margin-left: 10px;
  }
}
</style>
