<template>
  <div class="main-con">
    <div class="main" id="main">
      <circle-menu :show="showMenu"></circle-menu>
      <center :has-message="hasMessage" :water-drinked="waterDrinked" @on-click-message="handleClickMessage" @on-show-menu="handleShowMenu"/>
    </div>
  </div>
</template>

<script>
import center from './center'
import circleMenu from './circle-menu'
export default {
  components: {
    center,
    circleMenu
  },
  data () {
    return {
      waterDrinked: 0,
      hasMessage: false,
      showMenu: true
    }
  },
  methods: {
    handleClickMessage () {
      console.log(111)
    },
    handleShowMenu () {
      this.showMenu = !this.showMenu
    }
  },
  mounted () {
    setInterval(() => {
      if (this.waterDrinked < 7) this.waterDrinked++
    }, 200)
    this.hasMessage = false
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
