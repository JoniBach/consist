import { strict as assert } from "assert";
import {
  objectToArray,
  arrayToObject,
  mapToObject,
  objectToMap,
  setToArray,
  arrayToSet,
  arrayToFlatArray,
  arrayToGroup,
  objectValuesToString,
  objectKeysToString,
  objectToString,
  objectToQueryString,
  objectArrayValuesToString,
  objectArrayKeysToString,
  objectArrayToString,
  objectArrayToQueryString,
  objectArrayToArrayOfString,
  nestedObjectArrayValuesToString,
  nestedObjectArrayKeysToString,
  nestedObjectArrayToString,
  nestedObjectArrayToQueryString,
  nestedObjectArrayToArrayOfString,
  stringToObject,
  stringToArray,
  arrayWithObjectAndString,
  searchString,
  filterArrayByStringRaw,
  filterArrayByString,
} from "../../src/transform/dataStructure"; // Adjust the path as necessary

import { test } from "node:test";

// objectToArray
test("objectToArray converts an object to an array of [key, value] pairs", () => {
  const obj = { name: "John", age: 30 };
  const expected = [
    ["name", "John"],
    ["age", 30],
  ];
  assert.deepStrictEqual(objectToArray(obj), expected);
});

// arrayToObject
test("arrayToObject converts an array of [key, value] pairs back to an object", () => {
  const array: [string, any][] = [
    ["name", "John"],
    ["age", 30],
  ];

  const expected = { name: "John", age: 30 };
  assert.deepStrictEqual(arrayToObject(array), expected);
});

// mapToObject
test("mapToObject converts a Map to an object", () => {
  const map = new Map<string, any>([
    ["name", "John"],
    ["age", 30],
  ]);
  const expected = { name: "John", age: 30 };
  assert.deepStrictEqual(mapToObject(map), expected);
});

// objectToMap
test("objectToMap converts an object to a Map", () => {
  const obj = { name: "John", age: 30 };
  const expected = new Map<string, any>([
    ["name", "John"],
    ["age", 30],
  ]);
  assert.deepStrictEqual(objectToMap(obj), expected);
});

// setToArray
test("setToArray converts a Set to an array", () => {
  const set = new Set(["John", 30]);
  const expected = ["John", 30];
  assert.deepStrictEqual(setToArray(set), expected);
});

// arrayToSet
test("arrayToSet converts an array to a Set", () => {
  const array = ["John", 30];
  const expected = new Set(["John", 30]);
  assert.deepStrictEqual(arrayToSet(array), expected);
});

// arrayToFlatArray
test("arrayToFlatArray flattens a nested array into a single array", () => {
  const array = [1, [2, [3, [4]]], 5];
  const expected = [1, 2, 3, 4, 5];
  assert.deepStrictEqual(arrayToFlatArray(array), expected);
});

// arrayToGroup
test("arrayToGroup groups an array of objects by a given key", () => {
  const array = [
    { category: "fruit", name: "apple" },
    { category: "fruit", name: "banana" },
    { category: "vegetable", name: "carrot" },
  ];
  const expected = {
    fruit: [
      { category: "fruit", name: "apple" },
      { category: "fruit", name: "banana" },
    ],
    vegetable: [{ category: "vegetable", name: "carrot" }],
  };
  assert.deepStrictEqual(arrayToGroup(array, "category"), expected);
});

// Test objectValuesToString
test("objectValuesToString converts object values to a CSV string", async () => {
  const obj = { name: "John", age: 30, occupation: "Developer" };
  assert.equal(objectValuesToString(obj), "John, 30, Developer");
});

// Test objectKeysToString
test("objectKeysToString converts object keys to a CSV string", async () => {
  const obj = { name: "John", age: 30, occupation: "Developer" };
  assert.equal(objectKeysToString(obj), "name, age, occupation");
});

// Test objectToString
test("objectToString converts an object into a key:value CSV string", async () => {
  const obj = { name: "John", age: 30 };
  assert.equal(objectToString(obj), "name:John, age:30");
});

// Test objectToQueryString
test("objectToQueryString converts an object to a query string", async () => {
  const obj = { name: "John Doe", age: "30" };
  assert.equal(objectToQueryString(obj), "name=John+Doe&age=30");
});

