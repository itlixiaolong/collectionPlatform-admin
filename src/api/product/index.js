import { axios } from '../config/index'

/* product-list */

// 请求产品列表数据
export function getProductListData (params) {
  return axios.get('/product/productList')
}
/* product-add */
// 传送添加产品的数据
export function postproductAddData (params) {
  return axios.post('/product/productAdd')
}
/* product-version-history */
// 请求产品历史版本数据
export function getProductVersionHistoryData (params) {
  return axios.get('/product/productVersionHistory')
}
/* product-version-add */
// 传送添加产品版本的数据
export function postProductVersionAddData (params) {
  return axios.post('/product/productVersionAdd')
}
