<template>
  <div class="center-wrapper">
    <div id="center_btn">
      <audio id="audio_ding" src="src/renderer/assets/audios/ding.mp3"/>
      <audio id="audio_dududu" src="src/renderer/assets/audios/dududu.mp3"/>
      <audio id="audio_message" src="src/renderer/assets/audios/message.mp3"/>
    </div>
    <div id="complete_water"></div>
  </div>
</template>

<script>
import SVG from 'svg.js'
const path = require('path')
let centerTimer = null
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
    },
    hasMessage: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      size: 80,
      draw: {},
      drinkBackCircle: {},
      drinkProgress: {},
      waterProgressRadius: 30,
      message: {}
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
    },
    halfSize () {
      return this.size / 2
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
        .after(() => {
          if (newVal === this.waterOneDay) this.drinkTotal()
          else this.drinkComplete()
        })
    },
    hasMessage (val) {
      clearInterval(centerTimer)
      if (val) {
        document.getElementById('audio_message').play()
        centerTimer = setInterval(() => {
          this.message.animate(50).rotate(14).animate(100).rotate(-14).animate(100).rotate(14).animate(100).rotate(-14).animate(100).rotate(14).animate(50).rotate(0)
        }, 1000)
      } else {
        this.message.stop()
      }
    }
  },
  methods: {
    drinkComplete () {
      document.getElementById('audio_ding').play()
    },
    drinkTotal () {
      document.getElementById('audio_dududu').play()
      this.drinkProgress.animate().stroke({ opacity: 0 }).radius(40)
      this.drinkBackCircle.stroke({ opacity: 0 })
    }
  },
  mounted () {
    const size = this.size
    const halfSize = this.halfSize
    let draw = SVG('center_btn').size(size, size)
    this.draw = draw

    /**
     * 创建四个彩色椭圆然后旋转，形成光环
     */
    let ellipse1 = draw.ellipse(80, 72).center(halfSize, halfSize).fill('rgba(255, 52, 92, .5)')
    let ellipse2 = draw.ellipse(80, 72).center(halfSize, halfSize).fill('rgba(85, 255, 100, .5)').rotate(45)
    let ellipse3 = draw.ellipse(80, 72).center(halfSize, halfSize).fill('rgba(38, 105, 255, .5)').rotate(90)
    let ellipse4 = draw.ellipse(80, 72).center(halfSize, halfSize).fill('rgba(185, 92, 255, .5)').rotate(135)
    ellipse1.animate(4000).rotate(360).loop()
    ellipse2.animate(4000).rotate(-315).loop()
    ellipse3.animate(4000).rotate(450).loop()
    ellipse4.animate(4000).rotate(495).loop()
    // 按钮中间底部背景原
    const backRadial = draw.gradient('radial', function (stop) {
      stop.at(0, '#fff')
      stop.at(0.6, '#fff')
      stop.at(1, '#D9D9D9')
    })
    draw.circle(68).center(halfSize, halfSize).fill(backRadial).addClass('center-back-circle')

    /**
     * 喝水进度底部灰色环
     */
    this.drinkBackCircle = draw.circle(60).center(halfSize, halfSize).stroke({ color: '#fff', width: 2 }).fill('none')
    // 喝水进度渐变
    const waterLinear = draw.gradient('linear', function (stop) {
      stop.at(0, '#130CB7')
      stop.at(1, '#52E5E7')
    }).from(0, 0).to(0, 1)
    // 使用stroke-dasharray虚线属性来实现进度
    this.drinkProgress = draw.circle(this.waterProgressRadius * 2).center(halfSize, halfSize).rotate(-90).stroke({ color: waterLinear, opacity: 1, width: 4, dasharray: `${this.waterProgress}, ${this.waterProgressLast}`, linecap: 'round' }).fill('none')

    /**
     * 消息图标
     */
    this.message = draw.image(path.join(__dirname, '../../assets/images/message.svg'), 30, 30).center(halfSize, halfSize)

    /**
     * 中间做点击用的原色透明遮盖
     */
    let clickLay = draw.circle(68).center(halfSize, halfSize).fill({ color: '#fff', opacity: 0 }).addClass('center-pointer')
    clickLay.click(() => {
      if (this.hasMessage) this.$emit('on-click-message')
      else this.$emit('on-show-menu')
    })
  }
}
</script>

<style lang="less">
.center-wrapper{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .center-back-circle{
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 1) inset;
    background: red;
  }
  & > div{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .center-pointer{
    cursor: pointer;
  }
}
</style>
