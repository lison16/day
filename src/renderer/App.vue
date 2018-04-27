<template>
  <div id="app">
    <!-- <backboard :padding="0" deg="70deg" :colors="[['#F1E1FE'], ['#F8F9FF']]"> -->
      <router-view/>
    <!-- </backboard> -->
  </div>
</template>

<script>
import backboard from '_c/backboard'
export default {
  name: 'day',
  components: {
    backboard
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
  background: #F8F8F8;
}
</style>
