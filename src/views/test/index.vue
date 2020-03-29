<template>
  <div class="chinaecharts">
    <TimeLine style="width: 400px;height: 400px;"></TimeLine>
  </div>
</template>

<script>
import TimeLine from '../cockpit/line.vue'

export default {
  components: {
    TimeLine
  },
  data() {
    return {
      a: 'bater',
      b: 'gg',
      c: 'ss'
    }
  }
}
</script>

<style scoped>
.grid-content {
  height: 300px;
  width: 300px;
}
</style>

<!-- <template>
  <div>
    <div>
      <PerOne :te-per="go"></PerOne>
      <PerOne :te-per="better"></PerOne>
    </div>
  </div>
</template>

<script>
import PerOne from './PersonalOne'
export default {
  name: 'Index',
  components: {
    PerOne
  },
  data() {
    return {
      go: 'better',
      better: 'go'
    }
  }
}
</script>

<style scoped>

</style> -->
