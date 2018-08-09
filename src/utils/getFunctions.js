import { getSessionStorage } from './storage'

export const getFunctions = (_this) => {
  try {
    let functions = JSON.parse(getSessionStorage('functions'))['/']
    let path = _this.$route.matched
    let subItem = []
    for (let prop in path) {
      if (parseInt(prop) !== 0 && parseInt(prop) !== (path.length - 1)) {
        subItem.push(path[prop].path)
      }
    }
    for (var i = 0; i < subItem.length; i++) {
      functions = functions[subItem[i]]
    }
    let currentPath = _this.$route.fullPath
    if (JSON.stringify(_this.$route.params) !== '{}') {
      let name = ''
      for (var key in _this.$route.params) {
        name = _this.$route.params[key]
      }
      var rex = new RegExp(name, 'g')
      currentPath = currentPath.replace(rex, 'default')
    }

    return functions[currentPath]
  } catch (_) {
    alert('读取缓存报错了!!!')
  }
}
