<template>
  <div class="menu-item-wrapper" :style="{width: `${radius * 2}px`, height: `${radius * 2}px`}">
    <div class="menu-item" :id="`menu_item_${itemIndex}`"></div>
  </div>
</template>

<script>
import SVG from 'svg.js'
export default {
  name: 'menuItem',
  props: {
    itemIndex: Number,
    item: Object,
    radius: Number
  },
  data () {
    return {
      draw: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      let draw = SVG(`menu_item_${this.itemIndex}`)
      this.draw = draw
      const pos = this.radius
      const line2pos = this.radius * Math.sin(45 * Math.PI / 180)

      let itemGradient = draw.gradient('radial', stop => {
        stop.at({ offset: 0, color: '#fff', opacity: 0.1 })
        stop.at({ offset: 1, color: '#D9D9D9', opacity: 0.1 })
      })
      draw.path(`M${pos} ${pos} L${pos} 0 a${this.radius} ${this.radius} 45 0 1 ${line2pos - 4} ${pos - line2pos - 4} L${pos} ${pos} z`).fill(itemGradient).rotate(this.itemIndex * 45, pos, pos - 1)
    })
  }
}
</script>

<style lang="less">
.menu-item{
  height: 100%;
  width: 100%;
}
</style>
