"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByObjectConditions = exports.filterByObjectCondition = exports.checkObjectConditions = exports.checkObjectCondition = exports.checkConditions = exports.checkCondition = exports.OperationExecutionException = exports.UnsupportedOperationException = void 0;
const check_1 = require("../check");
class UnsupportedOperationException extends Error {
}
exports.UnsupportedOperationException = UnsupportedOperationException;
class OperationExecutionException extends Error {
    constructor(operationName, operands, message) {
        super(message);
        this.operationName = operationName;
        this.operands = operands;
        this.name = "OperationExecutionException";
    }
}
exports.OperationExecutionException = OperationExecutionException;
const checkCondition = (params) => {
    const [value1, operation, value2] = params;
    const operationEntry = check_1.operationList.find((entry) => entry.operation === operation);
    if (!operationEntry) {
        throw new UnsupportedOperationException(`Unsupported operation '${operation}'. Please check the list of supported operations.`);
    }
    try {
        const arity = operationEntry.function.length;
        return arity === 1
            ? operationEntry.function(value1)
            : operationEntry.function(value1, value2);
    }
    catch (error) {
        if (error instanceof Error) {
            throw new OperationExecutionException(operation, [value1, value2], `Error executing '${operation}' with values (${value1}, ${value2}): ${error.message}`);
        }
        else {
            throw new OperationExecutionException(operation, [value1, value2], `Error executing '${operation}' with values (${value1}, ${value2}).`);
        }
    }
};
exports.checkCondition = checkCondition;
const checkConditions = (conditions) => {
    for (const condition of conditions) {
        const [value1, operation, value2, expectedResult = true] = condition; // Default expected result is true
        const result = (0, exports.checkCondition)([value1, operation, value2]);
        // Check the result against the expected result
        if (result !== expectedResult) {
            return false; // Condition did not meet the expected result
        }
    }
    return true; // All conditions met their expected results
};
exports.checkConditions = checkConditions;
const checkObjectCondition = (obj, params) => {
    const [key, operation, compareValue] = params;
    const value = obj[key];
    const operationEntry = check_1.operationList.find((entry) => entry.operation === operation);
    if (!operationEntry) {
        throw new UnsupportedOperationException(`Unsupported operation '${operation}'. Please check the list of supported operations.`);
    }
    try {
        // Assuming all operations need both value and compareValue, adjust as necessary.
        return operationEntry.function(value, compareValue);
    }
    catch (error) {
        if (error instanceof Error) {
            throw new OperationExecutionException(operation, [value, compareValue], `Error executing '${operation}' with key '${key}' and value '${compareValue}': ${error.message}`);
        }
        else {
            throw new OperationExecutionException(operation, [value, compareValue], `Error executing '${operation}' with key '${key}' and value '${compareValue}'.`);
        }
    }
};
exports.checkObjectCondition = checkObjectCondition;
const checkObjectConditions = (obj, conditions) => {
    for (const condition of conditions) {
        if (!(0, exports.checkObjectCondition)(obj, condition)) {
            return false; // A condition did not meet the expected result
        }
    }
    return true; // All conditions met their expected results
};
exports.checkObjectConditions = checkObjectConditions;
function filterByObjectCondition(objects, condition) {
    return objects.filter((obj) => (0, exports.checkObjectCondition)(obj, condition));
}
exports.filterByObjectCondition = filterByObjectCondition;
function filterByObjectConditions(objects, conditions) {
    return objects.filter((obj) => (0, exports.checkObjectConditions)(obj, conditions));
}
exports.filterByObjectConditions = filterByObjectConditions;
