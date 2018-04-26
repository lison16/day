<template>
  <div id="app">
    <!-- <backboard deg="70deg" :colors="[['#F1E1FE'], ['#F8F9FF']]"> -->
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
}
*{
  margin: 0;
  padding: 0;
}
#app{
  width: 100%;
  height: 100%;
  background: #f8f8f9;
}
</style>
