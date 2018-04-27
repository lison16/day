<template>
  <div>
    <time-module></time-module>
    <weather-module style="margin-top:10px;"></weather-module>
  </div>
</template>

<script>
import timeModule from './time/time.vue'
import weatherModule from './weather/weather.vue'
export default {
  name: 'homeLeft',
  components: {
    timeModule,
    weatherModule
  }
}
</script>

<style>

</style>
