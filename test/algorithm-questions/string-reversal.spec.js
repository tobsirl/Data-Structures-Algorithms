import { assert } from 'chai';

// const reverse = require('../../src/algorithm-questions/string-reversal');
// const _reverse = require('../../src/algorithm-questions/string-reversal');
// const __reverse = require('../../src/algorithm-questions/string-reversal');

import {
  reverse,
  _reverse,
  __reverse
} from '../../src/questions/string-reversal';

// describe('String Reversal', () => {
//   it('Should reverse string', () => {
//     assert.equal(_reverse('hello'), 'olleh');
//   });
// });

describe('String Reversal', () => {
  it('Should reverse string', () => {
    assert.equal(reverse('Hello World!'), '!dlroW olleH');
  });
});
describe('String Reversal', () => {
  it('Should reverse string', () => {
    assert.equal(_reverse('Hello World!'), '!dlroW olleH');
  });
});
describe('String Reversal', () => {
  it('Should reverse string', () => {
    assert.equal(__reverse('Hello World!'), '!dlroW olleH');
  });
});
