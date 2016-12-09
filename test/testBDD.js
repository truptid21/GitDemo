var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

describe('Array', function() {

    beforeEach(function() {
        //  console.log('before every test in  file');
    });

    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            [1, 2, 3].indexOf(4).should.equal(-1);

            //  chai.assert.fail([1,2,3].indexOf(4), 0, "Test Case Fail Example");
        });

        it.skip('should return -1 when the value is not present with Skip', function() {

            [1, 2, 3].indexOf(5).should.equal(-1);
            assert.equal(-1, [1, 2, 3].indexOf(4));
            [1, 2, 3].indexOf(2).should.equal(1);
            //  chai.assert.fail([1,2,3].indexOf(4), 0, "Test Case Fail Example");
        });

        it('should only test in the correct environment', function() {
            if (false) {
                // make assertions
            } else {
                this.skip();
            }
        });
    });

    describe('my suite', () => {
        it('my test', () => {
            // should set the timeout of this test to 1000 ms; instead will fail
            this.timeout(1000);
            assert.ok(true);
        });
    });

    describe('#indexOf with assert Methods like Fail()', function() {
        it('should return -1 when the value is not present', function() {
            assert.isNotOk(null, "Is Ok test");
            //assert.strictEqual(5,"5", "check asset equal methos");
            assert.deepEqual({
                tea: 'green'
            }, {
                tea: 'green'
            });
            assert.notDeepEqual({
                tea: 'green'
            }, {
                tea: 'lemon'
            });
            assert.isNotTrue(false);
            assert.isNaN(NaN);

            assert.typeOf({
                tea: 'chai'
            }, 'object', 'we have an object');
            assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
            assert.typeOf('tea', 'string', 'we have a string');
            assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
            assert.typeOf(null, 'null', 'we have a null')
                //assert.deepEqual({ tea: 'green' }, { tea: 'green',coffee:'black'});
                //chai.assert.fail([1,2,3].indexOf(4), -1, "Test Case Fail Example","Test");
        });
    });

    describe('check Expect', function() {
        it('checking for except', function() {
            expect({
                foo: 'baz'
            }).to.have.property('foo').and.not.equal('bar');
        });
    });

    describe('retries', function() {
        // Retry all tests in this suite up to 4 times
        this.retries(4);

        beforeEach(function() {
            console.log("retries before each");
            //browser.get('http://www.yahoo.com');
        });

        it('should succeed on the 3rd try', function() {
            // Specify this test to only retry up to 2 times
            this.retries(2);
            expect(true).to.be.true;
        });
    });

    function add() {
        return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
            return prev + curr;
        }, 0);
    }

    describe('add()', function() {

        var tests = [{
            args: [1, 2],
            expected: 3
        }, {
            args: [1, 2, 3],
            expected: 6
        }, {
            args: [1, 2, 3, 4],
            expected: 10
        }];

        tests.forEach(function(test) {
            it('correctly adds ' + test.args.length + ' args', function() {
                var res = add.apply(null, test.args);
                assert.equal(res, test.expected);
            });
        });
    });

});
