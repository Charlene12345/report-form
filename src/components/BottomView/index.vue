<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">{{userCount > 0 ? userCount : '56,678' | format}}</div>
                <v-chart :options="searchUserOption"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">{{searchCount > 0 ? searchCount : '34,790' | format}}</div>
                <v-chart :options="searchUserOption"></v-chart>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" width="130"></el-table-column>
                <el-table-column prop="keyword" label="关键词" width="130"></el-table-column>
                <el-table-column prop="count" label="总搜索量"></el-table-column>
                <el-table-column prop="users" label="搜索用户数"></el-table-column>
                <el-table-column prop="range" label="搜索占比"></el-table-column>
              </el-table>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="total > 0 ? total : 61"
                :page-size="pageSize"
                @current-change="handleCurrentChange"
              ></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOption">
            </v-chart>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import commonDataMixin from '@/mixins/commonDataMixin'
// const colors = ['#8d7fec', '#5085f2', '#f8726b', '#e7e702', '#78f283', '#4bc1fc']
export default {
  name: 'index',
  mixins: [commonDataMixin],
  data () {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 450
        },
        series: [{
          type: 'line',
          data: [100, 200, 300, 400, 361, 274, 342, 98, 150, 65],
          areaStyle: {
            color: 'rgba(95, 187, 255, .5)'
          },
          lineStyle: {
            color: 'rgba(95, 187, 255)'
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
        },
        tooltip: {}
      },
      searchNumberOption: {},
      tableData: [
        { id: 1, rank: 1, keyword: '北京', count: 100, users: 10, range: '90%' },
        { id: 2, rank: 2, keyword: '北京', count: 100, users: 100, range: '90%' },
        { id: 3, rank: 3, keyword: '北京', count: 100, users: 100, range: '90%' },
        { id: 4, rank: 4, keyword: '北京', count: 100, users: 100, range: '90%' }
        // { id: 4, rank: 4, keyword: '上海', count: 100, users: 100, range: '90%' },
        // { id: 4, rank: 4, keyword: '南京', count: 100, users: 100, range: '90%' },
        // { id: 4, rank: 4, keyword: '东莞', count: 100, users: 100, range: '90%' }
      ],
      radioSelect: '品类',
      totalData: [], // 数据
      total: 0, // 数据条数
      pageSize: 4,
      categoryOption: {},
      userCount: 0,
      searchCount: 0
    }
  },
  methods: {
    handleCurrentChange (page) {
      console.log(`当前页: ${page}`)
      // this.renderPage(page)
    },
    renderPieChart () {
      const mockData = [
        {
          legendname: '粥店',
          value: 67,
          percent: '15%',
          name: '粥店'
        },
        {
          legendname: '菜店',
          value: 167,
          percent: '55%',
          itemStyle: {
            color: 'pink'
          },
          name: '菜店'
        },
        {
          legendname: '药店',
          value: 67,
          percent: '15%',
          name: '药店'
        },
        {
          legendname: '美妆店',
          value: 67,
          percent: '25%',
          name: '美妆店'
        }
      ]
      //
      // if (!this.category1.data1 || !this.category2.data1) {
      //   return
      // }
      //
      // let data
      // let axis
      // let total = 0
      //
      // if (this.radioSelect === '品类') {
      //   data = this.category1.data1.slice(0, 6)
      //   axis = this.category1.axisX.slice(0, 6)
      //   total = data.reduce((s, i) => s + i, 0)
      // } else {
      //   data = this.category2.data1.slice(0, 6)
      //   axis = this.category2.axisX.slice(0, 6)
      //   total = data.reduce((s, i) => s + i, 0)
      // }
      // const chartData = []
      // data.forEach((item, index) => {
      //   const percent = `${(item / total * 100).toFixed(2)}%`
      //   chartData.push({
      //     legendname: axis[index],
      //     value: item,
      //     percent,
      //     itemStyle: {
      //       color: colors[index]
      //     },
      //     name: `${axis[index]} | ${percent}`
      //   })
      // })
      //
      this.categoryOption = {
        title: [{
          text: '品类分布',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
        }, {
          text: '累计订单量',
          subtext: '320',
          left: '49%',
          top: '45%',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          },
          textAlign: 'center'
        }],
        series: [{
          name: '品类分布',
          type: 'pie',
          data: mockData,
          label: {
            normal: {
              show: true,
              position: 'outter',
              formatter: function (params) {
                // console.log(params)
                return `${params.data.legendname} | ${params.data.percent}`
              }
            }
          },
          center: ['50%', '50%'],
          radius: ['50%', '75%'], // 画布的长宽中短的一方的50%，75%
          labelLine: {
            normal: {
              length: 10,
              length2: 7
              // smooth: true
            }
          },
          clockWise: true,
          itemStyle: {
            borderWidth: 3,
            borderColor: '#fff'
          }
        }],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '80%',
          top: 'middle'
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            // console.log(params)
            const str = params.seriesName + '<br />' + '数量: ' + params.value
            return str
          }
        }
      }
    },
    renderPage (page) {
      if (this.totalData.length > 0) {
        this.tableData = this.totalData.slice(
          (page - 1) * this.pageSize, (page - 1) * this.pageSize + this.pageSize)
      } else {
        this.tableData = this.tableData.slice(
          (page - 1) * this.pageSize, (page - 1) * this.pageSize + this.pageSize)
      }
    },
    renderLineChart () {
      const createOption = key => {
        const data = []
        const axis = []
        this.wordCloud.forEach(item => data.push(item[key]))
        this.wordCloud.forEach(item => axis.push(item.word))

        return {
          xAxis: {
            type: 'category',
            // show: false,
            boundaryGap: false, // 消除x轴两侧间距
            data: axis
          },
          yAxis: {
            show: false
            // min: 0,
            // max: 300 // 坐标系范围，防止图形顶边被遮住
          },
          tooltip: {},
          series: [{
            type: 'line',
            data,
            areaStyle: {
              color: 'rgba(95,187,255,.5)'
            },
            lineStyle: {
              color: 'rgba(95,187,255)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }],
          grid: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }
        }
      }

      this.searchUserOption = createOption('user')
      this.searchNumberOption = createOption('count')
    }
  },
  mounted () {
    this.renderPieChart()
  },
  watch: {
    // 遍历wordCloud，适配出一组totalData,也就是模拟数据tableData
    wordCloud (newValue) {
      const totalData = []
      newValue.forEach((item, index) => {
        totalData.push({
          id: index + 1,
          rank: index + 1,
          keyword: item.word,
          count: item.count, // 搜索量
          users: item.user, // 用户数
          // 每个用户的整体搜索占比: 用户数/搜索量   保留两位小数
          range: `${((item.user / item.count) * 100).toFixed(2)}%`
        })
      })
      this.totalData = totalData
      this.total = this.totalData.length
      this.renderPage(1)
      // console.log('wordCloud -> this.totalData', this.totalData)
      // s: 累加结果
      this.userCount = totalData.reduce((s, i) => i.users + s, 0)
      this.searchCount = totalData.reduce((s, i) => i.count + s, 0)
      this.renderLineChart()
    },

    category1 (newValue) {
      this.renderPieChart()
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottom-view{
    /*flex平分*/
    display: flex;
    margin-top: 20px;
    .view {
      flex: 1;
      width: 50%;
      box-sizing: border-box;
      &:first-child{
        padding: 0 10px 0 0;
      }
      &:last-child{
        padding: 0 0 0 10px;
      }
      .title-wrapper{
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 600;
        padding: 0 0 0 20px;
        .radio-wrapper{
          flex: 1;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
      }
      .chart-wrapper{
        display: flex;
        flex-direction: column;
        height: 452px;
        .chart-inner{
          display: flex;
          padding: 0 10px;
          margin-top: 20px;
          .chart{
            flex: 1;
            padding: 0 10px;
            .chart-title{
              color: #999;
              font-size: 14px;
            }
            .chart-data{
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px;
            }
            .echarts{
              height: 50px;
            }
          }
        }
        .table-wrapper{
          flex: 1;
          margin-top: 20px;
          padding: 0 20px 20px;
          .el-pagination{
            /*靠右显示*/
            display: flex;
            justify-content: flex-end;
            margin-top: 15px;
          }
        }
      }
    }
  }

</style>
