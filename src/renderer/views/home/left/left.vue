<template>
  <div>
    <card :height="100" deg="150deg" :colors="[['#F4ADFD'], ['#59B5FC']]">
      <time-module></time-module>
    </card>
  </div>
</template>

<script>
import card from '_c/card'
import timeModule from './time.vue'
export default {
  name: 'homeLeft',
  components: {
    card,
    timeModule
  }
}
</script>

<style>

</style>
