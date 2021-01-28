<template>
  <common-card
    title="今日交易用户数"
    :value="orderUser > 0 ? orderUser : '56,796'"
  >
    <template>
      <v-chart :options="getOptions()"/>
    </template>
    <!--具名插槽-->
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasize">{{returnRate > 0 ? returnRate : '4.6%'}}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixins from '../../mixins/commonCardMixins'
import commonDataMixin from '@/mixins/commonDataMixin'
export default {
  name: 'index',
  mixins: [commonCardMixins, commonDataMixin],
  methods: {
    getOptions () {
      return {
        xAxis: {
          type: 'category',
          // data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00'],
          data: this.orderUserTrend.length > 0 ? this.orderUserTrend : ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00'],
          show: false
        },
        yAxis: {
          min: 70,
          show: false
        },
        series: [{
          name: '用户实时交易量',
          type: 'bar',
          // data: [103, 143, 134, 150, 133, 152, 156, 88],
          data: this.orderUserTrendAxis.length > 0 ? this.orderUserTrendAxis : [103, 143, 134, 150, 133, 152, 156, 88],
          barWidth: '40%'
        }],
        color: ['#3398DB'],
        tooltip: {},
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
