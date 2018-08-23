<template>
  <div class="">

    <div>
      <table style="margin: 0px auto;">
        <thead>
          <tr>
            <td>选中({{iXf}}学分)</td>
            <td v-for='h in colName'>{{h}}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for='gpa in gpas' :class="{'cal': gpa.cal}" @click='gpa.cal = !gpa.cal'>
            <td>
              <input type="checkbox" v-bind:checked="gpa.cal">
            </td>
            <td v-for='c in gpa.raw' track-by='$index'>{{c | converter('None', '-')}}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <table style="margin: 0px 30%;">
        <tbody>
          <tr>
            <td></td>
            <td>GPA</td>
            <td>均分</td>
          </tr>
          <tr>
            <td>选中课程</td>
            <td>{{gpa}}</td>
            <td>{{avg}}</td>
          </tr>
          <tr>
            <td>所有课程</td>
            <td>{{allGpa}}</td>
            <td>{{allAvg}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr>
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
  var sum = (arr) => arr.reduce((a, b) => (a + b), 0)
  var gradeConfig = {
    '优秀': 90,
    '良好': 80,
    '中等': 70,
    '及格': 60,
    '通过': 60,
    '不及格': 0
  }
  var getScore = function (str) {
    if (gradeConfig.hasOwnProperty(str)) {
      return gradeConfig[str]
    } else {
      return parseFloat(str)
    }
  }
  var oldGpaConfig = {
    '必修': true,
    '任选': false,
    '选修': false
  }
  var gpaConfig = {
    '必修': true,
    '任选': true,
    '公选': false,
    '选修': false
  }
  var getCal = function (term, row) {
    if (row[3] === '缓考') {
      return false
    }
    if (term > '2014-2015-1') {
      return gpaConfig[row[7]] || false
    } else {
      return oldGpaConfig[row[7]] || false
    }
  }
  var getGpa = function (score) {
    if (score >= 90) {
      return 4.0
    } else if (score >= 85) {
      return 3.7
    } else if (score >= 82) {
      return 3.3
    } else if (score >= 78) {
      return 3.0
    } else if (score >= 75) {
      return 2.7
    } else if (score >= 72) {
      return 2.3
    } else if (score >= 68) {
      return 2.0
    } else if (score >= 64) {
      return 1.5
    } else if (score >= 60) {
      return 1.0
    } else {
      return 0.0
    }
  }
  module.exports = {
    props: ['scores', 'term'],
    data: () => ({
      'colName': ['课程编号', '课程名称', '成绩', '成绩标识', '学分', '总学时', '考核方式', '课程属性', '课程性质'],
      'gpas': [],
      'fuckXf': 0
    }),
    computed: {
      'allXf': function () {
        return sum(this.gpas.map(i => i.xf))
      },
      'iXf': function () {
        this.fuckXf = sum(this.gpas.filter(i => i.cal).map(i => i.xf))
        this.$emit('reCalc')
        return this.fuckXf
      },
      'allSum': function () {
        return sum(this.gpas.map(i => (i.xf * i.cj)))
      },
      'iSum': function () {
        return sum(this.gpas.filter(i => i.cal).map(i => (i.xf * i.cj)))
      },
      'allJd': function () {
        return sum(this.gpas.map(i => (i.xf * getGpa(i.cj))))
      },
      'iJd': function () {
        return sum(this.gpas.filter(i => i.cal).map(i => (i.xf * getGpa(i.cj))))
      },
      'allAvg': function () {
        return (this.allSum / this.allXf).toFixed(2)
      },
      'avg': function () {
        return (this.iSum / this.iXf).toFixed(2)
      },
      'gpa': function () {
        return (this.iJd / this.iXf).toFixed(2)
      },
      'allGpa': function () {
        return (this.allJd / this.allXf).toFixed(2)
      }
    },
    mounted: function () {
      this.gpas = this.scores.map(row => ({
        'cal': getCal(this.term, row),
        'xf': parseFloat(row[4]),
        'cj': getScore(row[2]),
        'raw': row
      }))
    }
  }
</script>
