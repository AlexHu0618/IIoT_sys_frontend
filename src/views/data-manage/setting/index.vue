<template>
  <el-container class="my-container">
    <el-header>
      <el-button type="primary" style="float:right;" @click="handleEditBtn">{{ labelBtn }}</el-button>
    </el-header>
    <el-main>
      <el-row>
        <span style="font-size: large;font-weight: 400;">网关ID：</span>
        <el-input v-model="gatewayID" style="width: 300px;margin-bottom: 30px;" :disabled="enableEdit"></el-input>
      </el-row>
      <el-row>
        <span style="font-size: large;font-weight: 400;">数据帧：</span>
        <el-row :gutter="5" style="background-color: #6ee4e4;">
          <el-col v-for="(index,item) in 8" :key="index" :value="item" :span="3">
            <!-- <el-cascader v-model="dfList[index]" :options="dfOptions" :show-all-levels="false" placeholder="未指定" :disabled="enableEdit"></el-cascader> -->
            <el-select v-model="defaultFrame[item]" :disabled="enableEdit">
              <el-option
                v-for="item1 in selOptions"
                :key="item1.value"
                :label="item1.label"
                :value="item1.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-row>
      <el-row>
        <span style="font-size: large;font-weight: 400;">步&nbsp;&nbsp;&nbsp;&nbsp;长：</span>
        <el-select v-model="stepLen" :disabled="enableEdit" :placeholder="defaultStepLen">
          <el-option
            v-for="item in stepOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { getSetting, saveSetting } from '@/api/acq_setting.js'
export default {
  data() {
    return {
      enableEdit: true,
      gatewayID: 'sdfsdfsa0990sdf',
      labelBtn: '编辑',
      stepLen: 1,
      stepOptions: [{
        value: 1,
        label: '1秒'
      }, {
        value: 2,
        label: '2秒'
      }, {
        value: 3,
        label: '3秒'
      }, {
        value: 4,
        label: '4秒'
      }, {
      }],
      defaultStepLen: '未知',
      selOptions: [{
        value: 0,
        label: '未指定'
      }],
      defaultFrame: [0, 0, 0, 0, 0, 0, 0, 0],
      dfOptions: [{
        value: 0,
        label: '0',
        children: [{
          value: 3,
          label: '0-0'
        }, {
          value: 4,
          label: '0-1'
        }]
      }, {
        value: 1,
        label: '1'
      }]
    }
  },

  mounted: function() {
    // ajax get info
    getSetting().then(response => {
      console.log(response)
      var data = response.data
      if (data) {
        this.gatewayID = data.gwid
        this.defaultStepLen = this.stepOptions[data.step - 1].label
        this.selOptions = data.options
        this.defaultFrame = data.frame
      //   var tabledata = []
      //   data.forEach(function(item) {
      //     tabledata.push({ 'id': item.id, 'name': item.name, 'unit': item.unit, 'size': item.type + ' Byte', value: Math.floor((Math.random() * 100) + 1) })
      //   })
      //   this.tableData = tabledata
      } else {
        this.gatewayID = '未知'
        this.defaultStepLen = '未知'
      }
    })
  },

  methods: {
    handleEditBtn() {
      this.enableEdit = !this.enableEdit
      if (!this.enableEdit) {
        this.labelBtn = '保存'
      } else {
        this.labelBtn = '编辑'
        // ajax save setting and set some variables if success
        var setting = {
          gwid: this.gatewayID,
          frame: this.defaultFrame,
          step: this.stepLen
        }
        saveSetting(setting).then(response => {
          console.log(setting)
          if (response.code === 200) {
            this.$message.success('保存设置成功')
          } else {
            this.$message.error('保存设置不成功，请刷新！')
          }
        })
      }
    }
  }
}
</script>

<style>
  .my-container .el-header {
    background-color: #d6dddd !important;
  }
  .my-container .el-cascader {
    width: 120px !important;
    background-color: #409EFF !important;
  }
  .my-container .el-input {
    background-color: #409EFF !important;
  }
  .my-container .el-select {
    background-color: #409EFF !important;
    margin-top: 30px;
  }
</style>
