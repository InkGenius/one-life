<template>
  <div class="filter">
    <el-select v-model="experienceValue" filterable placeholder="Experience">
      <el-option
        v-for="item in experienceOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="typeValue" filterable placeholder="Type">
      <el-option
        v-for="item in typeOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="timeValue" filterable placeholder="Time">
      <el-option
        v-for="item in timeOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="labelValue" filterable placeholder="Label">
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
          value: '选项1',
          label: '学习'
        }, {
          value: '选项2',
          label: '工作'
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
    }
  }
</script>

<style>
.filter{
  text-align: left;
}
</style>
