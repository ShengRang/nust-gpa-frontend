<template>
  <div id="main" style="min-height: 550px;">
    <div class="sidebar">
        <ul class="main-menu">
        </ul>
        <div class="list">
          <div style="margin-bottom: 20px">
            <a id="donate" href="javascript:;"><span>微信打赏</span></a>
          </div>
          <h2>导航</h2>
          <ul class="menu-root">
            <li><router-link to="/login" class="sidebar-link">Login</router-link></li>
            <li><router-link to="/gpa" class="sidebar-link">GPA</router-link></li>
            <li><router-link to="/exam" class="sidebar-link">Exam</router-link></li>
            <li><router-link to="/table" class="sidebar-link">Table</router-link></li>
            <li><router-link to="/about" class="sidebar-link">About</router-link></li>
          </ul>
        </div>
    </div>

    <div class="content with-sidebar" id="app">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <div class="footer">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
