let isOk = false
export const isHasPermission = (path, menuList) => {
  isOk = false
  checkIsHasPermission(path, menuList)
  return isOk
}
const checkIsHasPermission = (path, menuList) => {
  for (let i = 0; i < menuList.length; i++) {
    if (path === menuList[i].path) {
      isOk = true
    } else {
      if (menuList[i].children && menuList[i].children.length > 0) {
        checkIsHasPermission(path, menuList[i].children)
      }
    }
  }
}
