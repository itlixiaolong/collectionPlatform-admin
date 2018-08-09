import * as types from './mutation-types'

const mutations = {
  // [types.SET_MENUS] (state, menus) {
  //   state.menus = menus
  // },
  // [types.SET_FUNCTIONS] (state, functions) {
  //   state.functions = functions
  // },
  [types.SET_FLAG] (state, flag) {
    state.isFromJobName2Default = flag
  },
  [types.ADD_TAB] (state, tab) {
    state.options.push(tab)
  },
  [types.SET_ACTIVE_TAB] (state, index) {
    state.activeIndex = index
  },
  [types.CLEAR_OPTION] (state) {
    state.options = []
  },
  [types.DELETE_TAB] (state, route) {
    let index = 0
    for (let option of state.options) {
      if (option.route === route) {
        break
      }
      index++
    }
    state.options.splice(index, 1)
  }
}

export default mutations
