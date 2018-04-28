<template>
  <card :height="100" deg="150deg" :colors="[['#FCBC86'], ['#E65849']]">
    <div class="time-module">
      <div class="time-con"><span class="time">{{ time }}</span><span class="apm">{{ apm }}</span></div>
      <div class="date-con">{{ date }}</div>
      <icon type="clock" :size="120" color="#fff" :style="iconStyle"/>
    </div>
  </card>
</template>
<script>
import card from '_c/card'
import moment from 'moment'
import icon from '_c/icon'
import { mapMutations } from 'vuex'
// import { getNonli } from '@/api'
export default {
  name: 'timeModule',
  components: {
    icon,
    card
  },
  data () {
    return {
      date: '',
      apm: '',
      time: '',
      iconStyle: {
        position: 'absolute',
        right: '30px',
        bottom: '30px',
        width: '50px',
        height: '50px'
      }
    }
  },
  methods: {
    ...mapMutations('time', [
      'changeTime'
    ])
  },
  mounted () {
    setInterval(() => {
      this.time = moment().format('h:mm:ss')
      this.apm = moment().format('a')
      this.date = moment().format('MMMM Do YYYY')
      this.changeTime(moment().format('H:mm:ss').split(':'))
    }, 1000)
    // getNonli().then(res => {
    //   console.log(res)
    // })
  }
}
</script>
<style lang="less">
@import './time.less';
</style>
