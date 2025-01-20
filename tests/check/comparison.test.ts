import { strict as assert } from "assert";
import { test } from "node:test";
import {
  isEqualTo,
  isNotEqualTo,
  isGreaterThan,
  isLessThan,
  isGreaterThanOrEqualTo,
  isLessThanOrEqualTo,
  isStrictlyEqualTo,
  isStrictlyNotEqualTo,
} from "../../src/check/comparison"; // Adjust the path as necessary

test("isEqualTo should return true for equal values", () => {
  assert.equal(isEqualTo(5, "5"), true);
});

test("isNotEqualTo should return true for non-equal values", () => {
  assert.equal(isNotEqualTo(5, "4"), true);
});

test("isGreaterThan should return true if the first value is greater", () => {
  assert.equal(isGreaterThan(5, 4), true);
});

test("isLessThan should return true if the first value is less", () => {
  assert.equal(isLessThan(3, 4), true);
});

test("isGreaterThanOrEqualTo should return true if the first value is greater or equal", () => {
  assert.equal(isGreaterThanOrEqualTo(5, 5), true);
});

test("isLessThanOrEqualTo should return true if the first value is less or equal", () => {
  assert.equal(isLessThanOrEqualTo(4, 5), true);
});

test("isStrictlyEqualTo should return true for strictly equal values", () => {
  assert.equal(isStrictlyEqualTo(5, 5), true);
});

test("isStrictlyNotEqualTo should return true for strictly not equal values", () => {
  assert.equal(isStrictlyNotEqualTo(5, "5"), true);
});
