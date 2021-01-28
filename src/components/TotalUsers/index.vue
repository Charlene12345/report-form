<template>
  <common-card title="累计用户数" :value="userToday > 0 ? userToday : 567">
    <!--匿名插槽-->
    <template>
      <v-chart :options="getOptions()"/>
    </template>
    <!--具名插槽-->
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasize">{{userGrowthLastDay > 0 ? userGrowthLastDay : '6.8%'}}</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasize">{{userGrowthLastMonth > 0 ? userGrowthLastMonth : '7.6%'}}</span>
        <div class="decrease"></div>
      </div>
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
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        },
        series: [{
          name: '上月平台用户数',
          type: 'bar',
          data: [this.userLastMonth > 0 ? this.userLastMonth : 200],
          barWidth: '13%',
          stack: '总量',
          itemStyle: {
            color: '#45c946'
          }
        }, {
          name: '今日平台用户数',
          type: 'bar',
          data: [this.userTodayNumber > 0 ? this.userTodayNumber : 250],
          stack: '总量',
          itemStyle: {
            color: '#eeeeee'
          }
        }, {
          // 红星三角形
          type: 'custom',
          data: [this.userLastMonth > 0 ? this.userLastMonth : 200],
          stack: '总量',
          // api.value(...)，意思是取出 dataItem 中的数值。例如 api.value(0) 表示取出当前 dataItem 中第一个维度的数值。
          // api.coord(...)，意思是进行坐标转换计算。
          // 例如 var point = api.coord([api.value(0), api.value(1)]) 表示 dataItem 中的数值转换成坐标系上的点。
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M512 426.666667l170.666667 213.333333H341.333333z',
                  x: -5,
                  y: 3,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path', // 线段
                shape: {
                  d: 'M512 640l170.666667-213.333333H341.333333z',
                  x: -5,
                  y: -13,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }]
            }
          }
        }]
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
  .total-users-footer{
    display: flex;
    align-items: center;
    .month{
      margin-left: 10px;
    }
}
</style>
