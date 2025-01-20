"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisibleBy = exports.odd = exports.even = void 0;
function even(number) {
    return number % 2 === 0;
}
exports.even = even;
function odd(number) {
    return number % 2 !== 0;
}
exports.odd = odd;
function divisibleBy(number, divisor) {
    return number % divisor === 0;
}
exports.divisibleBy = divisibleBy;
