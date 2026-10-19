const assert = require('node:assert');
const { test } = require('node:test');
const { sub } = require('../src/sub.js');

test('subtracts two numbers (UC-1)', () => {
  assert.strictEqual(sub(5, 3), 2);
});

test('subtracts a larger number from a smaller one, giving a negative result (UC-1)', () => {
  assert.strictEqual(sub(3, 5), -2);
});

test('subtracts zero from zero (UC-1)', () => {
  assert.strictEqual(sub(0, 0), 0);
});
