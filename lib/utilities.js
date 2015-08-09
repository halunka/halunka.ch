isEMailAddress = function isEMailAddress (str) {
  return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str)
}