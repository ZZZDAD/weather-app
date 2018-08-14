var cookie = {
  setCookie: function (key, value, iDay) {
    var oDate = new Date()
    oDate.setDate(oDate.getDate() + iDay)
    document.cookie = key + '=' + value + ';expires=' + oDate
  },
  removeCookie: function (key) {
    this.setCookie(key, '', -1)
  },
  getCookie: function (key) {
    var cookieArr = document.cookie.split('; ');
    for (var i = 0; i < cookieArr.length; i++) {
      var arr = cookieArr[i].split('=')
      if (arr[0] === key) {
        return arr[1]
      }
    }
    return false
  }
}

module.exports = cookie
