<template>
  <common-card title="今日交易用户数" value="81,014">
    <template>
      <v-chart :options="getOptions()"/>
    </template>
    <!--具名插槽-->
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasize">5.14%</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixins from '../../mixins/commonCardMixins'
export default {
  name: 'index',
  mixins: [commonCardMixins],
  methods: {
    getOptions () {
      return {
        xAxis: {
          type: 'category',
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00'],
          show: false
        },
        yAxis: {
          min: 70,
          show: false
        },
        series: [{
          type: 'bar',
          data: [103, 143, 134, 150, 133, 152, 156, 88],
          barWidth: '40%'
        }],
        color: ['#3398DB'],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .today-users-chart{
    width: 100%;
    height: 100%;
  }
</style>
