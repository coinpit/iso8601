var expect = require('expect.js')
var utc    = require('../index')

describe('UTC conversion and printing', function() {
  var now = new Date(1452392210803)

  it('Should return date in ISO format', function() {
    expect(utc.iso(now)).to.equal('2016-01-09T18:16:50.803Z')
  })

  it('Should print HH:mm', function() {
    expect(utc.hhmm(now)).to.equal('18:16')
  })

  it('Should print MM-DD', function() {
    expect(utc.mmdd(now)).to.equal('01-09')
  })

  it('Should print truncated ISO String', function() {
    expect(utc.longdate(now)).to.equal('2016-01-09T18:16')
  })
})
