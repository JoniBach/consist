import { strict as assert } from "assert";
import { even, odd, divisibleBy } from "../../src/check/number"; // Adjust the path as necessary

import { test } from "node:test";

test("even should return true for even numbers", () => {
  assert.equal(even(2), true);
  assert.equal(even(3), false);
});

test("odd should return true for odd numbers", () => {
  assert.equal(odd(3), true);
  assert.equal(odd(4), false);
});

test("divisibleBy should return true if the number is divisible by another number", () => {
  assert.equal(divisibleBy(10, 2), true);
  assert.equal(divisibleBy(10, 3), false);
});
