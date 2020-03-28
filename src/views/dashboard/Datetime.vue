<template>
  <div>
    {{ nowDate + ' ' + nowTime + ' ' + nowWeek }}
  </div>
</template>

<script>
export default {
  name: 'Datatime',
  data() {
    return {
      nowDate: '', // 当前日期
      nowTime: '', // 当前时间
      nowWeek: '' // 当前星期
    }
  },
  mounted() {
    this.currentTime()
  },
  // 销毁定时器
  beforeDestroy: function() {
    if (this.getDate) {
      console.log('销毁定时器')
      clearInterval(this.getDate) // 在Vue实例销毁前，清除时间定时器
    }
  },
  methods: {
    currentTime() {
      setInterval(this.getDate, 500)
    },
    getDate: function() {
      var _this = this
      const yy = new Date().getFullYear()
      const mm = new Date().getMonth() + 1
      const dd = new Date().getDate()
      const week = new Date().getDay()
      const hh = new Date().getHours()
      const mf =
                  new Date().getMinutes() < 10
                    ? '0' + new Date().getMinutes()
                    : new Date().getMinutes()
      if (week === 1) {
        this.nowWeek = '星期一'
      } else if (week === 2) {
        this.nowWeek = '星期二'
      } else if (week === 3) {
        this.nowWeek = '星期三'
      } else if (week === 4) {
        this.nowWeek = '星期四'
      } else if (week === 5) {
        this.nowWeek = '星期五'
      } else if (week === 6) {
        this.nowWeek = '星期六'
      } else {
        this.nowWeek = '星期日'
      }
      _this.nowTime = hh + ':' + mf
      _this.nowDate = yy + '/' + mm + '/' + dd
    }
  }
}
</script>

<style>
</style>
