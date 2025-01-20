import { strict as assert } from "assert";
import {
  startsWith,
  endsWith,
  contains,
  matches,
  regex,
  lengthEquals,
  lengthGreaterThan,
  lengthLessThan,
  validURL,
  validEmail,
  domainMatches,
} from "../../src/check/string"; // Adjust the path as necessary

import { test } from "node:test";

test("startsWith should return true if string starts with specified substring", () => {
  assert.equal(startsWith("hello world", "hello"), true);
});

test("endsWith should return true if string ends with specified substring", () => {
  assert.equal(endsWith("hello world", "world"), true);
});

test("contains should return true if string contains specified substring", () => {
  assert.equal(contains("hello world", "lo wo"), true);
});

test("matches should return true if string matches specified regex", () => {
  assert.equal(matches("hello", /^h/), true);
});
test("regex should return true if the string matches the regex", () => {
  assert.equal(regex("test", /es/), true);
  assert.equal(regex("test", /xyz/), false);
});

test("lengthEquals should return true if the string length equals the specified value", () => {
  assert.equal(lengthEquals("hello", 5), true);
  assert.equal(lengthEquals("hello", 4), false);
});

test("lengthGreaterThan should return true if the string length is greater than the specified value", () => {
  assert.equal(lengthGreaterThan("hello", 4), true);
  assert.equal(lengthGreaterThan("hi", 4), false);
});

test("lengthLessThan should return true if the string length is less than the specified value", () => {
  assert.equal(lengthLessThan("hi", 3), true);
  assert.equal(lengthLessThan("hello", 5), false);
});
// Network and URL Conditions
test("validURL should return true for a valid URL", () => {
  assert.equal(validURL("https://www.example.com"), true);
});

test("validEmail should return true for a valid email address", () => {
  assert.equal(validEmail("test@example.com"), true);
});

test("domainMatches should return true if the domain of a URL matches a specified domain", () => {
  assert.equal(
    domainMatches("https://www.example.com", "www.example.com"),
    true
  );
});

test("validURL should return false for an invalid URL", () => {
  assert.equal(validURL("invalid-url"), false);
  assert.equal(validURL("http://"), false);
  assert.equal(validURL(""), false);
});

test("validEmail should return false for an invalid email address", () => {
  assert.equal(validEmail("invalid-email"), false);
  assert.equal(validEmail("test@.com"), false);
  assert.equal(validEmail("test@com"), false);
  assert.equal(validEmail("test@com."), false);
  assert.equal(validEmail("@example.com"), false);
});

test("domainMatches should return false if the domain of a URL does not match a specified domain", () => {
  assert.equal(domainMatches("https://www.example.com", "example.com"), false);
  assert.equal(
    domainMatches("https://sub.example.com", "www.example.com"),
    false
  );
  assert.equal(domainMatches("invalid-url", "www.example.com"), false);
});
