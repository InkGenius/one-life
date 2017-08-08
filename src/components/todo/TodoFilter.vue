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
        v-for="item in typeOptions"
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
  </div>
</template>

<script>
  export default {
    data () {
      return {
        experienceValue: '',
        experienceOptions: [{
          value: '选项1',
          label: '大学'
        }, {
          value: '选项2',
          label: '研究生'
        }],
        typeValue: '',
        typeOptions: [{
          value: '学习',
          label: '学习'
        }, {
          value: '工作',
          label: '工作'
        }, {
          value: '娱乐',
          label: '娱乐'
        }],
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
        }]
      }
    },
    props: ['type'],
    methods: {
      filter () {
        var res = []
        console.log(this.typeValue)
        this.$store.state.todoList.forEach(function (element) {
          if ((this.typeValue === '' || (this.typeValue !== '' && this.typeValue === element.type))) {
            res.push(element)
          }
        }, this)
        console.log(res)
        if (this.type === 'todo') {
          this.$store.commit('todoFilterList', res)
        } else {
          this.$store.commit('doneFilterList', res)
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
