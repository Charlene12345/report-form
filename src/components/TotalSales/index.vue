<template>
  <common-card title="累计销售额" value="$ 23,232,434">
    <!--匿名插槽-->
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasize">7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasize">9.99%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <!--具名插槽-->
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasize">￥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixins from '../../mixins/commonCardMixins'
export default {
  name: 'index',
  mixins: [commonCardMixins]
}
</script>

<style lang="scss" scoped>
  .compare-wrapper{
    height: 100%;
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
