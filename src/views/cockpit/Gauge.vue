<template>
  <div :ref="myChart" style="height: 350px;width: 350px;"></div>
</template>

<script>
var echarts = require('echarts')
export default {
  name: 'Gauge',
  props: {
    myChart: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      Opt: {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [{
          name: '当前用量',
          type: 'gauge',
          detail: {
            formatter: '{value}%'
          },
          data: [{
            value: 50,
            name: this.myChart
          }]
        }]
      }
    }
  },
  mounted: function() {
    this.draw()
    setInterval(this.set, 2000)
    // setInterval(function() {
    //   this.Opt.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
    //   this.charts.setOption(this.Opt)
    //   console.log(this.Opt.series)
    // }, 2000)
  },
  methods: {
    draw() {
      this.charts = echarts.init(this.$refs[`${this.myChart}`])
      this.Opt.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
      this.charts.setOption(this.Opt)
      // setInterval(this.set(), 2000)
    },
    set() {
      this.Opt.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
      this.charts.setOption(this.Opt)
    }
  }
}
</script>

<style>
  #chart {
    height: 100%;
    width: 100%;
  }
</style>
