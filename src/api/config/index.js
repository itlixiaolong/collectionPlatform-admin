import http from 'axios'
import { getSessionStorage } from 'utils/storage'
const service = http.create()
// 需要做权限登录的设置,如果不需要,可以直接删除
service.interceptors.request.use(
  config => {
    // 判断是否登录是否有token ，这里登录后会将token存到cookie中
    const USER_TOKEN = getSessionStorage('token') || ''
    // 登录不需要传token,看一下自己登录的接口包含哪个特殊字段
    if (USER_TOKEN && !config.url.includes('login')) {
      config.headers.common['Authorization'] = USER_TOKEN
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
export const axios = service
