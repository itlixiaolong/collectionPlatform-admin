import { axios } from '../config'
// 请求用户权限的tree数据,包括菜单权限和功能权限
export function getUserRightsTreeData (params) {
  return axios.get('/tree', { params })
}

/* 菜单管理页面 */

// 发送新增的菜单数据
export function postUserRightAddMenusData (params) {
  return axios.post('/menu', params)
}
// 发送修改的菜单数据
export function putUserRightsUpdateMenusData (params, menuCode) {
  return axios.put(`/menu/${menuCode}`, params)
}
// 删除修改的菜单数据
export function deleteUserRightsDeleteMenusData (menuCode) {
  return axios.delete(`/menu/${menuCode}`)
}

/* 功能点管理页面 */

// 发送新增的功能数据
export function postUserRightAddFunctionsData (params) {
  return axios.post('/function', params)
}
// 发送新增的功能数据
export function putUserRightUpdateFunctionsData (params, functionCode) {
  return axios.put(`/function/${functionCode}`, params)
}
// 发送新增的功能数据
export function deleteUserRightDeleteFunctionsData (functionCode) {
  return axios.delete(`/function/${functionCode}`)
}
