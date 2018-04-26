<template>
  <div class="time-module">
    <div class="time-con"><span class="time">{{ time }}</span><span class="apm">{{ apm }}</span></div>
    <div class="date-con">{{ date }}</div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'timeModule',
  data () {
    return {
      date: '',
      apm: '',
      time: ''
    }
  },
  mounted () {
    setInterval(() => {
      this.time = moment().format('h:mm:ss')
      this.apm = moment().format('a')
      this.date = moment().format('MMMM Do YYYY')
    }, 1000)
  }
}
</script>
<style lang="less">
@import './time.less';
</style>
