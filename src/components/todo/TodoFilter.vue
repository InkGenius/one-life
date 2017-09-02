<template>
  <div class="filter">
    <el-select v-model="experienceValue" filterable clearable placeholder="Experience" @change="filter">
      <el-option
        v-for="item in experienceOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="typeValue" filterable clearable placeholder="Type" @change="filter">
      <el-option
        v-for="item in this.$store.state.typeOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="timeValue" filterable clearable placeholder="Time" @change="filter">
      <el-option
        v-for="item in timeOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="labelValue" filterable clearable placeholder="Label" @change="filter">
      <el-option
        v-for="item in labelOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button v-if="type === 'todo'" style="margin-left:30px" @click="dialogVisible = true">添加</el-button>
    <el-dialog title="添加Todo" size="tiny" :visible.sync="dialogVisible" >
      <el-form :model="form" :rules="formRules" label-position="left" ref="form" label-width="80px">
        <el-form-item label="内容" prop="context">
          <el-input size="small" v-model="form.context"></el-input>
        </el-form-item>
        <el-form-item label="类别" prop="type">
          <el-select v-model="form.type" placeholder="请选择待办类别">
            <el-option v-for="item in this.$store.state.typeOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button @click="resetForm('form')">重置</el-button>
          <el-button type="primary" @click="submitForm('form')">确 定</el-button>
       </div>
    </el-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        experienceValue: '',
        dialogVisible: false,
        addUrl: this.$server_host + '/todos/add',
        experienceOptions: [{
          value: '选项1',
          label: '大学'
        }, {
          value: '选项2',
          label: '研究生'
        }],
        typeValue: '',
        timeValue: '',
        timeOptions: [{
          value: '选项1',
          label: '一周内'
        }, {
          value: '选项2',
          label: '二周内'
        }],
        labelValue: '',
        labelOptions: [{
          value: '选项1',
          label: '暂停'
        }, {
          value: '选项2',
          label: '无效'
        }],
        form: {
          context: '',
          type: ''
        },
        formRules: {
          context: [
            { required: true, message: '请输入待办内容', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择待办类别', trigger: 'change' }
          ]
        }
      }
    },
    props: ['type'],
    methods: {
      filter () {
        var res = []
        this.$store.state.todoList.forEach(function (element) {
          if ((this.typeValue === '' || (this.typeValue !== '' && this.typeValue === element.type))) {
            res.push(element)
          }
        }, this)
        if (this.type === 'todo') {
          this.$store.commit('todoFilterList', res)
        } else {
          this.$store.commit('doneFilterList', res)
        }
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post(this.addUrl, {
              data: this.form
            }).then((res) => {
              this.$store.commit('updateList', res.data)
              console.log(res.data)
              this.$message({
                message: '保存成功',
                type: 'success'
              })
              this.dialogVisible = false
            }).catch(function (error) {
              console.log(error)
              this.$message.error('保存失败')
            })
          } else {
            this.$message.error('输入格式不符，请重新输入!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    },
    watch: {
      dialogVisible: {
        handler: function (val, oldval) {
          // 第一次触发时表单对象还没创建
          if (this.$refs['form']) {
            this.$refs['form'].resetFields()
          }
        }
      }
    }
  }
</script>

<style>
.filter{
  text-align: left;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
</style>
