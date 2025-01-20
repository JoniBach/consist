"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainMatches = exports.validEmail = exports.validURL = exports.lengthLessThan = exports.lengthGreaterThan = exports.lengthEquals = exports.regex = exports.matches = exports.contains = exports.endsWith = exports.startsWith = void 0;
function startsWith(str, substring) {
    return str.startsWith(substring);
}
exports.startsWith = startsWith;
function endsWith(str, substring) {
    return str.endsWith(substring);
}
exports.endsWith = endsWith;
function contains(str, substring) {
    return str.includes(substring);
}
exports.contains = contains;
function matches(str, regex) {
    return regex.test(str);
}
exports.matches = matches;
function regex(str, regex) {
    return regex.test(str);
}
exports.regex = regex;
function lengthEquals(str, length) {
    return str.length === length;
}
exports.lengthEquals = lengthEquals;
function lengthGreaterThan(str, length) {
    return str.length > length;
}
exports.lengthGreaterThan = lengthGreaterThan;
function lengthLessThan(str, length) {
    return str.length < length;
}
exports.lengthLessThan = lengthLessThan;
function validURL(str) {
    try {
        new URL(str);
        return true;
    }
    catch (_) {
        return false;
    }
}
exports.validURL = validURL;
function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
exports.validEmail = validEmail;
function domainMatches(url, domain) {
    try {
        return new URL(url).hostname === domain;
    }
    catch (_) {
        return false;
    }
}
exports.domainMatches = domainMatches;
