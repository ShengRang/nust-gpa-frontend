<template>
  <div class="exam">
    <p>期末幸福hhh</p>
    <table style="margin: 0px auto;">
      <thead>
        <tr>
          <td>序号</td>
          <td>考场考次</td>
          <td>课程编号</td>
          <td>课程名称</td>
          <td>考试时间</td>
          <td>考场</td>
          <td>座位号</td>
        </tr>
      </thead>
      <tbody>
        <tr class="cal" v-for='exam in exams'>
          <td>{{ exam[0] }}</td>
          <td>{{ exam[1] }}</td>
          <td>{{ exam[2] }}</td>
          <td>{{ exam[3] }}</td>
          <td>{{ exam[4] }}</td>
          <td>{{ exam[5] }}</td>
          <td>{{ exam[6] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
  p {
    font-family: 'Roboto Mono', Monaco, courier, monospace;
    font-size: 0.9em;
  }
  table, th, td {
      font-size: 0.95em;
  }
  table {
      border-collapse:collapse;
      border:none;
  }
  th, td {
    border:solid#42B983 1px;
    padding: 4px;
  }
  tr.cal {
    background-color: #CEF6F5
  }
</style>
<script>
  import { mapState } from 'vuex'
  module.exports = {
    data: () => ({
    }),
    computed: mapState({
      exams: state => state.exams
    }),
    methods: {
    },
    components: {
    },
    mounted: function () {
      
    }
  }
</script>
