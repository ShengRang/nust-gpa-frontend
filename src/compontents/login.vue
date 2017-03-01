<template>
    <div>
      <!-- //用于阻止 chrome表单自动填充的占位符 -->
      <input style="display: none;" type="text" />
      <input style="display: none;" type="password"/>
      <!-- //用于阻止 chrome表单自动填充的占位符 -->

        <h2>登录</h2>
        <input placeholder="学号" type="text" name="user" v-model='user' autocomplete="off"/><br>
        <input placeholder="密码" type="password" name="pwd" v-model='pwd' autocomplete="off"/><br>
        <input style="display: inline-block" type="checkbox" id="rem-cb" v-model="rememberPwd">
        <label for="rem-cb" style="color: black; font-size: 12px">记住密码</label><br>
        <div style="height: 30px">
          <a class="button" href="javascript:;" @click="loginGPA">查成绩</a>
          <a class="button" href="javascript:;" @click="loginExam">查考试</a>
        </div>

        <p style='color: red'>
          {{ this.$store.state.loginError }}
        </p>
        <p>首次使用请<a href="javascript:;" @click="$router.push('/about')">查看说明</a></p>
    </div>
</template>
<style scoped>
    input {
        /*display: block;*/
        margin: 6px;
        font-size: 0.9em;
        border:1px solid #000;
        border-radius: 2px;
        outline:none;
    }
    input:focus {
        border:1px solid #42B983;
        border-radius: 2px;
    }
    button {
        margin: 5px;
    }
    a.button {
      border: 1px solid #42b983;
      border-radius: 1em;
      display: inline-block;
      color: #42b983;
      font-size: 0.8em;
      width: 125px;
      padding: 3.6px 0;
      text-align: center;
      margin-bottom: 20px;
      background-color: #fff;
      max-width: 80px
    }
</style>
<script type="text/javascript">
    module.exports = {
      data: function () {
        return {
          'user': '',
          'pwd': '',
          'rememberPwd': false
        }
      },
      methods: {
        'loginGPA': function () {
          this.$store.dispatch('login', {user: this.user, pwd: this.pwd, rememberPwd: this.rememberPwd})
          this.$store.dispatch('fetchGPA')
        },
        'loginExam': function () {
          this.$store.dispatch('login', {user: this.user, pwd: this.pwd, rememberPwd: this.rememberPwd})
          this.$store.dispatch('fetchExam')
        }
      },
      mounted: function() {
        this.user = this.$store.state.user
        this.pwd = this.$store.state.pwd
        this.rememberPwd = this.$store.state.rememberPwd
      }
    }
</script>
