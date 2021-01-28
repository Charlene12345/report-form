<template>
  <common-card
    title="累计订单量"
    :value="orderToday > 0 ? orderToday : '￥' + 1 + ',' + 184 + ',' + 796"
  >
    <!--匿名插槽-->
    <template>
      <v-chart :options="getOptions()"/>
    </template>
    <!--具名插槽-->
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasize">{{orderLastDay > 0 ? 'salesLastDay' : '674'}}</span>
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
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          // data: [763, 343, 434, 650, 533, 652, 656],
          data: this.orderTrend.length > 0 ? this.orderTrend : [763, 343, 434, 650, 533, 652, 656],
          areaStyle: {
            color: 'pink'
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
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
.total-order-chart{
  width: 100%;
  height: 100%;
}
</style>
