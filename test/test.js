var assert = require('assert');
var piglatin = require('../main').piglatin;

describe('piglatin', function() {
  it('should return "ellohay orldway" when provided "hello world"', function() {
    assert.equal(piglatin("hello world"),"ellohay orldway");
  });

  it('should return "Ellohay Orldway" when provided "Hello World"', function() {
    assert.equal(piglatin("Hello World"),"Ellohay Orldway");
  });

  it('should return "Ellohay, orldway!" when provided "Hello, world!"', function() {
    assert.equal(piglatin("Hello, world!"),"Ellohay, orldway!");
  });

  it('should return "ilesmay alwaysay" when provided "smile always"', function() {
    assert.equal(piglatin("smile always"),"ilesmay alwaysay");
  });
});
