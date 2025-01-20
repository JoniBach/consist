import { strict as assert } from "assert";
import {
  exists,
  doesNotExist,
  keyExists,
  keyDoesNotExist,
  fileExists,
} from "../../src/check/existence"; // Adjust the path as necessary

import { test } from "node:test";
import * as fs from "fs";

test("exists should return true for non-null/undefined values", () => {
  assert.equal(exists(0), true);
  assert.equal(exists(""), true);
  assert.equal(exists(false), true);
});

test("doesNotExist should return true for null or undefined values", () => {
  assert.equal(doesNotExist(null), true);
  assert.equal(doesNotExist(undefined), true);
});

// JSON and Object Conditions
test("keyExists should return true if an object has a specified key", () => {
  assert.equal(keyExists({ a: 1 }, "a"), true);
});

test("keyDoesNotExist should return true if an object does not have a specified key", () => {
  assert.equal(keyDoesNotExist({ a: 1 }, "b"), true);
});

// File existence
test("fileExists should return true if the file exists", () => {
  const path = "./testfile.txt";
  fs.writeFileSync(path, "test content");
  assert.equal(fileExists(path), true);
  fs.unlinkSync(path);
});

test("fileExists should return false if the file does not exist", () => {
  const path = "./nonexistentfile.txt";
  assert.equal(fileExists(path), false);
});