// Test objectArrayValuesToString
test("objectArrayValuesToString converts an array of objects' values to a CSV string", async () => {
  const arr: Record<string, string>[] = [{ name: "John" }, { age: "30" }];
  assert.equal(objectArrayValuesToString(arr), "John, 30");
});

// Test objectArrayKeysToString
test("objectArrayKeysToString converts an array of objects' keys to a CSV string", async () => {
  const arr: Record<string, string>[] = [{ name: "John" }, { age: "30" }];
  assert.equal(objectArrayKeysToString(arr), "name, age");
});

// Test objectArrayToString
test("objectArrayToString converts an array of objects to a CSV string of key:value pairs", async () => {
  const arr = [{ name: "John", age: "30" }];
  assert.equal(objectArrayToString(arr), "name:John, age:30");
});

// Test objectArrayToQueryString
test("objectArrayToQueryString converts an array of objects to a combined query string", async () => {
  const arr = [{ name: "John" }, { age: 30 }];
  // Assuming each object is treated as a separate query string parameter set, concatenated by ','
  assert.equal(objectArrayToQueryString(arr), "name=John, age=30");
});

// Test objectArrayToArrayOfString function
test("objectArrayToArrayOfString converts an array of objects to an array of string representations", async () => {
  const arrayOfObjects: Record<string, any>[] = [
    { name: "John", age: "30" },
    { name: "Jane", occupation: "Developer" },
  ];
  const expectedOutput = [
    "name:John, age:30",
    "name:Jane, occupation:Developer",
  ];

  const result = objectArrayToArrayOfString(arrayOfObjects);
  assert.deepEqual(result, expectedOutput);
});

// Test nestedObjectArrayToArrayOfString for handling nested arrays and objects
test("nestedObjectArrayToArrayOfString converts nested arrays of objects to an array of string representations", async () => {
  const nestedArray = [
    { name: "John", age: "30" },
    [
      { name: "Jane", occupation: "Developer" },
      [{ name: "Doe", hobbies: ["reading", "gaming"] }],
    ],
    "Some random string",
    [
      42, // Testing with a number
      true, // Testing with a boolean
    ],
  ];

  const expectedOutput = [
    "name:John, age:30",
    "name:Jane, occupation:Developer",
    "name:Doe, hobbies:reading,gaming",
    "Some random string",
    "42",
    "true",
  ];

  const result = nestedObjectArrayToArrayOfString(nestedArray);
  assert.deepEqual(result, expectedOutput);
});

test("arrayWithObjectAndString converts array of objects to array with original objects and their string representation", async () => {
  const input = [{ name: "Dave", age: "42" }];
  const expected = [
    { original: { name: "Dave", age: "42" }, objectString: "Dave, 42" },
  ];

  const result = arrayWithObjectAndString(input);
  assert.deepEqual(result, expected);
});

// search

// Test searchForPartialMatch function for case-insensitive partial match
test("searchForPartialMatch finds a partial match regardless of case", async () => {
  const text = "The quick brown fox jumps over the lazy dog.";

  // Partial match, same case
  assert.ok(searchString(text, "quick"));

  // Partial match, different case
  assert.ok(searchString(text, "QUICK"));

  // Partial match at the beginning of the string
  assert.ok(searchString(text, "the"));

  // Partial match at the end of the string
  assert.ok(searchString(text, "dog"));

  // No match
  assert.ok(!searchString(text, "cat"));

  // Substring that is a part of a word (should match)
  assert.ok(searchString(text, "jum"));
});

// Sample data
const transformedArray = [
  { original: { name: "Dave", age: 42 }, objectString: "Dave, 42" },
  {
    original: { name: "Jane", occupation: "Developer", experience: "5 years" },
    objectString: "Jane, Developer, 5 years",
  },
  { original: { name: "Sam", hobby: "hiking" }, objectString: "Sam, hiking" },
];

// return original objects

// Testing for a term present in one of the objects
test("Filters based on a term present in the objects", async () => {
  const result = filterArrayByString(transformedArray, "Dev");
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].occupation, "Developer");
});

// Testing case-insensitivity of the search
test("Filters case-insensitively", async () => {
  const result = filterArrayByString(transformedArray, "jane");
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].name, "Jane");
});

