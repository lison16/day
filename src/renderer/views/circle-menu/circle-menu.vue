<template>
  <div class="menu-wrapper">
    <div id="menu_main"></div>
    <!-- <menu-item v-for="(item, index) in menuList" :key="`menu-item-${index}`" :radius="halfSize - 10" :item-index="index" :item="item"/> -->
    <div id="menu_item"></div>
  </div>
</template>

<script>
import SVG from 'svg.js'
import menuItem from './menu-item.vue'
import menuList from './list'
// const path = require('path')
export default {
  name: 'ciecleMenu',
  components: {
    menuItem
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      draw: {},
      size: 300,
      menuList: menuList,
      childDraw: {}
    }
  },
  watch: {
    show (state) {
      const pos = this.pos
      const radius = this.radius
      const line2pos = this.line2pos
      if (state) {
        SVG.select('path.menu-item').stop().animate(200, '>').plot(`M${pos} ${pos} L${pos} ${pos} a${0} ${0} 45 0 1 ${0} ${0} L${pos + 5} ${pos - 5} z`)
      } else {
        SVG.select('path.menu-item').stop().animate(200, '>').plot(`M${pos + 3} ${pos - 2} L${pos} 6 a${radius} ${radius} 45 0 1 ${line2pos} ${pos - line2pos - 15} L${pos + 5} ${pos - 5} z`)
      }
    }
  },
  computed: {
    halfSize () {
      return this.size / 2
    },
    pos () {
      return this.size / 2
    },
    radius () {
      return this.pos - 14
    },
    line2pos () {
      return this.radius * Math.sin(45 * Math.PI / 180)
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

    let childDraw = SVG('menu_item').size(this.size, this.size)
    this.childDraw = childDraw
    const pos = this.pos
    const radius = this.radius
    const line2pos = this.line2pos

    menuList.forEach((item, i) => {
      let itemGradient = childDraw.gradient('radial', stop => {
        stop.at(0, '#fff', 2)
        stop.at(1, '#D9D9D9', 1)
      })
      const itemMenu = childDraw.path(`M${pos} ${pos} L${pos} ${pos} a${0} ${0} 45 0 1 ${0} ${0} L${pos + 5} ${pos - 5} z`).fill(itemGradient).rotate(i * 45, pos, pos - 1).addClass('menu-item')
      itemMenu.on('mouseover', function () {
        itemGradient.update(stop => {
          stop.at(0.1, '#fff', 0.4)
          stop.at(0.9, '#D9D9D9', 0.3)
        })
        this.stop()
        this.animate(100, '>').plot(`M${pos + 3} ${pos - 2} L${pos} 0 a${radius} ${radius} 45 0 1 ${line2pos + 6} ${pos - line2pos - 15} L${pos + 5} ${pos - 5} z`)
      }).on('mouseleave', function () {
        itemGradient.update(stop => {
          stop.at(0.1, '#fff', 0.2)
          stop.at(0.9, '#D9D9D9', 0.1)
        })
        this.stop()
        this.animate(100, '>').plot(`M${pos + 3} ${pos - 2} L${pos} 6 a${radius} ${radius} 45 0 1 ${line2pos} ${pos - line2pos - 15} L${pos + 5} ${pos - 5} z`)
      })
    })
  }
}
</script>

<style lang="less">
.menu-wrapper{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // #menu_item{
  //   width: 100%;
  //   height: 100%;
  // }
  & > div{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
