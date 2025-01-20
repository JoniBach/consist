"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noneMatch = exports.anyMatch = exports.allMatch = exports.notEmpty = exports.empty = exports.notInArray = exports.inArray = void 0;
function inArray(value, array) {
    return array.includes(value);
}
exports.inArray = inArray;
function notInArray(value, array) {
    return !array.includes(value);
}
exports.notInArray = notInArray;
function empty(array) {
    return array.length === 0;
}
exports.empty = empty;
function notEmpty(array) {
    return array.length > 0;
}
exports.notEmpty = notEmpty;
function allMatch(array, condition) {
    return array.every(condition);
}
exports.allMatch = allMatch;
function anyMatch(array, condition) {
    return array.some(condition);
}
exports.anyMatch = anyMatch;
function noneMatch(array, condition) {
    return !array.some(condition);
}
exports.noneMatch = noneMatch;
