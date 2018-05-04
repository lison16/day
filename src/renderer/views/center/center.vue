<template>
  <div id="center_btn"></div>
</template>

<script>
import SVG from 'svg.js'
export default {
  name: 'centerBtn',
  props: {
    waterDrinked: {
      type: Number,
      default: 0
    },
    waterOneDay: {
      type: Number,
      default: 8
    }
  },
  data () {
    return {
      drinkProgress: {},
      waterProgressRadius: 30
    }
  },
  computed: {
    /**
     * @returns 喝水进度环的周长
     */
    circlePerimeter () {
      return 2 * Math.PI * this.waterProgressRadius
    },
    /**
     * @returns 喝水进度的长度
     */
    waterProgress () {
      return this.circlePerimeter * (this.waterDrinked / this.waterOneDay)
    },
    /**
     * @returns 剩下的进度的长度
     */
    waterProgressLast () {
      return this.circlePerimeter - this.waterProgress
    }
  },
  watch: {
    waterDrinked (newVal, oldVal) {
      const duration = 200 / (newVal - oldVal)
      /**
       * @description 最后一个进度是正式的进度，中间三个都是动画效果
       */
      this.drinkProgress
        .animate(duration, '<').stroke({ dasharray: `${this.waterProgress + 6}, ${this.waterProgressLast - 6}` })
        .animate(50).stroke({ dasharray: `${this.waterProgress - 4}, ${this.waterProgressLast + 4}` })
        .animate(50).stroke({ dasharray: `${this.waterProgress + 2}, ${this.waterProgressLast - 2}` })
        .animate(50).stroke({ dasharray: `${this.waterProgress}, ${this.waterProgressLast}` })
    }
  },
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

    /**
     * 按钮中间底部背景原
     */
    draw.circle(68).fill('#fff').center(halfSize, halfSize)

    draw.circle(60).center(halfSize, halfSize).stroke({ color: '#E9EAEA', opacity: 0.8, width: 2 }).fill('none')
    const waterLinear = draw.gradient('linear', function (stop) {
      stop.at(0, '#f06')
      stop.at(1, '#0f9')
    })
    /**
     * 使用stroke-dasharray虚线属性来实现进度
     */
    this.drinkProgress = draw.circle(this.waterProgressRadius * 2).center(halfSize, halfSize).rotate(-90).stroke({ color: waterLinear, opacity: 0.8, width: 4, dasharray: `${this.waterProgress}, ${this.waterProgressLast}`, linecap: 'round' }).fill('none')
    console.log(this.drinkProgress)
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
