"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterArrayByString = exports.filterArrayByStringRaw = exports.searchString = exports.arrayWithObjectAndString = exports.stringToArray = exports.stringToObject = exports.nestedObjectArrayToArrayOfString = exports.nestedObjectArrayToQueryString = exports.nestedObjectArrayToString = exports.nestedObjectArrayKeysToString = exports.nestedObjectArrayValuesToString = exports.objectArrayToArrayOfString = exports.objectArrayToQueryString = exports.objectArrayToString = exports.objectArrayKeysToString = exports.objectArrayValuesToString = exports.objectToQueryString = exports.objectToString = exports.objectKeysToString = exports.objectValuesToString = exports.arrayToGroup = exports.arrayToFlatArray = exports.arrayToSet = exports.setToArray = exports.objectToMap = exports.mapToObject = exports.arrayToObject = exports.objectToArray = void 0;
// Converts an object to an array of [key, value] pairs.
function objectToArray(obj) {
    return Object.entries(obj);
}
exports.objectToArray = objectToArray;
// Converts an array of [key, value] pairs to an object.
function arrayToObject(array) {
    return Object.fromEntries(array);
}
exports.arrayToObject = arrayToObject;
// Converts a Map to an object.
function mapToObject(map) {
    return Object.fromEntries(map);
}
exports.mapToObject = mapToObject;
// Converts an object to a Map.
function objectToMap(obj) {
    return new Map(Object.entries(obj));
}
exports.objectToMap = objectToMap;
// Converts a Set to an array.
function setToArray(set) {
    return Array.from(set);
}
exports.setToArray = setToArray;
// Converts an array to a Set.
function arrayToSet(array) {
    return new Set(array);
}
exports.arrayToSet = arrayToSet;
// Flattens a nested array into a single array.
function arrayToFlatArray(array) {
    return array.flat(Infinity);
}
exports.arrayToFlatArray = arrayToFlatArray;
// Groups an array of objects by a given key.
function arrayToGroup(array, key) {
    return array.reduce((accumulator, currentValue) => {
        (accumulator[currentValue[key]] =
            accumulator[currentValue[key]] || []).push(currentValue);
        return accumulator;
    }, {});
}
exports.arrayToGroup = arrayToGroup;
// Converts an object's values to a single comma-separated string.
function objectValuesToString(obj) {
    return Object.values(obj).join(", ");
}
exports.objectValuesToString = objectValuesToString;
// Converts an object's keys to a single comma-separated string.
function objectKeysToString(obj) {
    return Object.keys(obj).join(", ");
}
exports.objectKeysToString = objectKeysToString;
// Converts an object into a string by concatenating its key-value pairs, each pair in "key:value" format.
function objectToString(obj) {
    const keyValuePairs = Object.entries(obj).map(([key, value]) => `${key}:${value}`);
    return keyValuePairs.join(", ");
}
exports.objectToString = objectToString;
// Converts an object to a query string.
function objectToQueryString(obj) {
    return new URLSearchParams(obj).toString();
}
exports.objectToQueryString = objectToQueryString;
// non nested object array stringification
function objectArrayValuesToString(array) {
    return array.map((obj) => Object.values(obj).join(", ")).join(", ");
}
exports.objectArrayValuesToString = objectArrayValuesToString;
function objectArrayKeysToString(array) {
    return array.map((obj) => Object.keys(obj).join(", ")).join(", ");
}
exports.objectArrayKeysToString = objectArrayKeysToString;
function objectArrayToString(array) {
    return array
        .map((obj) => Object.entries(obj)
        .map(([key, value]) => `${key}:${value}`)
        .join(", "))
        .join(", ");
}
exports.objectArrayToString = objectArrayToString;
function objectArrayToQueryString(array) {
    return array.map((obj) => new URLSearchParams(obj).toString()).join(", ");
}
exports.objectArrayToQueryString = objectArrayToQueryString;
function objectArrayToArrayOfString(array) {
    return array.map((obj) => objectToString(obj));
}
exports.objectArrayToArrayOfString = objectArrayToArrayOfString;
// nested object array stringification
function nestedObjectArrayValuesToString(array) {
    const flattenedArray = arrayToFlatArray(array);
    return flattenedArray.map((obj) => objectValuesToString(obj)).join(", ");
}
exports.nestedObjectArrayValuesToString = nestedObjectArrayValuesToString;
function nestedObjectArrayKeysToString(array) {
    const flattenedArray = arrayToFlatArray(array);
    return flattenedArray.map((obj) => objectKeysToString(obj)).join(", ");
}
exports.nestedObjectArrayKeysToString = nestedObjectArrayKeysToString;
function nestedObjectArrayToString(array) {
    const flattenedArray = arrayToFlatArray(array);
    return flattenedArray.map((obj) => objectToString(obj)).join(", ");
}
exports.nestedObjectArrayToString = nestedObjectArrayToString;
function nestedObjectArrayToQueryString(array) {
    const flattenedArray = arrayToFlatArray(array);
    return flattenedArray.map((obj) => objectToQueryString(obj)).join(", ");
}
exports.nestedObjectArrayToQueryString = nestedObjectArrayToQueryString;
function nestedObjectArrayToArrayOfString(nestedArray) {
    const result = [];
    const processElement = (element) => {
        if (Array.isArray(element)) {
            element.forEach(processElement);
        }
        else if (typeof element === "object" && element !== null) {
            result.push(objectToString(element));
        }
        else {
            result.push(String(element));
        }
    };
    processElement(nestedArray);
    return result;
}
exports.nestedObjectArrayToArrayOfString = nestedObjectArrayToArrayOfString;
// reverse stringification
function stringToObject(str) {
    return Object.fromEntries(new URLSearchParams(str));
}
exports.stringToObject = stringToObject;
function stringToArray(str) {
    return Array.from(new URLSearchParams(str));
}
exports.stringToArray = stringToArray;
// array with object and string
function arrayWithObjectAndString(array) {
    return array.map((obj) => ({
        original: obj,
        objectString: objectValuesToString(obj),
    }));
}
exports.arrayWithObjectAndString = arrayWithObjectAndString;
function searchString(text, searchTerm) {
    // Convert both text and searchTerm to the same case to make the search case-insensitive
    const lowerCaseText = text.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return lowerCaseText.includes(lowerCaseSearchTerm);
}
exports.searchString = searchString;
// Adjust the function signature to use the new TransformedObject type
function filterArrayByStringRaw(array, searchTerm) {
    // Utilize searchString for the filter condition
    return array.filter(({ objectString }) => searchString(objectString, searchTerm));
}
exports.filterArrayByStringRaw = filterArrayByStringRaw;
// Adjust the function signature to use the new TransformedObject type
function filterArrayByString(array, searchTerm) {
    // Utilize searchString for the filter condition
    return array
        .filter(({ objectString }) => searchString(objectString, searchTerm))
        .map(({ original }) => original);
}
exports.filterArrayByString = filterArrayByString;
