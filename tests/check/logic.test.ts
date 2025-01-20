import { strict as assert } from "assert";
import { and, or, not, xor, nand, nor } from "../../src/check/logic"; // Adjust the path as necessary

import { test } from "node:test";

test("and should return true if all conditions are true", () => {
  assert.equal(and(true, true), true);
});

test("or should return true if at least one condition is true", () => {
  assert.equal(or(true, false), true);
});

test("not should return true if condition is false", () => {
  assert.equal(not(false), true);
});
// Advanced Logical Conditions
test("xor should return true if exactly one of the conditions is true", () => {
  assert.equal(xor(true, false), true);
});

test("nand should return true if not all conditions are true", () => {
  assert.equal(nand(true, false), true);
});

test("nor should return true if none of the conditions are true", () => {
  assert.equal(nor(false, false), true);
});
