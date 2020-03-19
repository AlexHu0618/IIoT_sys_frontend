<template>
  <div>
    <el-row :gutter="20" style="margin-bottom: 10px;">
      <el-col :span="12" style="border-color: red;"><div class="grid-content bg-purple">
        <np></np>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">
        <dh></dh>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">
        <sac></sac>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">
        <tb3d></tb3d>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
import np from './components/NestedPies.vue'
import dh from './components/DistributionofHeight.vue'
import sac from './components/ScatterAqiColor.vue'
import tb3d from './components/TransparentBar3D.vue'

export default {
  components: {
    'np': np,
    'dh': dh,
    'sac': sac,
    'tb3d': tb3d
  }
}
</script>

<style>
</style>
