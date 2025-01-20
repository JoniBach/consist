import { strict as assert } from "assert";
import { checkType, valueForKey, extensionMatches } from "../../src/check/misc"; // Adjust the path as necessary

import { test } from "node:test";

test("checkType should correctly identify types", () => {
  assert.equal(checkType("hello", "string"), true);
  assert.equal(checkType(10, "number"), true);
  assert.equal(checkType(true, "boolean"), true);
  assert.equal(checkType({}, "object"), true);
});

test("valueForKey should return true if the value for a specified key matches a condition", () => {
  assert.equal(
    valueForKey({ a: 2 }, "a", (value: unknown) => (value as number) % 2 === 0),
    true
  );
});

// File and Path Conditions (Assuming an environment setup for these kinds of tests)
test("extensionMatches should return true if the file extension matches a specified extension", () => {
  assert.equal(extensionMatches("test.txt", ".txt"), true);
});
