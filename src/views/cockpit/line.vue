<template>
  <div id="timeLine" style="width: 100%;height: 100%;"></div>
</template>

<script>
var echarts = require('echarts')

export default {
  name: 'TimeLine',
  props: {
    curvalue: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      option: {
        title: {
          text: '网络接收数据总量'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} GByte'
          },
          axisPointer: {
            snap: true
          }
        },
        // visualMap: {
        //   show: false,
        //   dimension: 0,
        //   pieces: [{
        //     lte: 6,
        //     color: 'green'
        //   }, {
        //     gt: 6,
        //     lte: 8,
        //     color: 'red'
        //   }, {
        //     gt: 8,
        //     lte: 14,
        //     color: 'green'
        //   }, {
        //     gt: 14,
        //     lte: 17,
        //     color: 'red'
        //   }, {
        //     gt: 17,
        //     color: 'green'
        //   }]
        // },
        series: [
          {
            name: '数据量',
            type: 'line',
            smooth: true,
            data: []
            // markArea: {
            //   data: [[{
            //     name: '早高峰',
            //     xAxis: '07:30'
            //   }, {
            //     xAxis: '10:00'
            //   }], [{
            //     name: '晚高峰',
            //     xAxis: '17:30'
            //   }, {
            //     xAxis: '21:15'
            //   }]]
            // }
          }
        ]
      }

    }
  },
  watch: {
    'curvalue.time'(val) {
      this.option.xAxis.data.push(val)
      this.option.series[0].data.push(this.curvalue.value)
      if (this.option.xAxis.data.length > 200) {
        this.option.xAxis.data.shift()
        this.option.series[0].data.shift()
      }
      this.setdata()
    }
  },
  mounted() {
    this.draw('timeLine')
  },
  methods: {
    draw(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption(this.option)
    },
    setdata() {
      this.charts.setOption(this.option)
    }
  }
}
</script>

<style>
</style>
