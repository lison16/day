<template>
  <div class="water-item">
    <icon class="water" :style="{animationDelay: `${index * 0.08}s`}" color="736EFE" :size="30" type="waterdrop"></icon>
  </div>
</template>

<script>
import icon from '_c/icon'
export default {
  name: 'waterItem',
  components: {
    icon
  },
  props: {
    index: Number
  }
}
</script>

<style lang="less">
@keyframes water-animation{
  from{
    transform: translateY(10px);
  }
  to{
    transform: translateY(0);
  }
}
.water-item{
  display: inline-block;
  & *{
    background: linear-gradient(135deg, #fff, #eee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .water{
    animation: water-animation .5s infinite linear;
    animation-direction: alternate;
  }
}
</style>
