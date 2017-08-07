<template>
  <div>
    <el-radio v-for="chart in charts" :label="chart.label" :key="chart.id" v-if="chart.category === 'net'" :disabled="chart.selected">{{chart.name}}</el-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    props: ['itemContext'],
    components: {
    }
  }
</script>

<style>
 
</style>
