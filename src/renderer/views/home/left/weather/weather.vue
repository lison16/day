<template>
  <card :height="100" deg="150deg" :colors="[['#FF6FD8'], ['#3813C2']]">
    <div class="weather-module">
      <div class="weather-con today-weather">
        <i>{{ today['temp'] }}</i>
        <p>白天:<span>{{ today['day'] }}</span> / 夜间:<span>{{ today['night'] }}</span></p>
      </div>
      <div class="line"></div>
      <div class="weather-con tomorrow-weather">
        <i>{{ tomorrow['temp'] }}</i>
        <p>白天:<span>{{ tomorrow['day'] }}</span> / 夜间:<span>{{ tomorrow['night'] }}</span></p>
      </div>
      <div :style="iconStyle" :class="[isUpdating ? 'rotate-animation' : '']">
        <icon @click.native="refresh" :size="18" color="#fff" type="refresh"/>
      </div>
      <div class="place-name">{{ location }}</div>
    </div>
  </card>
</template>
<script>
import card from '_c/card'
import icon from '_c/icon'
import { getWeather } from '@/api'
export default {
  name: 'timeModule',
  components: {
    icon,
    card
  },
  data () {
    return {
      today: {
        day: '',
        night: '',
        temp: '',
        code: ''
      },
      tomorrow: {
        day: '',
        night: '',
        temp: '',
        code: ''
      },
      location: '',
      iconStyle: {
        position: 'absolute',
        right: '-2px',
        bottom: '-6px',
        zIndex: 10,
        cursor: 'pointer'
      },
      isUpdating: false
    }
  },
  methods: {
    refresh () {
      this.getWeather()
    },
    getWeather () {
      this.isUpdating = true
      // navigator.geolocation.getCurrentPosition(pos => {
      //   console.log(pos.coords)
      // })
      getWeather([116.40, 39.93]).then(res => {
        this.location = res.data.HeWeather6[0].basic.location
        const weather = res.data.HeWeather6[0].daily_forecast
        let todayData = weather[0]
        let tomorrowData = weather[1]
        this.today.day = todayData.cond_txt_d
        this.today.night = todayData.cond_txt_n
        this.today.temp = `${todayData.tmp_max}℃ / ${todayData.tmp_min}℃`
        this.tomorrow.day = tomorrowData.cond_txt_d
        this.tomorrow.night = tomorrowData.cond_txt_n
        this.tomorrow.temp = `${tomorrowData.tmp_max}℃ / ${tomorrowData.tmp_min}℃`
        this.isUpdating = false
      })
    }
  },
  mounted () {
    // this.getWeather()
  }
}
</script>
<style lang="less">
@import './weather.less';
</style>
