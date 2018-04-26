<template>
  <div :class="`${prefix}-backboard`" :style="{background: background}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'backboard',
  data () {
    return {
      prefix: 'do-ui'
    }
  },
  props: {
    type: {
      type: String,
      default: 'linear'
    },
    colors: {
      type: Array,
      default: () => []
    },
    deg: {
      type: String,
      default: '180deg'
    },
    shape: {
      type: String,
      default: 'circle'
    }
  },
  computed: {
    background () {
      let res = ''
      const deg = this.deg ? this.deg + ', ' : ''
      let color = this.colors.map(item => item.join(' '))
      let colorStr = color.join(', ')
      if (this.type === 'linear') res = `linear-gradient(${deg}${colorStr})`
      else res = `radial-gradient(${this.shape}, ${colorStr})`
      return res
    }
  }
}
</script>
<style lang="less">
@import './backboard.less';
</style>
