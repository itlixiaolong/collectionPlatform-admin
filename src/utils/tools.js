export const resize = (value) => {
  window.onresize = () => {
    value = window.innerWidth
  }
}
