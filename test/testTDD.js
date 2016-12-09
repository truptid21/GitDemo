var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

suite('Array using suite', function() {
setup(function() {
// ...its TDD example with Mocha and assertion tool Chai
});

suite('#indexOf()', function() {
test('should return -1 when not present', function() {
  assert.equal(-1, [1,2,3].indexOf(4));
});
});
});
