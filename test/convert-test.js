const chai = require('chai');
const convert = require('../src/convert');

const assert = chai.assert;

describe('convert.js test', () => {
  it('markdowon test <p>', () => {
    assert.strictEqual(convert('hoge'), '<p>hoge</p>\n');
  });
});