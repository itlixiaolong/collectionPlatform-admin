
export const getLocalStorage = (key) => {
  return localStorage.getItem(key)
}
export const setLocalStorage = (key, value) => {
  try {
    localStorage.removeItem(key)
    localStorage.setItem(key, value)
  } catch (_) {
    alert('该功能无法使用，请关闭浏览器无痕模式（隐身模式）后重试')
  }
}
export const removeLocalStorage = function (key) {
  try {
    localStorage.removeItem(key)
  } catch (_) {
    alert('该功能无法使用，请关闭浏览器无痕模式（隐身模式）后重试')
  }
}
export const getSessionStorage = (key) => {
  return sessionStorage.getItem(key)
}
export const setSessionStorage = (key, value) => {
  try {
    sessionStorage.removeItem(key)
    sessionStorage.setItem(key, value)
  } catch (_) {
    alert('该功能无法使用，请关闭浏览器无痕模式（隐身模式）后重试')
  }
}
export const removeSesssionStorage = function (key) {
  try {
    sessionStorage.removeItem(key)
  } catch (_) {
    alert('该功能无法使用，请关闭浏览器无痕模式（隐身模式）后重试')
  }
}
