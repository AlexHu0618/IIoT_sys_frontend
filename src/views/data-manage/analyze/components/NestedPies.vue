<template>
  <div id="npPlot" style="width:600px; height:270px"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      npPlot: null
    }
  },
  mounted: function() {
    this.drawChart()
  },
  updated: function() {
    this.drawChart()
  },
  destroyed: function() {
    if (this.npPlot) {
      this.npPlot.clear()
      this.npPlot.dispose()
    }
  },

  methods: {
    drawChart() {
      this.npPlot = echarts.init(document.getElementById('npPlot'))
      this.npPlot.setOption({
        title: {
          text: '本月各产线总能耗占比',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['产线A', '产线B', '产线C', '产线D', '产线E']
        },
        series: [{
          name: '本月总能耗分布',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 335,
            name: '产线A'
          },
          {
            value: 310,
            name: '产线B'
          },
          {
            value: 234,
            name: '产线C'
          },
          {
            value: 135,
            name: '产线D'
          },
          {
            value: 1548,
            name: '产线E'
          }
          ]
        }]
      })
    }
  }
}
</script>

<style>
</style>
