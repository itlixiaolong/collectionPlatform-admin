// 时间小于10,前面加0
export const addZero = (num) => {
  if (num < 10) {
    return '0' + num
  } else {
    return num
  }
}
// 格式化传入的时间戳 生成2018-10-09 12:23:24这种格式的时间
export const formateTime = (val) => {
  if (!val) return ''
  let d, s
  d = new Date(val)
  s = d.getFullYear() + '-'
  s = s + addZero(d.getMonth() + 1) + '-'
  s += addZero(d.getDate()) + ' '
  s += addZero(d.getHours()) + ':'
  s += addZero(d.getMinutes()) + ':'
  s += addZero(d.getSeconds())
  return s
}
// 获取时间戳
export const getTimeCode = (val) => {
  if (!val) return ''
  let d, s
  d = new Date(val)
  s = d.getTime()
  return s
}
