import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin: false,
  rememberPwd: false,
  user: "",
  pwd: "",
  loginError: "",

  scores: null,    // gpa 成绩原始数据
  classSys: null,   // 课程系统 原始数据
  info: null,       // 个人信息 数据 姓名(学号)
  exames: null,     // 考试信息
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store