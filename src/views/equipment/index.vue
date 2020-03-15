<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="30%" style="background-color: rgb(238, 241, 246)">
      <my-tree></my-tree>
    </el-aside>
    <el-container>
      <el-header style="font-size: 12px">
        <el-button type="primary" @click="dialogFormVisible = true">+添加变量</el-button>
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
                <el-option label="1bit" value="1bit"></el-option>
                <el-option label="1Byte" value="1Byte"></el-option>
                <el-option label="2Bytes" value="2Bytes"></el-option>
                <el-option label="4Bytes" value="4Bytes"></el-option>
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

export default {
  components: {
    'my-tree': mytree
  },
  data() {
    const item = {
      name: '转速',
      unit: 'rad/min',
      size: '2 Bytes',
      value: 53
    }
    return {
      is_edit: false,
      tableData: Array(5).fill(item),
      dialogFormVisible: false,
      form: {
        name: '',
        unit: '',
        size: '',
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

  methods: {
    changeTreeState() {
      this.is_edit = !this.is_edit
    },

    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
      this.tableData.splice(index, 1)
    },

    addVariable() {
      this.dialogFormVisible = false
      var node = {
        name: this.form.name,
        unit: 'rad/min',
        size: this.form.size,
        value: 53
      }
      this.tableData.push(node)
    }
  }
}
</script>
