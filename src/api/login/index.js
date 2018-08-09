import {axios} from 'api/config/index'
// 登录接口
export function postLoginData (params) {
  return axios.post('/login', params)
}
// 获取登录用户的菜单数据
export function getloginUserMenu (params) {
  return axios.get('/user/authorities/menus', {params})
}

// 获取登录用户的功能点
export function getUserFunctions (params) {
  return axios.get('/user/authorities/functions', {params})
}
