import { axios } from '../config/index'
// 获取登录用户的菜单数据
export function getCopyrightList (params) {
  return axios.get('/copyrightList', { params })
}
