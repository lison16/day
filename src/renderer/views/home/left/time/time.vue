<template>
  <card :height="100" deg="150deg" :colors="[['#FCBC86'], ['#E65849']]">
    <div class="time-module">
      <div class="time-con"><span class="time">{{ time }}</span><span class="apm">{{ apm }}</span></div>
      <div class="date-con">{{ date }} / {{ week }} / {{ lunar }}</div>
      <icon type="clock" :size="120" color="#fff" :style="iconStyle"/>
    </div>
  </card>
</template>
<script>
import card from '_c/card'
import moment from 'moment'
import icon from '_c/icon'
import { mapMutations } from 'vuex'
import { getNonli } from '@/api'
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
      week: '',
      lunar: '',
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
    ]),
    transWeek (no) {
      let res = ''
      switch (parseInt(no)) {
        case 1: res = '周一'; break
        case 2: res = '周二'; break
        case 3: res = '周三'; break
        case 4: res = '周四'; break
        case 5: res = '周五'; break
        case 6: res = '周六'; break
        case 7: res = '周日'
      }
      return res
    },
    getDateTime () {
      this.time = moment().format('h:mm:ss')
      this.apm = moment().format('a')
      this.date = moment().format('MMMM Do')
      this.week = this.transWeek(moment().format('e'))
      this.changeTime(moment().format('H:mm:ss').split(':'))
    }
  },
  mounted () {
    this.getDateTime()
    setInterval(() => {
      this.getDateTime()
    }, 1000)
    getNonli(moment().format('YYYY-M-D')).then(res => {
      if (res && res.data.reason === 'Success') this.lunar = res.data.result.data.lunar
    })
  }
}
</script>
<style lang="less">
@import './time.less';
</style>
