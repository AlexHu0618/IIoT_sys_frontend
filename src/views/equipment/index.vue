<template>
  <el-container>
    <el-aside width="30%" style="background-color: rgb(238, 241, 246);">
      <my-tree></my-tree>
    </el-aside>
    <el-container>
      <el-header style="font-size: 12px">
        <el-button v-show="!tree_editing && curNodeid?true:false" type="primary" @click="dialogFormVisible = true">+添加变量</el-button>
        <el-dialog title="添加变量" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="变量名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="单位" :label-width="formLabelWidth">
              <el-input v-model="form.unit" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="类型大小" :label-width="formLabelWidth">
              <el-select v-model="form.size" placeholder="请选择类型">
                <el-option label="1Byte" value="1"></el-option>
                <el-option label="2Bytes" value="2"></el-option>
                <el-option label="4Bytes" value="4"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addVariable">确 定</el-button>
          </div>
        </el-dialog>
      </el-header>
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="name" label="变量名">
          </el-table-column>
          <el-table-column prop="unit" label="单位">
          </el-table-column>
          <el-table-column prop="size" label="类型大小">
          </el-table-column>
          <el-table-column prop="value" label="数值">
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #d5d5d5;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
import mytree from '../../components/SlotTree/index.vue'
import { getVariable, addVariable, deleteVariable } from '@/api/variable.js'

export default {
  components: {
    'my-tree': mytree
  },
  data() {
    // const item = {
    //   name: '转速',
    //   unit: 'rad/min',
    //   size: '2 Bytes',
    //   value: Math.floor((Math.random() * 100) + 1)
    // }
    return {
      tree_editing: false,
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: '',
        unit: '',
        size: '',
        delivery: false,
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      filterText: '',
      curNodeid: null
    }
  },

  watch: {
    '$store.getters.treenode': function() {
      var node_id = this.$store.getters.treenode
      this.curNodeid = node_id
      console.log('the treenode is ', node_id)
      getVariable(node_id).then(response => {
        console.log(response)
        var data = response.data
        if (data) {
          var tabledata = []
          data.forEach(function(item) {
            tabledata.push({ 'id': item.id, 'name': item.name, 'unit': item.unit, 'size': item.type + ' Byte', value: Math.floor((Math.random() * 100) + 1) })
          })
          this.tableData = tabledata
        }
      })
    },
    '$store.getters.treestatus': function() {
      this.tree_editing = this.$store.getters.treestatus
      console.log(this.tree_editing)
    }
  },

  methods: {
    changeTreeState() {
      this.enable_edit = !this.enable_edit
    },

    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
      var node = this.tableData[index]
      node['node_id'] = this.curNodeid
      deleteVariable(node).then(response => {
        if (response.code === 200) {
          this.$message.success('删除变量成功')
          this.tableData.splice(index, 1)
        } else {
          this.$message.error('删除变量不成功，请刷新！')
        }
      })
    },

    addVariable() {
      this.dialogFormVisible = false
      var node = {
        name: this.form.name,
        unit: this.form.unit,
        size: this.form.size,
        value: null,
        node_id: this.curNodeid
      }
      addVariable(node).then(response => {
        console.log(node)
        if (response.code === 200) {
          this.$message.success('添加变量成功')
          this.tableData.push(node)
        } else {
          this.$message.error('添加变量不成功，请刷新！')
        }
      })
    }
  }
}
</script>
