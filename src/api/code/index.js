import { axios } from 'api/config/index'

/* code-create */

export function postCodeCreateFormData (params) {
  return axios.post('/project/project', params)
}

/* code-manage */

// 请求代码库管理列表数据
export function getCodeManageListData (params) {
  return axios.get('/project/projects', {params})
}
// 请求代码库管理部门数据
export function getCodeManagePartmentsData (params) {
  return axios.get('/department/departments')
}
// 请求代码库审批状态数据
export function getCodeManageAppstatusData (params) {
  return axios.get('/project/status')
}

// 请求代码库项目技术栈数据
export function getCodeManageProjectLanguagesData (params) {
  return axios.get('/skillType')
}
// 同步gitlab数据
export function getCodeManageGitLabData (params) {
  return axios.get('/project/sync/oldData')
}
// 变更部门发送数据
export function postCodeMannageDepartmentsData (params) {
  return axios.post('/project/departments', params)
}

/* code-edit */

// 请求代码库项目组数据 /* code-create */
export function getCodeManageProjectGroups (params) {
  return axios.get('/project/group/names', {params})
}
// 传回项目修改数据
export function putSubmitEditData (id, params) {
  return axios.put(`/project/${id}`, params)
}
// 格式说明......
export function getCodeShell (id, params) {
  return axios.get('/project/' + id)
}
export function getCodeShellData (id, params) {
  return axios.get(`/project/${id}`)
}
