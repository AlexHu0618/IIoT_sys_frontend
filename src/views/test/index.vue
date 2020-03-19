<template>
  <div>
    <el-row>
      <el-col v-for="(index,item) in dfList" :key="index" :value="item" :span="3">
        <el-input :value="dfList[item]"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dfList: ['1个', '2个', '3个', '4个', '5个', '6个', '7个', '8个']
    }
  }
}
</script>

<style>
</style>
