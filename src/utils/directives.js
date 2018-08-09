import Vue from 'vue'
import { formateTime } from '@/utils/date'
export const fomattime = Vue.directive('fomatTime', {
  // 指令的定义
  inserted: function (el, binding) {
    if (!binding.value) {
      return ''
    }
    let d
    d = new Date(binding.value)
    const data = formateTime(d)
    el.innerHTML = data
  }
})
