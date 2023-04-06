<template>
  <header class="app_header">
    <div class="app_header-wrapper">
      <div class="app_header-content">
        <!-- logo -->
        <div class="logo-box">
          <img class="logoImg" src="@/assets/svg/Nahida.svg" alt="" />
          <span class="logoName">{{ state.logoName }}</span>
        </div>

        <!-- 菜单 -->
        <div class="menu-box"></div>
        <!-- 语言切换 -->
        <div class="lang-box">
          {{ $t('hello') }}
          <a-dropdown :trigger="['click']" v-model="currentLocale">
            <img class="lang-icon" src="@/assets/svg/lang.svg" alt="" />
            <template #overlay>
              <a-menu @click="changeLang">
                <a-menu-item key="en">EN</a-menu-item>
                <a-menu-item key="zh">简体中文</a-menu-item>
                <a-menu-item key="ja">日本</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>

        <!-- 用户信息 -->
        <div class="userInfo-box">
          <img class="user_avatar" src="@/assets/svg/Nahida.svg" />
          <span class="user_name">{{ state.userName }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { MenuProps } from 'ant-design-vue';
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
defineOptions({
  name: 'Header',
})
const state = reactive({
  logoName: '待定',
  userName: '用户名',
})

onBeforeMount(() => {})

onMounted(() => {})

let currentLocale = i18n.locale.value
const changeLang: MenuProps['onClick'] = ({ key }) => {
  localStorage.setItem('locale', String(key))
  i18n.locale.value = String(key)
}
</script>

<style lang="scss" scoped>
.app_header {
  $header_height: 70px;

  height: $header_height;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
  &-wrapper {
    height: 100%;
    background-image: radial-gradient(transparent 2px, #fff 1px);
    background-size: 9px 9px;
    backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
  }

  &-content {
    display: flex;
    height: calc(100%);
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
  }

  .logo-box {
    display: flex;
    align-items: center;
    cursor: pointer;
    .logoImg {
      width: 50px;
      height: 50px;
    }
    .logoName {
      font-size: 18px;
      margin-left: 10px;
    }
  }

  .menu-box {
    flex: 1;
  }

  .lang-box {
    margin-right: 15px;
    .lang-icon {
      cursor: pointer;
      width: 15px;
    }
  }
  .userInfo-box {
    display: flex;
    align-items: center;
    .user_avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
    }
    .user_name {
      font-size: 16px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>
