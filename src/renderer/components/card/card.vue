<template>
  <div :class="`${prefix}-card`" :style="{height: `${height}px`}">
    <backboard :padding="padding" :height="height" :type="type" :colors="colors" :deg="deg" :shape="shape">
      <slot></slot>
    </backboard>
  </div>
</template>

<script>
import backboard from '_c/backboard'
export default {
  name: 'card',
  components: {
    backboard
  },
  data () {
    return {
      prefix: 'do-ui'
    }
  },
  props: {
    padding: {
      type: Number,
      default: 10
    },
    height: Number,
    type: String,
    colors: {
      type: Array,
      default: () => [['#fff'], ['#fff']]
    },
    deg: String,
    shape: String
  }
}
</script>

<style lang="less">
@import './card.less';
</style>
