<template>
  <div>
    <el-row :gutter="5" style="background-color: #6ee4e4;">
      <el-col v-for="(index,item) in 8" :key="index" :value="item" :span="3">
        <el-select v-model="defaultFrame[index-1]" :disabled="false" @change="handleOpt">
          <el-option
            v-for="item1 in selOptions"
            :key="item1.value"
            :label="item1.label"
            :value="item1.value"
            :disabled="item1.disabled"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selOptions: [{
        value: 0,
        label: '未指定',
        disabled: false
      }, {
        value: 10,
        label: '未指定1',
        disabled: false
      }, {
        value: 27,
        label: '未指定2',
        disabled: false
      }, {
        value: 3,
        label: '未指定3',
        disabled: false
      }, {
        value: 4,
        label: '未指定4',
        disabled: false
      }, {
        value: 5,
        label: '未指定5',
        disabled: false
      }, {
        value: 6,
        label: '未指定6',
        disabled: false
      }, {
        value: 7,
        label: '未指定7',
        disabled: false
      }],
      defaultFrame: [0, 0, 0, 0, 0, 0, 0, 0]
    }
  },

  methods: {
    handleOpt(item) {
      console.log(item)
      var index = this.selOptions.findIndex(function(x) {
        return x.value === item
      })
      console.log(index)
      console.log(this.defaultFrame)
      var zero_index = this.defaultFrame.indexOf(0)
      console.log(zero_index)
      var arr = this.defaultFrame.slice(zero_index)
      var rsl = arr.some(function(x) {
        return x !== 0
      })
      if (rsl) {
        this.$message.error('前面部分不能含有未指定，请重新设置！')
        this.defaultFrame = [0, 0, 0, 0, 0, 0, 0, 0]
        console.log(this.defaultFrame)
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
</style>

<!-- <template>
  <div>
    <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="demo-ruleForm">
      <div v-for="(item, index) in ruleForm.list" :key="index">
        <el-select
          v-model="item.type"
          clearable
          placeholder="请选择"
          @change="selectChange(item.type,index)"
        >
          <el-option
            v-for="(itemo,optionIndex) in options"
            :key="optionIndex"
            :label="itemo.label"
            :disabled="getDisable(itemo.value)"
            :value="itemo.value"
          ></el-option>
        </el-select>
        <i
          v-if="index === 0 && ruleForm.list[0].type !== '' && ruleForm.list.length<2"
          class="el-icon-circle-plus-outline ico"
          @click="add"
        ></i>
        <i v-if="index !==0" class="el-icon-remove-outline ico" @click="del(index)"></i>
      </div>
    </el-form>
  </div>
</template>

<script>
/* eslint-disable */
// 添加数组自定义事件 用来删除数组中的某一项
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) {
      return i;
    }
  }
  return -1;
};
Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
export default {
  data() {
    return {
      ruleForm: {
        list: [
          {
            type: '',
          },
        ],
      },
      options: [
        {
          label: '中国',
          value: 1,
        },
        {
          label: '美国',
          value: 2,
        },
      ],
      selectedOptions: [],
    };
  },
  methods: {
    selectChange(value, index) {
      console.log(arguments);
      console.log(value, index);
      this.selectedOptions[index] = value;
    },
    getDisable(value) {
      if (this.selectedOptions.indexOf(value) >= 0) {
        return true;
      } else {
        return false;
      }
    },
    add() {
      this.ruleForm.list.push({
        type: '',
      });
    },
    del(index) {
      // 删除时恢复可选
      if (this.ruleForm.list[index] || this.ruleForm.list[index] == 0) {
        this.selectedOptions.remove(this.ruleForm.list[index].type);
      }
      console.log(this.selectedOptions);
      this.ruleForm.list.splice(index, 1);
    },
  },
};
</script>

<style lang="css" scoped>
.ico {
  font-size: 40px;
}
</style>
 -->
