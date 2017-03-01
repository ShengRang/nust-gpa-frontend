<template>
  <div>
    <table style="margin: 0px auto;">
      <thead>
        <tr>
          <td>课程编号</td>
          <td>课程名</td>
          <td>学分</td>
        </tr>
      </thead>
      <tbody>
        <tr class="cal" v-for='course in courses'>
          <td>{{course.id}}</td>
          <td>{{course.name}}</td>
          <td>{{course.score}}</td>
        </tr>
        <tr>
          <td colspan="2">总学分</td>
          <td>{{sumScore}}</td>
        </tr>
      </tbody>
    </table>
    <br>
  </div>
</template>
<style media="screen">
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

  module.exports = {
    props: ['classType'],
    data: () => ({
      'courses': []
    }),
    computed: {
      'sumScore': function () {
        var res = 0.0
        for (let course of this.courses) {
          res += parseFloat(course.score)
        }
        return res
      }
    },
    mounted: function () {
      if (this.$store.state.classSys && this.$store.state.classSys.hasOwnProperty(this.classType)) {
        this.courses = this.$store.state.classSys[this.classType]
      }
    }
  }
</script>
