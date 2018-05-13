const test = require('tape')
const installOrder = require('../lib/pkg-installer.js')

test('installOrder([ "KittenService: CamelCaser", "CamelCaser: " ]) should return "CamelCaser,KittenService" ', function(t) {
  var result = installOrder(['KittenService: CamelCaser', 'CamelCaser: '])
  var expected = 'CamelCaser, KittenService'
  t.deepEqual(result, expected)
  t.end()
})

test('installOrder(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService","Fraudstream: Leetmeme","Ice: "]) should return "KittenService, CamelCaser, Ice, Cyberportal, Leetmeme, Fraudstream" ', function(t) {
  var result = installOrder([
    'KittenService: ',
    'Leetmeme: Cyberportal',
    'Cyberportal: Ice',
    'CamelCaser: KittenService',
    'Fraudstream: Leetmeme',
    'Ice: '
  ])
  var expected =
    'KittenService, CamelCaser, Ice, Cyberportal, Leetmeme, Fraudstream'
  t.deepEqual(result, expected)
  t.end()
})
