import Vue from 'vue'

export const login = ({ commit, state }, payload) => {
    var user = payload['user']
    var pwd = payload['pwd']
    var rememberPwd = payload['rememberPwd']
    state.user = user
    state.pwd = pwd
    if (rememberPwd) {
        commit('rememberPwd', {user, pwd})
    } else {
        commit('clearPwd')
    }
    commit('clearLastData') // 点击登录按钮时清除上一次数据, 通过link切换时无需清除
}

export const fetchExam = ({ commit, state }, payload) => {
    var user = state.user
    var pwd = state.pwd
    if ( !(user && pwd)) {
        commit('pushLoginError', '帐号或密码为空')
        state.route.push('/')
    }
    var data = {user, pwd}
    Vue.http.get('jwc/exam', {params: data}).then((response) => {
        state.exams = response.body
        commit('clearLoginError')
        state.route.push('/exam')
    }, (response) => {
        commit('pushLoginError', 'Error! 请检查帐号密码是否正确. 并确保教务处没有崩')
        state.route.push('/')
    })
}

export const fetchGPA = ({ commit, state }, payload) => {
    var user = state.user
    var pwd = state.pwd
    if ( !(user && pwd)) {
        commit('pushLoginError', '帐号或密码为空')
        state.route.push('/')
    }
    var data = {user, pwd}

    Promise.all([Vue.http.get('jwc/info', {params: data}),
    Vue.http.get('jwc/score', {params: data})]).then(([rspInfo, rspScore]) => {
        state.scores = rspScore.body.scores
        state.info = `${rspInfo.body.name} (${rspInfo.body.major})`
        state.classSys = rspScore.body.classSys
        commit('clearLoginError')
        state.route.push('/gpa')
    }, (res) => {
        commit('pushLoginError', 'Error! 请检查帐号密码是否正确. 并确保教务处没有崩')
        state.route.push('/')
    })
}

export const fetchTable = ({ commit, state }, payload) => {
    var res = require('../config').table1
    commit('loadTable', res)
    state.route.push('/table')
}

