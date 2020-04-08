<template>
  <div class="chinaecharts">
    <el-row :gutter="10" class="myrow">
      <el-col :span="8"><div class="grid-content bg-purple"><Gauge :my-chart="cpu.name" :value="cpu.value"></Gauge></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"><Gauge :my-chart="mem.name" :value="mem.value"></Gauge></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"><Gauge :my-chart="disk.name" :value="disk.value"></Gauge></div></el-col>
    </el-row>
    <div style="height: 250px;">
      <TimeLine :curvalue="curtv"></TimeLine>
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
      cpu: {
        name: 'CPU占用',
        value: 0
      },
      mem: {
        name: '内存占用',
        value: 0
      },
      disk: {
        name: '存储已用',
        value: 0
      },
      curtv: {
        time: '00:00:00',
        value: 0
      }
    }
  },
  computed: {
    wsData() {
      return this.$store.getters.wsmsg
    }
  },
  watch: {
    wsData(val) {
      var data = JSON.parse(val)
      console.log(data)
      this.cpu.value = data.cpu
      this.mem.value = data.mem
      this.disk.value = data.disk
      var myDate = new Date()
      var mytime = myDate.toLocaleTimeString()
      this.curtv.time = mytime
      this.curtv.value = data.net
    }
  },
  mounted() {
    this.$store.commit('websocket/setUid', this.$store.getters.uid)
    const uri = 'ws://172.20.10.4:8889/ws?uid=' + this.$store.getters.uid
    this.$store.dispatch('websocket/webSocketInit', uri)
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
