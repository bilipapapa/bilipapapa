<template>
  <div class="home" ref="homeRef">
    <main class="home-main">
      <div class="menu-box">
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
              <div
                v-for="item in menuInfo.menuList1"
                class="module menu-item flex-col"
                @click="toPath(item.path)"
              >
                <I :icon="item.icon"></I>
                <div class="menuName">{{ item.name }}</div>
              </div>
            </div>

            <div class="menuList2 flex">
              <div v-for="item in menuInfo.menuList2" class="module menu-item">
                <img src="" alt="" />
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="menu-box">
        <div class="menuList3 flex">
          <div v-for="item in menuInfo.menuList3" class="module menu-item">
            <img src="" alt="" />
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts" name="Home">
import { Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

import store from '@/store'
const router = useRouter()

const searchTxt = ref<string>('')
const { menuStore } = store

const menuInfo = reactive({
  menuList1: menuStore.menuList.slice(0, 6),
  menuList2: menuStore.menuList.slice(6, 10),
  menuList3: menuStore.menuList.slice(10, 20),
})

const toPath = (path: string) => {
  if (!path) {
    return ElMessage.error('无path链接')
  }
  let routeUrl = router.resolve({
    path: path,
  })
  window.open(routeUrl.href, '_blank')
}

const resize = () => {
  let homeWidth = homeRef.value.offsetWidth
  if (homeWidth)
    document.documentElement.style.setProperty(
      '--screen_width',
      `${homeWidth}px`,
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
$module_width2: calc(0.173334 * #{$main_width});
$module_width3: calc(0.19 * #{$main_width});
$module_width4: calc(0.22 * #{$main_width});
$module_margin: calc(0.01 * #{$main_width});
$module_bg: rgba(255, 255, 255, 0.8);
$module_shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
.home {
  height: 100%;
  .home-main {
    width: $main_width;
    margin: $module_margin auto 0;
    height: 1536px;
  }

  .I {
    font-size: 50px;
  }

  .menu-box {
    width: 100%;
    display: flex;
    justify-content: center;
    .msg-box {
      width: $msgBox_width;
      height: calc(0.22 * $main_width);
      background-color: $module_bg;
      box-shadow: $module_shadow;
    }
    .search {
      margin-left: $module_margin;
      margin-bottom: $module_margin;
      width: calc(100% - $module_margin);
      height: calc(0.02 * $main_width);
      z-index: 0;
    }

    :deep(.search .el-input__wrapper) {
      background: $module_bg !important;
    }
    .menuList1 {
      display: grid;
      grid-template-columns: repeat(3, $module_width);
      grid-template-rows: repeat(2, $module_width);
      gap: $module_margin;
      padding: 0 $module_margin;
      .module {
        width: $module_width;
        .menuName {
          margin-top: 8px;
        }
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

    .menuList3 {
      display: grid;
      grid-template-columns: repeat(3, $module_width2) $module_width3 $module_width4;
      grid-template-rows: repeat(2, calc(0.07 * $main_width));
      gap: $module_margin;
      .module {
        width: 100%;
        height: 100%;
        aspect-ratio: auto;
      }
    }
  }

  .menu-item {
    width: 16%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    font-family: '黑体';
    color: #60bbff;
    aspect-ratio: 1;
    cursor: pointer;
    background: $module_bg;
    box-shadow: $module_shadow;
    border-radius: 10px;

    > div {
      display: inline-block;
    }

    &:hover {
      // box-shadow: 0 0 0 18px transparent;
      // animation: pulse 1s;
    }
  }
}
</style>
