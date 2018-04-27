<template>
	<i class="do-icon" :class="`do-${type}`" :style="styles"></i>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: 16
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    styles () {
      return {
        fontSize: `${this.size}px`,
        color: this.color
      }
    }
  }
}
</script>
<style lang="less">
</style>
