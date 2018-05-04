<template>
  <div class="main-con">
    <div class="main" id="main">
      <center :water-drinked="waterDrinked"/>
    </div>
  </div>
</template>

<script>
import center from './center'
export default {
  components: {
    center
  },
  data () {
    return {
      waterDrinked: 0
    }
  },
  mounted () {
    setInterval(() => {
      if (this.waterDrinked < 8) this.waterDrinked++
    }, 2000)
  }
}
</script>

<style lang="less">
.main-con{
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(./bg.jpg);
  background-size: 100% 100%;
  background-position: -230px -130px;
  .main{
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
