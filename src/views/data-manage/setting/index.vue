<template>
  <el-container class="my-container">
    <el-header>
      <a href="http://172.20.10.4:8889/download/client.7z">
        <el-button type="primary">下载客户端 app.exe</el-button>
      </a>
    </el-header>
    <el-main>
      <el-row style="padding-bottom: 40px;">
        <el-steps :active="6" align-center>
          <el-step title="步骤1" description="在&lt;设备编辑&gt;页面添加CPU,内存,硬盘与网络四个变量"></el-step>
          <el-step title="步骤2" description="下载客户端软件&quot;app.exe&quot;"></el-step>
          <el-step title="步骤3" description="运行客户端软件获取网关ID"></el-step>
          <el-step title="步骤4" description="修改本页面中的&lt;网关ID&gt;"></el-step>
          <el-step title="步骤5" description="按照&quot;CPU->内存->硬盘->网络&quot;的顺序修改本页面中的&lt;数据帧&gt;,保存设置"></el-step>
          <el-step title="步骤6" description="重新运行客户端软件开始采集"></el-step>
        </el-steps>
      </el-row>
      <el-row>
        <span style="font-size: large;font-weight: 400;">网关ID：</span>
        <el-input v-model="gatewayID" style="width: 300px;margin-bottom: 30px;" :disabled="enableEdit"></el-input>
        <el-button type="primary" style="float:right;" @click="handleEditBtn">{{ labelBtn }}</el-button>
      </el-row>
      <el-row>
        <span style="font-size: large;font-weight: 400;">数据帧：</span>
        <el-row :gutter="5" style="background-color: #6ee4e4;">
          <el-col v-for="(index,item) in 8" :key="index" :value="item" :span="3">
            <!-- <el-cascader v-model="dfList[index]" :options="dfOptions" :show-all-levels="false" placeholder="未指定" :disabled="enableEdit"></el-cascader> -->
            <el-select v-model="defaultFrame[index - 1]" :disabled="enableEdit" @change="handleOpt">
              <el-option
                v-for="item1 in selOptions"
                :key="item1.value"
                :label="item1.label"
                :value="item1.value"
                :disabled="item1.disabled"
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
        label: '未指定',
        disabled: false
      }, {
        value: 1,
        label: '未指定1',
        disabled: false
      }, {
        value: 2,
        label: '未指定2',
        disabled: false
      }, {
        value: 3,
        label: '未指定3',
        disabled: false
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
    },

    handleOpt(item) {
      var index = this.selOptions.findIndex(function(x) {
        return x.value === item
      })
      var zero_index = this.defaultFrame.indexOf(0)
      var arr = this.defaultFrame.slice(zero_index)
      var rsl = arr.some(function(x) {
        return x !== 0
      })
      if (rsl) {
        this.$message.error('前面部分不能含有未指定，请重新设置！')
        this.defaultFrame = [0, 0, 0, 0, 0, 0, 0, 0]
        this.selOptions.forEach(function(item) {
          item.disabled = false
        })
      } else {
        this.selOptions[index].disabled = true
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
