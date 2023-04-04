<template>
  <header class="app_header">
    <div class="app_header-wrapper"></div>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Header',
})
const state = reactive({})

onBeforeMount(() => {})

onMounted(() => {})
</script>

<style lang="scss" scoped>
.app_header {
  $header_height: 60px;

  height: $header_height;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px dashed #000;
  &-wrapper {
    height: 100%;
    background-image: radial-gradient(transparent 2px, #fff 1px);
    background-size: 9px 9px;
    backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
  }
}
</style>
