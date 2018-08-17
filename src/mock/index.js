// http://mockjs.com/
/* product-manage */
import productList from './product-manage/product-list'
import productAdd from './product-manage/product-add'
import productVersionAdd from './product-manage/product-version-add'
import productVersionHistory from './product-manage/product-version-history'
/* userole-manage */
import department from './userrole-manage/department'
import userList from './userrole-manage/userList'
const Mock = require('mockjs')
/* product-manage */
Mock.mock('/product/productList', productList)
Mock.mock('/product/productAdd', 'post', productAdd)
Mock.mock('/product/productVersionHistory', productVersionHistory)
Mock.mock('/product/productVersionAdd', 'post', productVersionAdd)

// 获取部门数据
Mock.mock('/departments', department)
Mock.mock('/userList', userList)
