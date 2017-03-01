export const hasLoginError = state => state.loginError?true:false

export const hasExamData = state => state.exams !== null

export const hasGPAData = state => state.scores !== null && state.info !== null && state.classSys !== null