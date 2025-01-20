import { strict as assert } from "assert";
import { before, after, betweenDates, sameDay } from "../../src/check/date"; // Adjust the path as necessary

import { test } from "node:test";

// Date and Time Conditions
test("before should return true if first date is before the second date", () => {
  assert.equal(before(new Date("2020-01-01"), new Date("2020-01-02")), true);
});

test("after should return true if first date is after the second date", () => {
  assert.equal(after(new Date("2020-01-02"), new Date("2020-01-01")), true);
});

test("betweenDates should return true if a date falls between two dates", () => {
  assert.equal(
    betweenDates(
      new Date("2020-01-02"),
      new Date("2020-01-01"),
      new Date("2020-01-03")
    ),
    true
  );
});

test("sameDay should return true if two dates fall on the same day", () => {
  assert.equal(sameDay(new Date("2020-01-01"), new Date("2020-01-01")), true);
});
