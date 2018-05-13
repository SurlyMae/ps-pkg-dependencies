const test = require('tape')
const getInstallOrder = require('../lib/pkg-installer.js')

test('getInstallOrder([ "KittenService: CamelCaser", "CamelCaser: " ]) should return "CamelCaser,KittenService" ', function(t) {
  var result = getInstallOrder(['KittenService: CamelCaser', 'CamelCaser: '])
  var expected = 'CamelCaser, KittenService'
  t.deepEqual(result, expected)
  t.end()
})

test('getInstallOrder(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "]) should return "KittenService, CamelCaser, Ice, Cyberportal, Leetmeme, Fraudstream" ', function(t) {
  var result = getInstallOrder([
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

test('getInstallOrder(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme"]) should return "invalid input" ', function(t) {
  var result = getInstallOrder([
    'KittenService: ',
    'Leetmeme: Cyberportal',
    'Cyberportal: Ice',
    'CamelCaser: KittenService',
    'Fraudstream: Leetmeme',
    'Ice: '
  ])
  var expected = 'invalid input'
  t.deepEqual(result, expected)
  t.end()
})
