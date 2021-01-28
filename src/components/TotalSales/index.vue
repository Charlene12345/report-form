<template>
  <common-card
    title="累计销售额"
    :value="salesToday > 0 ? salesToday : '￥' + 1 + ',' + 184 + ',' + 796"
  >
    <!--匿名插槽-->
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasize">
            {{salesGrowthLastDay > 0 ? "salesGrowthLastDay" : "77%"}}
          </span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasize">
            {{salesGrowthLastMonth >0 ? "salesGrowthLastMonth" :'45%'}}
          </span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <!--具名插槽-->
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasize">
        {{salesLastDay > 0 ? 'salesLastDay' : '￥34,568'}}
      </span>
    </template>
<!--    <div>reportData:{{reportData}}</div>-->
  </common-card>
</template>

<script>
import commonCardMixins from '../../mixins/commonCardMixins'
import commonDataMixin from '@/mixins/commonDataMixin'
export default {
  name: 'index',
  mixins: [commonCardMixins, commonDataMixin]
  // computed: {
  //   reportData () {
  //     return this.getReportData()
  //   }
  // },
  // inject: ['getReportData', 'getWordCloud', 'getMapData']
}
</script>

<style lang="scss" scoped>
  .compare-wrapper{
    height: 100%;
    /*垂直居中*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare{
      /*height: 50%;*/
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    }
  }
  span{
    font-size: 12px;
  }
</style>
