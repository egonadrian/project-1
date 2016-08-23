var expect = require('chai').expect;
var final = require('../bac');
var command = require('../index');

describe ('index', function() {

  it('final should be equal to a number', function() {
    expect(final(1,1,1)).to.equal(3.532);
  });

 

});
