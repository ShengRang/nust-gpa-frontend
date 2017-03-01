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
        router.push('/')
    }
    var data = {user, pwd}
    Vue.http.get('u/exam/', {params: data}).then((response) => {
        state.exams = response.body
        commit('clearLoginError')
        state.route.push('/exam')
    }, (response) => {
        commit('pushLoginError', 'Error! 请检查帐号密码是否正确. 并确保教务处没有崩')
        router.push('/')
    })
}

export const fetchGPA = ({ commit, state }, payload) => {
    var user = state.user
    var pwd = state.pwd
    if ( !(user && pwd)) {
        commit('pushLoginError', '帐号或密码为空')
        router.push('/')
    }
    var data = {user, pwd}
    Vue.http.get('u/score/', {params: data}).then((response) => {
        var data = response.body
        state.scores = data.scores
        state.info = data.info
        state.classSys = data.classSys
        commit('clearLoginError')
        state.route.push('/gpa')
    }, (response) => {
        commit('pushLoginError', 'Error! 请检查帐号密码是否正确. 并确保教务处没有崩')
        router.push('/')
    })
}