// Testing for a search term not present
test("Correctly handles when the search term is not present", async () => {
  const result = filterArrayByString(transformedArray, "astronaut");
  assert.strictEqual(result.length, 0);
});

// Testing  match in values
test("Filters based on  match in objectString values", async () => {
  const result = filterArrayByString(transformedArray, "hiking");
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].hobby, "hiking");
});

// return transformed object

// Testing for a term present in one of the objects
test("Filters based on a term present in the objects", async () => {
  const result = filterArrayByStringRaw(transformedArray, "Dev");
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].original.occupation, "Developer");
});

// Testing case-insensitivity of the search
test("Filters case-insensitively", async () => {
  const result = filterArrayByStringRaw(transformedArray, "jane");
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].original.name, "Jane");
});

// Testing for a search term not present
test("Correctly handles when the search term is not present", async () => {
  const result = filterArrayByStringRaw(transformedArray, "astronaut");
  assert.strictEqual(result.length, 0);
});

// Testing  match in values
test("Filters based on  match in objectString values", async () => {
  const result = filterArrayByStringRaw(transformedArray, "hiking");
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].original.hobby, "hiking");
});

// Additional tests for uncovered lines

// Test for lines 110-111
test("Handles empty array input correctly", async () => {
  const result = filterArrayByStringRaw([], "test");
  assert.strictEqual(result.length, 0);
});

// Test for lines 117-118
test("Handles null search term correctly", async () => {
  const transformedArray = arrayWithObjectAndString([{ name: "John" }]);
  const result = filterArrayByStringRaw(transformedArray, null);
  assert.strictEqual(result.length, transformedArray.length);
});

// Test for lines 124-125
test("Handles undefined search term correctly", async () => {
  const transformedArray = arrayWithObjectAndString([{ name: "John" }]);
  const result = filterArrayByStringRaw(transformedArray, undefined);
  assert.strictEqual(result.length, transformedArray.length);
});

// Test for lines 131-132
test("Handles empty string search term correctly", async () => {
  const transformedArray = arrayWithObjectAndString([{ name: "John" }]);
  const result = filterArrayByStringRaw(transformedArray, "");
  assert.strictEqual(result.length, transformedArray.length);
});

// Test for line 155
test("Handles case where no matches are found", async () => {
  const transformedArray = arrayWithObjectAndString([{ name: "John" }]);
  const result = filterArrayByStringRaw(transformedArray, "nonexistent");
  assert.strictEqual(result.length, 0);
});

// Test for line 159
test("Handles case where multiple matches are found", async () => {
  const transformedArray = arrayWithObjectAndString([
    { name: "John" },
    { name: "Johnny" },
  ]);
  const result = filterArrayByStringRaw(transformedArray, "John");
  assert.ok(result.length > 1);
});

// Additional tests for uncovered branches

// Test for objectToArray with an empty object
test("objectToArray should return an empty array for an empty object", () => {
  const result = objectToArray({});
  assert.deepStrictEqual(result, []);
});

// Test for arrayToObject with an empty array
test("arrayToObject should return an empty object for an empty array", () => {
  const result = arrayToObject([]);
  assert.deepStrictEqual(result, {});
});

// Test for mapToObject with an empty map
test("mapToObject should return an empty object for an empty map", () => {
  const result = mapToObject(new Map());
  assert.deepStrictEqual(result, {});
});

// Test for objectToMap with an empty object
test("objectToMap should return an empty map for an empty object", () => {
  const result = objectToMap({});
  assert.deepStrictEqual(result, new Map());
});

// Test for setToArray with an empty set
test("setToArray should return an empty array for an empty set", () => {
  const result = setToArray(new Set());
  assert.deepStrictEqual(result, []);
});

// Test for arrayToSet with an empty array
test("arrayToSet should return an empty set for an empty array", () => {
  const result = arrayToSet([]);
  assert.deepStrictEqual(result, new Set());
});

// Test for arrayToFlatArray with an already flat array
test("arrayToFlatArray should return the same array if it is already flat", () => {
  const array = [1, 2, 3, 4, 5];
  const result = arrayToFlatArray(array);
  assert.deepStrictEqual(result, array);
});

// Test for arrayToGroup with an empty array
test("arrayToGroup should return an empty object for an empty array", () => {
  const result = arrayToGroup([], "key");
  assert.deepStrictEqual(result, {});
});

