<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
export default {
  name: 'index',
  data () {
    this.chartSettings = {
      color: ['#ff0', '#00f', '#f00', '#0ff']
    }
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [{
          name: 'yangqing',
          value: 10
        }, {
          name: 'liuchao',
          value: 89
        }, {
          name: 'yangyan',
          value: 156
        }, {
          name: 'yanghiyuan',
          value: 190
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
