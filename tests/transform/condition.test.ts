import { strict as assert } from "assert";
import {
  UnsupportedOperationException,
  checkCondition,
  checkConditions,
  ConditionParams,
  checkObjectCondition,
  checkObjectConditions,
  filterByObjectCondition,
  filterByObjectConditions,
} from "../../src/transform/condition"; // Adjust the path as necessary

import { test } from "node:test";

test('checkCondition should return true for equal values using "=" operation', () => {
  assert.strictEqual(checkCondition([5, "=", 5]), true);
});

// Test '!=' operation
test('checkCondition should return true for non-equal values using "!=" operation', () => {
  assert.strictEqual(checkCondition([5, "!=", 4]), true);
});

// Test 'and' operation (assuming 'and' operation takes an array of conditions)
test('checkCondition should return true if all conditions are true for "and" operation', () => {
  assert.strictEqual(
    checkCondition([[true, "=", true], "and", [1, "!=", 2]]),
    true
  );
});

// Test 'or' operation (assuming 'or' operation logic is implemented)
test('checkCondition should return true if at least one condition is true for "or" operation', () => {
  assert.strictEqual(
    checkCondition([[true, "=", false], "or", [1, "!=", 2]]),
    true
  );
});

// Test 'startsWith' operation
test("checkCondition should return true if a string starts with a specific character", () => {
  assert.strictEqual(checkCondition(["test", "startsWith", "t"]), true);
});

// Testing multiple conditions
test("checkConditions should return true if all conditions meet their expected results", () => {
  const conditions: ConditionParams[] = [
    [5, "=", 5, true], // Expected to be true
    ["hello", "startsWith", "h", true], // Expected to be true
    [10, ">", 5, true], // Expected to be true
  ];
  assert.strictEqual(checkConditions(conditions), true);
});

// Testing failure scenario
test("checkConditions should return false if at least one condition does not meet the expected result", () => {
  const conditions: ConditionParams[] = [
    [5, "=", 4, true], // Expected to be true, but is false
    ["hello", "startsWith", "h", true], // Expected to be true
  ];
  assert.strictEqual(checkConditions(conditions), false);
});

test("checkCondition should throw UnsupportedOperationException for unsupported operations", () => {
  assert.throws(
    () => checkCondition([1, "unsupportedOperation", 2]),
    UnsupportedOperationException
  );
});

test("checkCondition should throw UnsupportedOperationException for unsupported operation", () => {
  assert.throws(() => {
    checkCondition([5, "unsupported", 5]);
  }, UnsupportedOperationException);
});

test("checkObjectCondition should correctly evaluate equality", () => {
  assert.strictEqual(
    checkObjectCondition({ firstName: "sam" }, ["firstName", "=", "sam"]),
    true,
    "Failed to correctly evaluate equality"
  );
});

test("checkObjectCondition should correctly evaluate existence", () => {
  assert.strictEqual(
    checkObjectCondition({ firstName: "sam" }, ["firstName", "exists"]),
    true,
    "Failed to correctly evaluate existence"
  );
});

test("checkObjectCondition should return false for failed equality check", () => {
  assert.strictEqual(
    checkObjectCondition({ firstName: "john" }, ["firstName", "=", "sam"]),
    false,
    "Incorrectly evaluated equality as true"
  );
});

test("checkObjectCondition should return true for valid object condition", () => {
  const obj = { a: 1, b: 2 };
  assert.strictEqual(checkObjectCondition(obj, ["a", "=", 1]), true);
  assert.strictEqual(checkObjectCondition(obj, ["b", "!=", 1]), true);
});

test("checkObjectCondition should return false for invalid object condition", () => {
  const obj = { a: 1, b: 2 };
  assert.strictEqual(checkObjectCondition(obj, ["a", "=", 2]), false);
  assert.strictEqual(checkObjectCondition(obj, ["b", "!=", 2]), false);
});

test("checkObjectCondition should throw UnsupportedOperationException for unsupported operations", () => {
  assert.throws(
    () =>
      checkObjectCondition({ age: 30 }, ["age", "unsupportedOperation", 25]),
    UnsupportedOperationException,
    "Failed to throw UnsupportedOperationException for an unsupported operation"
  );
});

test("checkObjectConditions should return true when all conditions pass", () => {
  assert.strictEqual(
    checkObjectConditions({ firstName: "sam", age: 30 }, [
      ["firstName", "=", "sam"],
      ["age", "=", 30],
    ]),
    true,
    "Failed to return true when all conditions should pass"
  );
});

test("checkObjectConditions should return false when any condition fails", () => {
  assert.strictEqual(
    checkObjectConditions({ firstName: "sam", age: 25 }, [
      ["firstName", "=", "sam"],
      ["age", "=", 30],
    ]),
    false,
    "Failed to return false when at least one condition should fail"
  );
});

test("checkObjectConditions should handle existence checks for missing keys", () => {
  assert.strictEqual(
    checkObjectConditions({ firstName: "sam" }, [["lastName", "exists"]]),
    false,
    "Failed to correctly handle existence checks for missing keys"
  );
});

const sampleData = [
  { id: 1, category: "fruit", name: "Apple" },
  { id: 2, category: "vegetable", name: "Carrot" },
  { id: 3, category: "fruit", name: "Banana" },
  { id: 4, category: "fruit", name: "Cherry" },
];

test("filterByObjectCondition should filter objects based on a single condition", () => {
  const result = filterByObjectCondition(sampleData, [
    "category",
    "=",
    "fruit",
  ]);
  assert.strictEqual(
    result.length,
    3,
    "Failed to filter objects based on the condition"
  );
});

test("filterByObjectConditions should filter objects based on multiple conditions", () => {
  const result = filterByObjectConditions(sampleData, [
    ["category", "=", "fruit"],
    ["name", "startsWith", "C"], // Assuming your operationList supports 'startsWith'
  ]);
  assert.strictEqual(
    result.length,
    1,
    "Failed to filter objects based on multiple conditions"
  );
  assert.strictEqual(result[0].name, "Cherry", "Incorrect object filtered");
});

test("filterByObjectCondition should filter objects based on condition", () => {
  const objs = [{ a: 1 }, { a: 2 }, { a: 3 }];
  const result = filterByObjectCondition(objs, ["a", ">", 1]);
  assert.deepStrictEqual(result, [{ a: 2 }, { a: 3 }]);
});

test("filterByObjectConditions should filter objects based on multiple conditions", () => {
  const objs = [
    { a: 1, b: 2 },
    { a: 2, b: 3 },
    { a: 3, b: 4 },
  ];
  const conditions: ConditionParams[] = [
    ["a", ">", 1],
    ["b", "<", 4],
  ];
  const result = filterByObjectConditions(
    objs,
    conditions as [string, string, any][]
  );
  assert.deepStrictEqual(result, [{ a: 2, b: 3 }]);
});
