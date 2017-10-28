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
  info: "",       // 个人信息 数据 姓名(学号)
  exams: null,     // 考试信息
  table:  null,    // 课表信息
  startDate: null, // 开学日期
}

if (typeof localStorage === 'object') {
    try {
        localStorage.setItem('localStorage', 1);
        localStorage.removeItem('localStorage');
    } catch (e) {
        Storage.prototype._setItem = Storage.prototype.setItem;
        Storage.prototype.setItem = function() {};
        console.log('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
    }
}

if(localStorage.getItem('rememberPwd') === "true"){
  state.rememberPwd = true
}

if(state.rememberPwd){
  state.user = localStorage.getItem('user') || state.user
  state.pwd = localStorage.getItem('pwd') || state.pwd
}

if(localStorage.getItem('table')){
    state.table = JSON.parse(localStorage.getItem('table'))
    state.startDate = localStorage.getItem('startDate')
}


const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store