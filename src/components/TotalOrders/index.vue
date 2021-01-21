<template>
  <common-card title="累计订单量" value="$ 2,157,456">
    <!--匿名插槽-->
    <template>
      <div class="total-order-chart" ref="chart"></div>
    </template>
    <!--具名插槽-->
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasize">￥ 20,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixins from '../../mixins/commonCardMixins'
export default {
  name: 'index',
  mixins: [commonCardMixins],
  mounted () {
    const chartDom = this.$refs.chart
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
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
        data: [763, 343, 434, 650, 533, 652, 656],
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
    })
  }
}
</script>

<style lang="scss" scoped>
.total-order-chart{
  width: 100%;
  height: 100%;
}
</style>
