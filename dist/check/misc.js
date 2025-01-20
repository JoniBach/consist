"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkType = exports.extensionMatches = exports.valueForKey = void 0;
function valueForKey(obj, key, condition) {
    return condition(obj[key]);
}
exports.valueForKey = valueForKey;
function extensionMatches(filePath, extension) {
    const path = require("path");
    return path.extname(filePath) === extension;
}
exports.extensionMatches = extensionMatches;
function checkType(value, type) {
    return typeof value === type;
}
exports.checkType = checkType;
