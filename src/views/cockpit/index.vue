<template>
  <div class="chinaecharts">
    <el-row :gutter="10" class="myrow">
      <el-col :span="8"><div class="grid-content bg-purple"><Gauge :my-chart="cpu"></Gauge></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"><Gauge :my-chart="mem"></Gauge></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"><Gauge :my-chart="disk"></Gauge></div></el-col>
    </el-row>
    <div style="height: 200px;">
      <TimeLine></TimeLine>
    </div>
  </div>
</template>

<script>
import Gauge from '../cockpit/Gauge.vue'
import TimeLine from './line.vue'

export default {
  components: {
    Gauge,
    TimeLine
  },
  data() {
    return {
      cpu: '变量A',
      mem: '变量B',
      disk: '变量C'
    }
  }
}
</script>

<style scoped>

</style>

<!-- <template>
  <div>
    <iframe
      id="mobsf"
      allowfullscreen
      src="http://39.108.137.187:8000/"
      scrolling="no"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    /**
    * iframe-宽高自适应显示
    */
    function changeMobsfIframe() {
      const mobsf = document.getElementById('mobsf')
      const deviceWidth = document.body.clientWidth
      const deviceHeight = document.body.clientHeight
      mobsf.style.width = Number(deviceWidth) + 'px' // 数字是页面布局宽度差值
      mobsf.style.height = Number(deviceHeight) + 'px' // 数字是页面布局高度差
    }

    changeMobsfIframe()

    window.onresize = function() {
      changeMobsfIframe()
    }
  }
}
</script> -->
