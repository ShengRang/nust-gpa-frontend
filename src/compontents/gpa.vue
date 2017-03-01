<template>
  <div class="gpa">
    <p>
      您好: {{info}}
    </p>
    <p style='color: blue'>
      已修所有(只计选中): GPA: {{gpa}}  均分: {{avg}} (祝毕业/出国/保研顺利)
    </p>
    <p style='color: red'>
      提示: 蓝底表示选中, 白底表示未选中, 点击对应成绩的那行就能改变选中状态!
    </p>
    <button type="button" id="scroll-to-class" name="button">查看选修课</button>
    <div style="text-align:center" v-for="(scores, term) in terms">
      <p>学期: {{term}}</p>
      <term-gpa :scores='scores' :term='term' v-on:reCalc="reCalc"></term-gpa>
    </div>
    <p>选修课类别数据来自 <b>教务处/培养管理/执行计划</b> 下的 <strong>科学素质/外国语言/人文素质</strong></p>
    <p>已修课程中的成绩大于等于60或者等级高于及格, 才纳入计算</p>
    <div style="text-align:center" id="class-sys" v-for="sys in classTypes">
      <p>
        [{{ sys }}]
      </p>
      <course-system :class-type="sys"></course-system>
    </div>
  </div>
</template>
<style scoped>
  p {
    font-family: 'Roboto Mono', Monaco, courier, monospace;
    font-size: 0.9em;
  }

</style>
<script>
  var sum = (arr) => arr.reduce((a, b) => (a + b), 0)
  // var $ = require('jquery')
  var body = document.body
  module.exports = {
    data: () => ({
      'iSum': 0,
      'iXf': 0,
      'iJd': 0,
      'classTypes': ['science', 'humanity', 'foreign']
    }),
    computed: {
      'gpa': function () {
        return (this.iJd / this.iXf).toFixed(2)
      },
      'avg': function () {
        return (this.iSum / this.iXf).toFixed(2)
      },
      info: function () { // 可以考虑使用mapState结合ES7的对象展开运算符进行简写
        return this.$store.state.info
      },
      terms: function () {
        return this.$store.state.scores
      }
    },
    methods: {
      'reCalc': function () {
        // 老版本用hasOwnProp可以, 然而新版本里计算属性不是自身属性了.. 
        // 当然这套GPA计算的代码还是太扯淡了, 但是又懒得改
        this.iSum = sum(this.$children.map((i) => 'iSum' in i ? i.iSum : 0))
        this.iXf = sum(this.$children.map((i) => 'fuckXf' in i ? i.fuckXf : 0))
        this.iJd = sum(this.$children.map((i) => 'iJd' in i ? i.iJd : 0))
      }
    },
    components: {
      'term-gpa': require('./termGpa.vue'),
      'course-system': require('./courseSystem.vue'),
    },
    mounted: function () {
      // $('#scroll-to-class').click(function () {
      //   $(body).animate({scrollTop: $('#class-sys').offset().top }, 600)
      //   return false // 返回false可以避免在原链接后加上#
      // })
    }
  }
</script>
