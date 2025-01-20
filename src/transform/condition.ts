import { operationList } from "../check";

export type ConditionParams = [any, string, any?, boolean?];

export class UnsupportedOperationException extends Error {}
export class OperationExecutionException extends Error {
  constructor(
    public operationName: string,
    public operands: any[],
    message?: string
  ) {
    super(message);
    this.name = "OperationExecutionException";
  }
}

export const checkCondition = (params: [any, string, any?]): boolean => {
  const [value1, operation, value2] = params;

  const operationEntry = operationList.find(
    (entry) => entry.operation === operation
  );

  if (!operationEntry) {
    throw new UnsupportedOperationException(
      `Unsupported operation '${operation}'. Please check the list of supported operations.`
    );
  }

  try {
    const arity = operationEntry.function.length;
    return arity === 1
      ? operationEntry.function(value1)
      : operationEntry.function(value1, value2);
  } catch (error) {
    if (error instanceof Error) {
      throw new OperationExecutionException(
        operation,
        [value1, value2],
        `Error executing '${operation}' with values (${value1}, ${value2}): ${error.message}`
      );
    } else {
      throw new OperationExecutionException(
        operation,
        [value1, value2],
        `Error executing '${operation}' with values (${value1}, ${value2}).`
      );
    }
  }
};

export const checkConditions = (conditions: ConditionParams[]): boolean => {
  for (const condition of conditions) {
    const [value1, operation, value2, expectedResult = true] = condition; // Default expected result is true
    const result = checkCondition([value1, operation, value2]);

    // Check the result against the expected result
    if (result !== expectedResult) {
      return false; // Condition did not meet the expected result
    }
  }
  return true; // All conditions met their expected results
};

export const checkObjectCondition = (
  obj: Record<string, any>,
  params: [string, string, any?]
): boolean => {
  const [key, operation, compareValue] = params;
  const value = obj[key];
  const operationEntry = operationList.find(
    (entry) => entry.operation === operation
  );

  if (!operationEntry) {
    throw new UnsupportedOperationException(
      `Unsupported operation '${operation}'. Please check the list of supported operations.`
    );
  }

  try {
    // Assuming all operations need both value and compareValue, adjust as necessary.
    return operationEntry.function(value, compareValue);
  } catch (error) {
    if (error instanceof Error) {
      throw new OperationExecutionException(
        operation,
        [value, compareValue],
        `Error executing '${operation}' with key '${key}' and value '${compareValue}': ${error.message}`
      );
    } else {
      throw new OperationExecutionException(
        operation,
        [value, compareValue],
        `Error executing '${operation}' with key '${key}' and value '${compareValue}'.`
      );
    }
  }
};

export const checkObjectConditions = (
  obj: Record<string, any>,
  conditions: [string, string, any?][]
): boolean => {
  for (const condition of conditions) {
    if (!checkObjectCondition(obj, condition)) {
      return false; // A condition did not meet the expected result
    }
  }
  return true; // All conditions met their expected results
};

export function filterByObjectCondition(
  objects: Record<string, any>[],
  condition: [string, string, any?]
): Record<string, any>[] {
  return objects.filter((obj) => checkObjectCondition(obj, condition));
}

export function filterByObjectConditions(
  objects: Record<string, any>[],
  conditions: [string, string, any?][]
): Record<string, any>[] {
  return objects.filter((obj) => checkObjectConditions(obj, conditions));
}
