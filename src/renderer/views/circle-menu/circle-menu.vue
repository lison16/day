<template>
  <div class="menu-wrapper">
    <div id="menu_main"></div>
  </div>
</template>

<script>
import SVG from 'svg.js'
// const path = require('path')
export default {
  name: 'ciecleMenu',
  data () {
    return {
      draw: {},
      size: 300
    }
  },
  computed: {
    halfSize () {
      return this.size / 2
    }
  },
  mounted () {
    const size = this.size
    const halfSize = this.halfSize
    let draw = SVG('menu_main').size(size, size)
    this.draw = draw

    const radial = draw.gradient('radial', function (stop) {
      stop.at(0, 'rgba(0,0,0,0)')
      stop.at(0.8, 'rgba(255,255,255,0.1)')
      stop.at(1, 'rgba(255,255,255,0.2)')
    })
    draw.circle(size).center(halfSize, halfSize).fill(radial)
  }
}
</script>

<style lang="less">
.menu-wrapper{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  & > div{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
