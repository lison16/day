<template>
  <div>
    <time-module></time-module>
    <weather-module style="margin-top:10px;"></weather-module>
    <water style="margin-top:10px;"></water>
  </div>
</template>

<script>
import timeModule from './time/time.vue'
import weatherModule from './weather/weather.vue'
import water from './water/water.vue'
export default {
  name: 'homeLeft',
  components: {
    timeModule,
    weatherModule,
    water
  }
}
</script>

<style>

</style>
