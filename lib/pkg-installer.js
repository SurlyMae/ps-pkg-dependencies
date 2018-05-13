module.exports = function getInstallOrder(arr) {
  var installOrder = []
  while (installOrder.length < arr.length) {
    arr.forEach(function(el) {
      let pair = el.split(': ')
      let key = pair[0],
        value = pair[1]
      if (!installOrder.includes(key)) {
        if (value == '') {
          installOrder.push(key)
        }
        if (installOrder.includes(value)) {
          installOrder.push(key)
        }
      }
    })
  }
  return installOrder.join(', ')
}
