<template>
  <ve-liquidfill :data="chartData" height="100%" :settings="chartSettings"></ve-liquidfill>
</template>

<script>
function getColor (v) {
  return v > 0 && v <= 0.5 ? 'rgba(97, 216, 0, .7)'
    : v > 0.5 && v <= 0.8 ? 'rgba(204, 178, 26, .7)'
      : v > 0.8 ? 'rgba(241, 47, 28, .7)' : '#c7c7c7'
}
export default {
  name: 'index',
  data () {
    return {
      chartData: {
        columns: ['rate', 'percent'],
        rows: [{
          title: 'rate',
          percent: 0.90
        }]
      },
      chartSettings: {}
    }
  },
  mounted () {
    this.chartSettings = {
      // wave: [0.5, 0.3, 0.1],
      seriesMap: [
        {
          radius: '90%',
          // color: ['red', 'green', 'yellow'],
          label: {
            normal: {
              formatter: (v) => {
                return `${Math.floor(v.data.value * 100)}%`
              },
              textStyle: {
                fontSize: 36,
                color: '#999',
                fontWeight: 'normal'
              }
            }
          },
          insideColor: 'red',
          outline: {
            itemStyle: {
              color: 'none',
              borderColor: '#aaa4a4',
              borderWidth: 1,
              shadowBlur: 0,
              shadowColor: '#fff'
            },
            borderDistance: 0
          },
          backgroundStyle: {
            color: '#fff'
          },
          itemStyle: {
            opacity: 0.95,
            shadowBlur: 0,
            shadowColor: '#fff'
          },
          amplitude: 8,
          color: [getColor(this.chartData.rows[0].percent)]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
