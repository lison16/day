<template>
  <div class="home">
    <home-left class="home-con left-con"></home-left>
    <home-right class="home-con right-con"></home-right>
  </div>
</template>

<script>
import homeLeft from './left/left.vue'
import homeRight from './right/right.vue'
export default {
  name: 'home',
  components: {
    homeLeft,
    homeRight
  }
}
</script>

<style lang="less">
@import './home.less';
</style>
