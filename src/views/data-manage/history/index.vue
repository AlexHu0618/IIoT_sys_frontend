<template>
  <div id="container">
    <div id="selector">
      <el-select
        id="node-selector"
        v-model="equValue"
        clearable
        placeholder="请选择设备"
        @change="setVarOptions"
      >
        <el-option
          v-for="item in equOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        id="var-selector"
        v-model="varValue"
        clearable
        placeholder="测量变量"
      >
        <el-option
          v-for="item in varOptions"
          :key="item.value"
          :label="item.name"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-date-picker
        v-model="pickerValue"
        type="datetimerange"
        :picker-options="pickerOptions"
        value-format="yyyy-MM-dd HH:mm:ss"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
      >
      </el-date-picker>
      <el-button
        type="primary"
        :disabled="isSearching"
        :loading="isSearching"
        icon="el-icon-search"
        @click="searchBtnOn"
      >搜索</el-button>
    </div>
    <div
      id="chart"
      :style="'height: 500px'"
    >
    </div>
  </div>
</template>

<script>
import { getHistoryData } from '@/api/history'
import { getEquipments } from '@/api/history'
var echarts = require('echarts')
export default {
  name: 'History',
  data() {
    return {
      equOptions: [],
      equValue: '',
      varOptions: [],
      varValue: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一天',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      pickerValue: '',
      isSearching: false,
      // for echarts
      charts: '',
      xdata: ['2020-00-00 00:00:00', '2020-00-00 00:00:10', '2020-00-00 00:00:20'],
      opinionData: [1, 5, 10]
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawLine('chart')
    })
    this.getEquipmens()
  },
  methods: {
    getEquipmens() {
      getEquipments().then(response => {
        var data = response.data
        if (data) {
          for (const index in data) {
            this.equOptions.push({ value: data[index].value, label: data[index].label, vars: data[index].vars })
          }
        }
      })
    },
    setVarOptions() {
      this.varOptions = this.equOptions.find(item => item.value === this.equValue).vars
    },
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xdata
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          type: 'line',
          data: this.opinionData,
          areaStyle: {}
        }]
      })
    },
    searchBtnOn() {
      this.isSearching = true
      this.charts.showLoading()
      const params = { 'equ': this.equValue, 'var': this.varValue, 'begin_dt': this.pickerValue[0], 'end_dt': this.pickerValue[1] }
      console.log(params)
      getHistoryData(params).then(response => {
        console.log(response.data)
        var oResp = response.data
        if (oResp.isdetail) {
          this.charts.setOption({
            tooltip: {
              trigger: 'axis'
            },
            toolbox: {
              feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
              }
            },
            legend: {
              data: []
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: oResp.time
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              name: '采样点数值',
              type: 'line',
              areaStyle: {},
              data: oResp.datas
            }]
          }, true)
        } else {
          var aMean = []
          // var aMax = []
          // var aMin = []
          for (var i = 0; i < oResp.datas.length; i++) {
            aMean.push(oResp.datas[i])
            // aMean.push(oResp.datas[i].mean)
            // aMax.push(oResp.datas[i].max)
            // aMin.push(oResp.datas[i].min)
          }
          this.charts.setOption({
            tooltip: {
              trigger: 'axis'
            },
            toolbox: {
              feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
              }
            },
            legend: {
              // data: ['平均值', '最大值', '最小值']
              data: ['平均值']
            },
            xAxis: {
              data: oResp.time
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              name: '平均值',
              type: 'bar',
              areaStyle: {},
              data: aMean
            // }, {
            //   name: '最大值',
            //   type: 'bar',
            //   areaStyle: {},
            //   data: aMax
            // }, {
            //   name: '最小值',
            //   type: 'bar',
            //   areaStyle: {},
            //   data: aMin
            }]
          }, true)
        }
        this.charts.resize()
      })
      this.charts.hideLoading()
      this.isSearching = false
    }
  }
}
</script>

<style>
</style>
