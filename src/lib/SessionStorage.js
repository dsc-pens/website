const ss = sessionStorage || window.sessionStorage

export default {
  get: key => JSON.parse(ss.getItem(key)),
  set: (key, value) => ss.setItem(key, JSON.stringify(value)),
}
