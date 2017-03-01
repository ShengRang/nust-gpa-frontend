export const rememberPwd = (state, {user, pwd}) => {
  localStorage.setItem('user', user)
  localStorage.setItem('pwd', pwd)
  localStorage.setItem('rememberPwd', true)
  state.user = user
  state.pwd = pwd
  state.rememberPwd = true
}

export const clearPwd = (state) => {
  localStorage.removeItem('user')
  localStorage.removeItem('pwd')
  localStorage.removeItem('rememberPwd')
  state.rememberPwd = false
}

export const syncRouter = (state, route) => {
  state.route = route
}

export const pushLoginError = (state, msg) => {
  state.loginError = msg
}

export const clearLoginError = (state) => {
  state.loginError = ""
}

export const clearLastData = (state) => {
  state.exams = null
  state.classSys = state.info = state.scores = null
}
