"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sameDay = exports.betweenDates = exports.after = exports.before = void 0;
function before(date1, date2) {
    return date1 < date2;
}
exports.before = before;
function after(date1, date2) {
    return date1 > date2;
}
exports.after = after;
function betweenDates(date, startDate, endDate) {
    return date > startDate && date < endDate;
}
exports.betweenDates = betweenDates;
function sameDay(date1, date2) {
    return date1.toDateString() === date2.toDateString();
}
exports.sameDay = sameDay;
