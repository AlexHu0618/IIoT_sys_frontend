<template>
  <div :ref="tePer" style="height: 600px;width: 600px;">你好</div>
</template>

<script>
var echarts = require('echarts')
export default {
  name: 'PersonalOne',
  props: {
    test: {
      type: String,
      default: ''
    },
    tePer: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  watch: {
    tePer() {
      this.$nextTick(() => {
        if (this.tePer) {
          this.perFun()
        }
      })
    }
  },
  mounted() {
    // if (this.$refs[`${this.tePer}`]) {
    //   console.log('能用不', this.$refs[`${this.tePer}`])
    //   this.perFun()
    // }
    this.perFun()
  },
  methods: {
    perFun() {
      this.charts = echarts.init(this.$refs[`${this.tePer}`])
      this.charts.setOption({
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
          name: '业务指标',
          type: 'gauge',
          detail: {
            formatter: '{value}%'
          },
          data: [{
            value: 50,
            name: '完成率'
          }]
        }]
      })
      // console.log('出来', this.$refs[`${this.tePer}`])
      // this.myChart = echarts.init(this.$refs[`${this.tePer}`])
      // this.myChart.setOption(
      //   {
      //     xAxis: {
      //       type: 'category',
      //       boundaryGap: false,
      //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      //     },
      //     yAxis: {
      //       type: 'value'
      //     },
      //     series: [{
      //       data: [820, 932, 901, 934, 1290, 1330, 1320],
      //       type: 'line',
      //       areaStyle: {}
      //     }]
      //   })
    }
  }
}
</script>

<style scoped>

</style>
