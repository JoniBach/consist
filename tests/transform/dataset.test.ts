import { strict as assert } from "assert";
import { test } from "node:test";
import {
  validateData,
  mapData,
  aggregateData,
  transformData,
  chunkArray,
  transformDataset,
  GenericDataPoint,
  TransformConfig,
} from "../../src/transform/dataset"; // Adjust the import path to your actual module

// Sample data for testing
const exampleData: GenericDataPoint[] = [
  { someField: 10, anotherField: "A" },
  { someField: 20, anotherField: "B" },
];

test("validates data correctly", () => {
  const validateFn = (
    data: GenericDataPoint[]
  ): { isValid: boolean; reason?: string } => {
    return { isValid: data.length > 0, reason: "No data" };
  };
  const result = validateData(exampleData, validateFn);
  assert.strictEqual(result.isValid, true);
});

test("maps data correctly", () => {
  const mapFn = (data: GenericDataPoint): GenericDataPoint => ({
    ...data,
    someField: data.someField * 2,
  });
  const result = mapData(exampleData, mapFn);
  assert.ok(
    result.every(
      (item, index) => item.someField === exampleData[index].someField * 2
    )
  );
});

test("aggregates data correctly", () => {
  const aggregateFn = (data: GenericDataPoint[]): GenericDataPoint[] => {
    return [
      { aggregatedField: data.reduce((acc, curr) => acc + curr.someField, 0) },
    ];
  };
  const result = aggregateData(exampleData, aggregateFn);
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].aggregatedField, 30);
});

test("transforms data correctly", () => {
  const config: TransformConfig = {
    validate: (data) => ({ isValid: data.length > 0 }),
    map: (data) => ({ ...data, computedField: data.someField * 2 }),
    aggregate: (data) => [
      {
        aggregatedField: data.reduce(
          (acc, curr) => acc + curr.computedField,
          0
        ),
      },
    ],
  };
  const result = transformData(exampleData, config);

  // Type assertion or type check
  if (result instanceof Error) {
    assert.fail("Expected result not to be an Error");
  } else {
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].aggregatedField, 60);
  }
});

test("chunks array data correctly", () => {
  const result = chunkArray([1, 2, 3, 4, 5], 2);
  assert.deepStrictEqual(result, [[1, 2], [3, 4], [5]]);
});

test("transforms large datasets correctly", async () => {
  const largeDataset = Array(1000).fill({ someField: 1 });
  const config: TransformConfig = {
    validate: (data) => ({ isValid: data.length > 0 }),
    map: (data) => ({ ...data, computedField: data.someField * 2 }),
  };
  const result = await transformDataset(largeDataset, config, 500);

  // Type assertion or type check
  if (result instanceof Error) {
    assert.fail("Expected result not to be an Error");
  } else {
    assert.strictEqual(result.length, 1000);
    assert.strictEqual(result[0].computedField, 2);
  }
});

test("transformData returns an error when validation fails", () => {
  // Sample data
  const sampleData: GenericDataPoint[] = [{ sampleField: "sampleValue" }];

  // Configuration that deliberately fails validation
  const failingConfig: TransformConfig = {
    validate: () => ({ isValid: false, reason: "Custom validation failure" }),
    map: (data) => data, // Dummy map function, won't be called due to validation failure
    aggregate: (data) => data, // Dummy aggregate function, won't be called due to validation failure
  };

  const result = transformData(sampleData, failingConfig);

  // Assert that result is an Error instance and check the error message
  assert(result instanceof Error, "Expected result to be an Error");
  assert.equal(
    result.message,
    "Custom validation failure",
    "Expected error message to match validation failure reason"
  );
});

test("transformDataset returns early on transformData error", async () => {
  // Generate a large dataset that will be chunked
  const largeDataSet: GenericDataPoint[] = [...Array(2000).keys()].map((i) => ({
    id: i,
  }));

  // Configuration that forces a validation error on a specific chunk
  const configWithError: TransformConfig = {
    validate: (chunk: GenericDataPoint[]) => {
      // Simulate a validation error on a specific condition, e.g., when processing a chunk with a specific item
      if (chunk.some((item) => item.id === 1000)) {
        return { isValid: false, reason: "Validation failed on purpose" };
      }
      return { isValid: true };
    },
    map: (item) => item, // Keep map and aggregate simple as they're not the focus here
    aggregate: (chunk) => chunk,
  };

  const result = await transformDataset(largeDataSet, configWithError, 500); // Ensure chunk size splits the data

  // Check if the function returned an Error as expected
  assert(
    result instanceof Error,
    "Expected function to return an Error due to validation failure"
  );
  assert.equal(
    result.message,
    "Validation failed on purpose",
    "Expected error message to match the simulated validation failure"
  );
});
