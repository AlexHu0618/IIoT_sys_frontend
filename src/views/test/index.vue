<template>
  <div class="chinaecharts">
    <dv-active-ring-chart :config="data" style="width:300px;height:300px" />
  </div>
</template>

<script>
export default {
  data: function() {
    return [
      {
        name: '周口',
        value: 55
      },
      {
        name: '南阳',
        value: 120
      },
      {
        name: '西峡',
        value: 78
      },
      {
        name: '驻马店',
        value: 66
      },
      {
        name: '新乡',
        value: 80
      }
    ]
  }
}
</script>

<style scoped>
.chinaecharts {
    width: 50%;
    height: 50%;
}
#mapChart {
    width: 100%;
    height: 100%;
}
</style>
