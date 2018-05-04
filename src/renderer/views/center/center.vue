<template>
  <div id="center_btn"></div>
</template>

<script>
import SVG from 'svg.js'
export default {
  name: 'centerBtn',
  mounted () {
    const size = 80
    const halfSize = size / 2
    let draw = SVG('center_btn').size(size, size)

    let ellipse1 = draw.ellipse(80, 72).center(halfSize, halfSize).fill('rgba(255, 52, 92, .5)')
    let ellipse2 = draw.ellipse(80, 72).center(halfSize, halfSize).fill('rgba(85, 255, 100, .5)').rotate(45)
    let ellipse3 = draw.ellipse(80, 72).center(halfSize, halfSize).fill('rgba(38, 105, 255, .5)').rotate(90)
    let ellipse4 = draw.ellipse(80, 72).center(halfSize, halfSize).fill('rgba(185, 92, 255, .5)').rotate(135)

    ellipse1.animate(4000).rotate(360).loop()
    ellipse2.animate(4000).rotate(-315).loop()
    ellipse3.animate(4000).rotate(450).loop()
    ellipse4.animate(4000).rotate(495).loop()

    let circle = draw.circle(68).fill('#fff').center(halfSize, halfSize)
    console.log(circle)

    // let water = draw.path('M10 10 C 20 20, 40 20, 50 10').fill('none').stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
    // console.log(water)
  }
}
</script>

<style lang="less">
#center_btn{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
