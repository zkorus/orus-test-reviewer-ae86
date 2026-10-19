const assert = require('node:assert');
const { test } = require('node:test');
const { add } = require('../src/add.js');

test('adds two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});
