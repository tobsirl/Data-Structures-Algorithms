import 'mocha';
import { expect } from 'chai';

import { reverse } from '../../src/algorithm-questions/string-reverse';

describe('String Reversal', () => {
  it('Should reverse string', () => {
    expect.equal(reverse('hello'), 'olleh');
  });
});
