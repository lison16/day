<template>
  <card style="position:relative;" :height="100" deg="150deg" :colors="[['#00EAFF'], ['#3C8CE7']]">
    <div class="water-title"><h3 class="title">每天10杯水</h3><span class="count">( {{ todayRestWater }} / 10 )</span></div>
    <div class="water-item-wrapper">
      <water-item style="margin-left: 11px;" v-for="i in todayRestWater" :index="i" :key="`water-item-${i}`"></water-item>
    </div>
  </card>
</template>

<script>
import card from '_c/card'
import waterItem from './water-item.vue'
import { mapState } from 'vuex'
import { isIn } from '@/libs/util'
const notifier = require('electron-notifications')
export default {
  name: 'water',
  data () {
    return {
      currentDrinkHour: 9,
      todayRestWater: 10
    }
  },
  components: {
    card,
    waterItem
  },
  computed: {
    ...mapState('time', [
      'time'
    ]),
    hour () {
      return parseInt(this.time[0])
    },
    min () {
      return parseInt(this.time[1])
    },
    secon () {
      return parseInt(this.time[2])
    }
  },
  methods: {
    drinkWater () {
      const notification = notifier.notify('该喝水了', {
        message: `${this.hour}点了，快去喝杯水`,
        duration: 0,
        buttons: ['Complete']
      })
      notification.on('buttonClicked', (text, buttonIndex, options) => {
        if (text === 'Complete') {
          this.setLocal()
        }
        notification.close()
      })
    },
    setLocal () {
      this.$db.get('todayDrinkList').push({
        time: this.time.join(':')
      }).write()
      this.$db.set('todayRestWater', --this.todayRestWater).write()
      this.$db.set('currentDrinkHour', this.currentDrinkHour).write()
    }
  },
  watch: {
    time () {
      if (isIn(this.hour, 10, 19) && this.currentDrinkHour !== this.hour) {
        this.currentDrinkHour = this.hour
        this.drinkWater()
      }
    }
  },
  mounted () {
    const currentDrinkHour = this.$db.get('currentDrinkHour').value()
    const todayRestWater = this.$db.get('todayRestWater').value()
    if (currentDrinkHour) this.currentDrinkHour = parseInt(currentDrinkHour)
    if (todayRestWater) this.todayRestWater = parseInt(todayRestWater)
    this.$db.defaults({
      todayRestWater: 10,
      currentDrinkHour: 9,
      todayDrinkList: []
    })
  }
}
</script>

<style lang="less">
@import './water.less';
</style>
