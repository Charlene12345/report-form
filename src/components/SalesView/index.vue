<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radio" size="small">
              <el-radio-button label="今日"/>
              <el-radio-button label="本周"/>
              <el-radio-button label="本月"/>
              <el-radio-button label="今年"/>
            </el-radio-group>
            <el-date-picker
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              unlink-panels
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOption"></v-chart>
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">{{item.no}}</div>
                <div class="list-item-name">{{item.name}}</div>
                <div class="list-item-money">{{item.money}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      activeIndex: '1',
      radio: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 1000 * 3600 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 1000 * 3600 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 1000 * 3600 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      chartOption: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 35,
          top: 27
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [{
          type: 'bar',
          barWidth: '35%',
          data: [200, 250, 300, 350, 300, 250, 200, 250, 300, 350, 300, 250]
        }],
        color: ['#3398DB'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankData: [
        {
          no: 1,
          name: '麦当劳',
          money: '232,325'
        }, {
          no: 2,
          name: '麦当劳',
          money: '232,325'
        }, {
          no: 3,
          name: '麦当劳',
          money: '232,325'
        }, {
          no: 4,
          name: '麦当劳',
          money: '232,325'
        }, {
          no: 5,
          name: '麦当劳',
          money: '232,325'
        }, {
          no: 6,
          name: '麦当劳',
          money: '232,325'
        }, {
          no: 7,
          name: '麦当劳',
          money: '232,325'
        }
      ]
    }
  },
  methods: {
    onMenuSelect (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-view{
  margin-top: 20px;
  .menu-wrapper{
    position: relative;
    display: flex;
    .sales-view-menu{
      width: 100%;
      padding-left: 20px;
      .el-menu-item{
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right{
      position: absolute;
      top: 10px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .el-radio-group{
        margin-right: 15px;
      }
    }
  }
  .sales-view-chart-wrapper{
    display: flex;
    height: 270px;
    .echarts{
      /*第一个 number 表示 flex-grow
        第二个 number 表示 flex-shrink
        第三个描述宽度的值表示 flex-basis*/
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list{
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      margin-top: 15px;
      .sales-view-title{
        /*margin-top: 20px;*/
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .list-item-wrapper{
        margin-top: 7px;
        .list-item{
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-no{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.top-no{
              background: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }
          .list-item-name{
            margin-left: 10px;
            color: #333;
          }
          .list-item-money{
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}

</style>
