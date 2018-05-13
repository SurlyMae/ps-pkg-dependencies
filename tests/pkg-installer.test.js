const test = require('tape')
const installOrder = require('../lib/pkg-installer.js')

test('installOrder([ "KittenService: CamelCaser", "CamelCaser: " ]) should return "CamelCaser,KittenService" ', function(t) {
  var result = installOrder(['KittenService: CamelCaser', 'CamelCaser: '])
  var expected = 'CamelCaser, KittenService'
  t.deepEqual(result, expected)
  t.end()
})
