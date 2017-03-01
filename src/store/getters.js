export const hasLoginError = state => state.loginError?true:false

export const hasExamData = state => state.exams !== []

export const hasGPAData = state => state.scores !== [] && state.info !== "" && state.classSys !== []