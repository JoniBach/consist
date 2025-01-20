"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStrictlyNotEqualTo = exports.isStrictlyEqualTo = exports.isLessThanOrEqualTo = exports.isGreaterThanOrEqualTo = exports.isLessThan = exports.isGreaterThan = exports.isNotEqualTo = exports.isEqualTo = void 0;
function isEqualTo(a, b) {
    return a == b;
}
exports.isEqualTo = isEqualTo;
function isNotEqualTo(a, b) {
    return a != b;
}
exports.isNotEqualTo = isNotEqualTo;
function isGreaterThan(a, b) {
    return a > b;
}
exports.isGreaterThan = isGreaterThan;
function isLessThan(a, b) {
    return a < b;
}
exports.isLessThan = isLessThan;
function isGreaterThanOrEqualTo(a, b) {
    return a >= b;
}
exports.isGreaterThanOrEqualTo = isGreaterThanOrEqualTo;
function isLessThanOrEqualTo(a, b) {
    return a <= b;
}
exports.isLessThanOrEqualTo = isLessThanOrEqualTo;
function isStrictlyEqualTo(a, b) {
    return a === b;
}
exports.isStrictlyEqualTo = isStrictlyEqualTo;
function isStrictlyNotEqualTo(a, b) {
    return a !== b;
}
exports.isStrictlyNotEqualTo = isStrictlyNotEqualTo;
