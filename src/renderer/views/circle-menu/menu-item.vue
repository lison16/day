<template>
  <div>
    <div :id="`menu_item_${itemIndex}`"></div>
  </div>
</template>

<script>
import SVG from 'svg.js'
export default {
  name: 'menuItem',
  props: {
    itemIndex: Number,
    item: Object
  },
  data () {
    return {
      draw: {}
    }
  },
  mounted () {
    let draw = SVG(`menu_item_${this.itemIndex}`)
    this.draw = draw

    draw.ellipse()
  }
}
</script>

<style>

</style>
