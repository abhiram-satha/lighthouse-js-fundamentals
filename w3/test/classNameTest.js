const chai = require('chai')

//var assert = chai.assert;
const {assert} = chai

describe ('addClass', function () {
  it('should add class to element', function() {
    var element = {className: ''};

    addClass(element, 'test-class');

    assert.equal(element.className, 'test-class');
  });
  it ('it should not add a class which already exists');
});