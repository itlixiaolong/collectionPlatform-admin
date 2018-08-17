import { axios } from '../config'

// 获取部门数据
export function getDepartmentsData () {
  return axios.get('/departments')
}
// 获取用户列表数据
export function getUserListData () {
  return axios.get('/userList')
}
