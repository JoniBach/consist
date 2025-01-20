"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nor = exports.nand = exports.xor = exports.not = exports.or = exports.and = void 0;
function and(...conditions) {
    return conditions.every(Boolean);
}
exports.and = and;
function or(...conditions) {
    return conditions.some(Boolean);
}
exports.or = or;
function not(condition) {
    return !condition;
}
exports.not = not;
function xor(condition1, condition2) {
    return condition1 ? !condition2 : condition2;
}
exports.xor = xor;
function nand(condition1, condition2) {
    return !(condition1 && condition2);
}
exports.nand = nand;
function nor(condition1, condition2) {
    return !(condition1 || condition2);
}
exports.nor = nor;
