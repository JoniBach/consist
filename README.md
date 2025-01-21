# Consist

[![npm version](https://badge.fury.io/js/consist.svg)](https://www.npmjs.com/package/consist)

**Consist** is a lightweight collection of pure JavaScript utility functions that help you organize and manage conditional logic in your applications. Whether you're working with form validations, filtering arrays, or checking the properties of objects, **Consist** provides a flexible and intuitive API to keep your logic clean, modular, and consistent.

---

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API](#api)
    - [1. operationList](#1-operationlist)
    - [2. checkCondition](#2-checkcondition)
    - [3. checkConditions](#3-checkconditions)
    - [4. checkObjectCondition](#4-checkobjectcondition)
    - [5. checkObjectConditions](#5-checkobjectconditions)
    - [6. filterByObjectCondition](#6-filterbyobjectcondition)
    - [7. filterByObjectConditions](#7-filterbyobjectconditions)
- [Examples](#examples)
- [Use Cases](#use-cases)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Lightweight & Pure JS**: No external dependencies, easy to integrate into any JavaScript/TypeScript project.
- **Extensive Operation Support**: Over a dozen built-in comparison operations (e.g., `=`, `!=`, `<`, `>`, `<=`, `>=`, `contains`, `startsWith`, and more).
- **Reusable Logic**: Makes complex condition-checking more readable and maintainable.
- **Object Support**: Check and validate object properties with ease.
- **Array Filtering**: Filter arrays of objects based on single or multiple conditions.

---

## Installation
Install **Consist** using your favorite package manager:

```bash
npm install consist
```

Or:

```bash
yarn add consist
```

---

## Quick Start

```js
import { isEqualTo, checkCondition, checkConditions } from 'consist';

// Single check
console.log(isEqualTo('a', 'a')); // true

// Simple condition check
console.log(checkCondition([5, "=", 5])); // true

// Multiple conditions in series
const conditions = [
  [5, "=", 5, true], // expected to be true
  ["hello", "startsWith", "h", true], // expected to be true
  [10, ">", 5, true] // expected to be true
];

console.log(checkConditions(conditions)); // true
```

---

## API
Below is a brief overview of the primary functions. For more examples, see the [Examples](#examples) section.

1. `operationList`
An array of all available operations and their associated functions.

```js
import { operationList } from 'consist';

console.log(operationList);
/* [
  { operation: "=", function: [Function] },
  { operation: "!=", function: [Function] },
  { operation: ">", function: [Function] },
  ...
] */
```

You can use this list to dynamically choose operations or integrate them into a UI for condition-building.

---

2. `checkCondition`
Evaluates a single condition. A condition is usually in the format:

```csharp
[value, operation, compareTo, expectedResult?]
```

- **value**: The data to be checked.
- **operation**: A string representing the operation to perform (e.g., `"="`, `"!="`, `">"`, `"exists"`, etc.).
- **compareTo** (optional): A value to compare with.
- **expectedResult** (optional, boolean): Indicates what the condition *expects* to be. If omitted, it simply returns whether the condition is `true` or `false`.

```js
import { checkCondition } from 'consist';

console.log(checkCondition([5, "=", 5])); // true
console.log(checkCondition([5, "<", 4])); // false

// With an expected result:
console.log(checkCondition([5, "=", 5, true])); // true (condition is true, matching expected)
console.log(checkCondition([5, "=", 5, false])); // false (condition is true, not matching expected)
```

---

3. `checkConditions`
Evaluates multiple conditions in series. It returns `true` only if **all** conditions pass (i.e., they match their expected results).

```js
import { checkConditions } from 'consist';

const conditions = [
  [5, "=", 5, true], // expects true
  ["hello", "startsWith", "h", true], // expects true
  [10, ">", 5, true], // expects true
];

console.log(checkConditions(conditions)); // true
```
If any one of the conditions does not match its expected result, `checkConditions` returns `false`.

---

4. `checkObjectCondition`
Similar to `checkCondition`, but it evaluates properties within an object.

```js
import { checkObjectCondition } from 'consist';

const obj = { firstName: "sam", age: 30 };

console.log(checkObjectCondition(obj, ["firstName", "=", "sam"])); // true
console.log(checkObjectCondition(obj, ["age", ">", 18]));           // true
console.log(checkObjectCondition(obj, ["firstName", "exists"]));    // true
```
**Usage**:

```scss
checkObjectCondition(
  objectToCheck,
  [key, operation, compareTo, expectedResult?]
)
```

---

5. `checkObjectConditions`
Evaluates multiple conditions against the same object. Returns `true` only if **all** conditions pass.

```js
import { checkObjectConditions } from 'consist';

const obj = { firstName: "sam", age: 30 };

console.log(
  checkObjectConditions(obj, [
    ["firstName", "=", "sam"],
    ["age", "=", 30],
  ])
); // true
```

---

6. `filterByObjectCondition`
Filters an array of objects based on a single condition.

```js
import { filterByObjectCondition } from 'consist';

const sampleData = [
  { name: "Apple", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Banana", category: "fruit" },
  { name: "Cherry", category: "fruit" },
];

const result = filterByObjectCondition(sampleData, ["category", "=", "fruit"]);

console.log(result);
// [
//   { name: "Apple", category: "fruit" },
//   { name: "Banana", category: "fruit" },
//   { name: "Cherry", category: "fruit" }
// ]
```

---

7. `filterByObjectConditions`
Filters an array of objects based on multiple conditions in series.

```js
import { filterByObjectConditions } from 'consist';

const sampleData = [
  { name: "Apple", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Banana", category: "fruit" },
  { name: "Cherry", category: "fruit" },
];

const result = filterByObjectConditions(sampleData, [
  ["category", "=", "fruit"],
  ["name", "startsWith", "C"],
]);

console.log(result);
// [{ name: "Cherry", category: "fruit" }]
```

---

## Examples

### Dynamic Condition Checks

```js
import { checkCondition } from 'consist';

// Single condition with logical operators
console.log(
  checkCondition([[true, "=", false], "or", [1, "!=", 2]])
); 
// Explanation:
// - [true, "=", false] -> false
// - [1, "!=", 2] -> true
// "false or true" = true
// Overall result: true
```

### Complex Form Validations
You can use **Consist** for advanced form validations. For instance, you might have fields like `age`, `country`, `acceptTerms`, and so on. Simply build conditions and pass them to `checkObjectConditions` or `checkConditions` to validate the entire form in one go.

### Filtering Data Sets
When you need to filter large arrays of objects by multiple properties (e.g., searching for products within a category, above a certain price, or matching a search term), `filterByObjectConditions` comes in handy.

---

## Use Cases

1. **Form Validation**: Dynamically show or hide form fields based on user input.
2. **Search & Filtering**: Filter lists of data (e.g., e-commerce product lists) by user-selected criteria.
3. **Conditional Rendering**: Toggle UI components by checking multiple properties or states.
4. **Data Processing Pipelines**: Apply transformations or validations on streams of data.

---


## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it in your personal or commercial projects.

---

**Happy Coding!** If you have any questions or run into any issues, feel free to open an issue on [GitHub](https://github.com/JoniBach/consist) or reach out via a pull request.