// Test for objectValuesToString with an empty object
test("objectValuesToString should return an empty string for an empty object", () => {
  const result = objectValuesToString({});
  assert.strictEqual(result, "");
});

// Test for objectKeysToString with an empty object
test("objectKeysToString should return an empty string for an empty object", () => {
  const result = objectKeysToString({});
  assert.strictEqual(result, "");
});

// Test for objectToString with an empty object
test("objectToString should return an empty string for an empty object", () => {
  const result = objectToString({});
  assert.strictEqual(result, "");
});

// Test for objectToQueryString with an empty object
test("objectToQueryString should return an empty string for an empty object", () => {
  const result = objectToQueryString({});
  assert.strictEqual(result, "");
});

// Test for objectArrayValuesToString with an empty array
test("objectArrayValuesToString should return an empty string for an empty array", () => {
  const result = objectArrayValuesToString([]);
  assert.strictEqual(result, "");
});

// Test for objectArrayKeysToString with an empty array
test("objectArrayKeysToString should return an empty string for an empty array", () => {
  const result = objectArrayKeysToString([]);
  assert.strictEqual(result, "");
});

// Test for objectArrayToString with an empty array
test("objectArrayToString should return an empty string for an empty array", () => {
  const result = objectArrayToString([]);
  assert.strictEqual(result, "");
});

// Test for objectArrayToQueryString with an empty array
test("objectArrayToQueryString should return an empty string for an empty array", () => {
  const result = objectArrayToQueryString([]);
  assert.strictEqual(result, "");
});

// Test for objectArrayToArrayOfString with an empty array
test("objectArrayToArrayOfString should return an empty array for an empty array", () => {
  const result = objectArrayToArrayOfString([]);
  assert.deepStrictEqual(result, []);
});

// Test for nestedObjectArrayValuesToString with an empty array
test("nestedObjectArrayValuesToString should return an empty string for an empty array", () => {
  const result = nestedObjectArrayValuesToString([]);
  assert.strictEqual(result, "");
});

// Test for nestedObjectArrayKeysToString with an empty array
test("nestedObjectArrayKeysToString should return an empty string for an empty array", () => {
  const result = nestedObjectArrayKeysToString([]);
  assert.strictEqual(result, "");
});

// Test for nestedObjectArrayToString with an empty array
test("nestedObjectArrayToString should return an empty string for an empty array", () => {
  const result = nestedObjectArrayToString([]);
  assert.strictEqual(result, "");
});

// Test for nestedObjectArrayToQueryString with an empty array
test("nestedObjectArrayToQueryString should return an empty string for an empty array", () => {
  const result = nestedObjectArrayToQueryString([]);
  assert.strictEqual(result, "");
});

// Test for nestedObjectArrayToArrayOfString with an empty array
test("nestedObjectArrayToArrayOfString should return an empty array for an empty array", () => {
  const result = nestedObjectArrayToArrayOfString([]);
  assert.deepStrictEqual(result, []);
});

// Test for stringToObject with an empty string
test("stringToObject should return an empty object for an empty string", () => {
  const result = stringToObject("");
  assert.deepStrictEqual(result, {});
});

// Test for stringToArray with an empty string
test("stringToArray should return an empty array for an empty string", () => {
  const result = stringToArray("");
  assert.deepStrictEqual(result, []);
});

// Test for arrayWithObjectAndString with an empty array
test("arrayWithObjectAndString should return an empty array for an empty array", () => {
  const result = arrayWithObjectAndString([]);
  assert.deepStrictEqual(result, []);
});

// Test for searchString with an empty text
test("searchString should return false for an empty text", () => {
  const result = searchString("", "test");
  assert.strictEqual(result, false);
});

// Test for searchString with an empty search term
test("searchString should return true for an empty search term", () => {
  const result = searchString("test", "");
  assert.strictEqual(result, true);
});

// Test for filterArrayByStringRaw with an empty array
test("filterArrayByStringRaw should return an empty array for an empty array", () => {
  const result = filterArrayByStringRaw([], "test");
  assert.deepStrictEqual(result, []);
});

// Test for filterArrayByString with an empty array
test("filterArrayByString should return an empty array for an empty array", () => {
  const result = filterArrayByString([], "test");
  assert.deepStrictEqual(result, []);
});
