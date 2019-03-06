
const _reverse = require('../../src/algorithm-questions/string-reversal');


describe('String Reversal', () => {
  it('Should reverse string', () => {
    assert.equal(_reverse('hello'), 'olleh');
  });
});
