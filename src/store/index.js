import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

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

if(localStorage.getItem('rememberPwd') === "true"){
  state.rememberPwd = true
}

if(state.rememberPwd){
  state.user = localStorage.getItem('user') || state.user
  state.pwd = localStorage.getItem('pwd') || state.pwd
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store