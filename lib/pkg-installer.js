module.exports = function getInstallOrder(arr) {
  var testArray = []
  while (testArray.length < arr.length) {
    arr.forEach(function(el) {
      var splat = el.split(': ')
      var key = splat[0],
        value = splat[1]
      //console.log(key, value);
      //console.log(pkgArray.includes(key));
      if (!testArray.includes(key)) {
        if (value == '') {
          testArray.push(key)
        }
        if (testArray.includes(value)) {
          testArray.push(key)
        }
      }
    })
  }
  return testArray.join(', ')
}
