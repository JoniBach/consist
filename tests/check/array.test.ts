import { strict as assert } from "assert";
import { test } from "node:test";
import {
  inArray,
  notInArray,
  empty,
  notEmpty,
  allMatch,
  anyMatch,
  noneMatch,
} from "../../src/check/array"; // Adjust the path as necessary

test("inArray should return true if value exists in array", () => {
  assert.equal(inArray(1, [1, 2, 3]), true);
});

test("notInArray should return true if value does not exist in array", () => {
  assert.equal(notInArray(4, [1, 2, 3]), true);
});

test("empty should return true for empty arrays", () => {
  assert.equal(empty([]), true);
});

test("notEmpty should return true for non-empty arrays", () => {
  assert.equal(notEmpty([1]), true);
});

// Array and Collection Specific
test("allMatch should return true if all elements in an array satisfy a specified condition", () => {
  assert.equal(
    allMatch([2, 4, 6], (x) => x % 2 === 0),
    true
  );
});

test("anyMatch should return true if any element in an array satisfies a specified condition", () => {
  assert.equal(
    anyMatch([1, 3, 5, 4], (x) => x % 2 === 0),
    true
  );
});

test("noneMatch should return true if no elements in an array satisfy a specified condition", () => {
  assert.equal(
    noneMatch([1, 3, 5], (x) => x % 2 === 0),
    true
  );
});
