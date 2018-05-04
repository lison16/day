<template>
  <div id="app">
    <main-con/>
  </div>
</template>

<script>
import mainCon from '@/views/main.vue'
export default {
  name: 'day',
  components: {
    mainCon
  }
}
</script>

<style lang="less">
html,body{
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
*{
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#app{
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>
