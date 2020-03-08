<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="30%" style="background-color: rgb(238, 241, 246)">
      <el-button style="float: right;" @click="changeTreeState">{{ is_edit ? '确定' : '编辑' }}</el-button>
      <el-input
        v-model="filterText"
        placeholder="输入关键字进行过滤"
      >
      </el-input>
      <el-tree
        :data="data"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent"
      >
      </el-tree>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-button type="primary" @click="dialogFormVisible = true">+添加</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
<!--       <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span> -->
      </el-header>
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" style="width: 33%;">
          </el-table-column>
          <el-table-column prop="name" label="姓名" style="width: 33%;">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    padding-right: 8px;
  }
  .tree-node {
    display: flex;
    margin-top: 10px;
  }
</style>

<script>
let id = 1000

export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    const treedata = [{
      id: 1,
      label: '***有限公司',
      children: [{
        id: 4,
        label: '***工厂1',
        children: [{
          id: 9,
          label: '***生产车间1'
        }, {
          id: 10,
          label: '***生产车间2',
          children: [{
            id: 11,
            label: '***生产线1'
          }, {
            id: 12,
            label: '***生产线2',
            children: [{
              id: 13,
              label: '***设备1',
              children: [{
                id: 15,
                label: '转速'
              }, {
                id: 16,
                label: '电压'
              }]
            }, {
              id: 14,
              label: '***设备2'
            }]
          }]
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }]
    return {
      is_edit: false,
      tableData: Array(20).fill(item),
      data: JSON.parse(JSON.stringify(treedata)),
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      filterText: ''
    }
  },

  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },

  methods: {
    changeTreeState() {
      this.is_edit = !this.is_edit
    },

    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },

    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class='custom-tree-node'>
          <span>{node.label}</span>
          <span>
            <el-button v-show='false' size='mini' type='text' on-click={ () => this.append(data) }>Append</el-button>
            <el-button size='mini' type='text' on-click={ () => this.remove(node, data) }>Delete</el-button>
          </span>
        </span>)
    }
  }
}
</script>
