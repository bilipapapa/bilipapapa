<template>
  <svg v-if="props.type === 'svg'" class="I" aria-hidden="true">
    <use :xlink:href="props.icon"></use>
  </svg>

  <i v-else :class="`I icon-font ${props.icon}}}`"></i>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Icon',
  inheritAttrs: false,
})

interface IconProps {
  icon: string
  type: 'svg' | 'icon'
}
const props = withDefaults(defineProps<IconProps>(), {
  icon: '',
  type: 'svg',
})

const state = reactive({})

onBeforeMount(() => {})

onMounted(() => {})
</script>

<style lang="scss" scoped>
.I {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
