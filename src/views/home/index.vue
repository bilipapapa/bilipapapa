<template>
  <div class="home" ref="homeRef">
    <main class="home-main">
      <div class="menu-box-1">
        <div class="msg-box"></div>

        <div class="">
          <el-input
            type="text"
            class="search"
            v-model.trim="searchTxt"
            :prefix-icon="Search"
            placeholder="搜索"
          />

          <div class="flex">
            <div class="menuList1 flex">
              <div v-for="item in menuInfo.menuList1" class="module menu-item">
                <img src="" alt="" />
                <span>{{ item.name }}</span>
              </div>
            </div>

            <div class="menuList2 flex">
              <div v-for="item in menuInfo.menuList2" class="module menu-item">
                <img src="" alt="" />
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
defineOptions({
  name: 'Home',
})

const searchTxt = ref<string>('')

const menuInfo = reactive({
  menuList1: [
    { name: '1', icon: '', link: '' },
    { name: '2', icon: '', link: '' },
    { name: '3', icon: '', link: '' },
    { name: '4', icon: '', link: '' },
    { name: '5', icon: '', link: '' },
    { name: '6', icon: '', link: '' },
  ],

  menuList2: [
    { name: '7', icon: '', link: '' },
    { name: '8', icon: '', link: '' },
    { name: '9', icon: '', link: '' },
    { name: '10', icon: '', link: '' },
  ],
})

const resize = () => {
  let homeWidth = homeRef.value.offsetWidth
  if (homeWidth)
    document.documentElement.style.setProperty(
      '--screen_width',
      `${homeWidth}px`
    )
}

const homeRef = ref<any>(null)
onMounted(() => {
  resize()
  window.onresize = resize
})
</script>

<style lang="scss" scoped>
$main_width: calc(0.8 * var(--screen_width));
$msgBox_width: calc(0.54 * #{$main_width});
$module_width: calc(0.09 * #{$main_width});
$module_margin: calc(0.01 * #{$main_width});
$modele_bg: rgba(255, 255, 255, 0.8);
$module_shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
.home {
  height: 100%;
  .home-main {
    width: $main_width;
    margin: $module_margin auto 0;
    height: 1600px;
  }

  .menu-box-1 {
    display: flex;
    width: 100%;
    height: 57%;
    .msg-box {
      width: $msgBox_width;
      height: calc(0.22 * $main_width);
      background-color: $modele_bg;
      box-shadow: $module_shadow;
    }
    .search {
      margin-left: $module_margin;
      margin-bottom: $module_margin;
      width: calc(100% - $module_margin);
      height: calc(0.02 * $main_width);
      z-index: -1;
    }

    :deep(.search .el-input__wrapper) {
      background: $modele_bg !important;
    }
    .menuList1 {
      display: grid;
      grid-template-columns: repeat(3, $module_width);
      grid-template-rows: repeat(2, $module_width);
      gap: $module_margin;
      padding: 0 $module_margin;
      .module {
        width: $module_width;
      }
    }

    .menuList2 {
      display: flex;
      flex-direction: column;
      .module {
        width: calc(0.12 * #{$main_width});
        height: calc(0.04 * $main_width);
        margin-bottom: $module_margin;
        aspect-ratio: auto;
      }
    }
  }

  .menu-item {
    width: 16%;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    background: $modele_bg;
    box-shadow: $module_shadow;
  }
}
</style>
