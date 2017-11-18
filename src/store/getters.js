export const hasLoginError = state => state.loginError?true:false

var isArray = (o) => Object.prototype.toString.call(o) == '[object Array]'
var arrayNotEmpty = (o) => isArray(o) && o.length > 0

export const hasExamData = state => isArray(state.exams)

export const hasGPAData = state => state.scores && state.info !== "" && state.classSys

export const hasTableData = state => isArray(state.table)