<template>
  <div class="home">
    <main class="home-main">
      <div class="menu-box-1">
        <div class="msg-box"></div>

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
    </main>
  </div>
</template>

<script setup lang="ts">
import pinia from '@/pinia/index'
defineOptions({
  name: 'Home',
})

onBeforeMount(() => {

})

const menuInfo = reactive({
  menuList1: [
    { name: '1', icon: '', link: '' },
    { name: '2', icon: '', link: '' },
    { name: '3', icon: '', link: '' },
    { name: '4', icon: '', link: '' },
  ],

  menuList2: [
    { name: '5', icon: '', link: '' },
    { name: '6', icon: '', link: '' },
    { name: '7', icon: '', link: '' },
    { name: '8', icon: '', link: '' },
  ],
})
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .home-main {
    width: 90%;
    margin: 20px auto 0;
  }

  .menu-box-1 {
    display: flex;
    width: 100%;
    height: 54%;
    .msg-box {
      width: 55%;
      height: 100%;
      border: 1px dashed #bbb;
    }
    .menuList1 {
      width: 30%;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      align-items: center;
      justify-content: space-evenly;
      .module {
        height: 39%;
        margin: 4%;
      }
    }

    .menuList2 {
      flex: 1;
      display: flex;
      flex-direction: column;
      .module {
        margin: 3% 0;
        height: 20%;
        aspect-ratio: auto;
      }
    }
  }

  .menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    border: 1px dashed #bbb;
  }
}
</style>
