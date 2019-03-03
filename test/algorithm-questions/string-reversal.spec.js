const { assert } = require('chai');
const _reverse = require('../../src/algorithm-questions/string-reversal');

require('mocha');

describe('String Reversal', () => {
  it('Should reverse string', () => {
    assert.equal(_reverse('hello'), 'olleh');
  });
});
