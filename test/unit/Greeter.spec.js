var assert = require('assert');
var Greeter = require('../../lib/Greeter');

describe('Greeter', function () {
  var g;

  beforeEach(function () {
    g = new Greeter('Seth');
  });

  it('should return the correct greeting message', function () {
    var message  = g.greet('Lewis');
    var expected = 'Seth says: Hello there, Lewis!';

    // http://nodejs.org/api/assert.html
    assert.equal(message, expected);
  });
});
