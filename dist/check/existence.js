"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileExists = exports.keyDoesNotExist = exports.keyExists = exports.doesNotExist = exports.exists = void 0;
function exists(value) {
    return value !== null && value !== undefined;
}
exports.exists = exists;
function doesNotExist(value) {
    return value === null || value === undefined;
}
exports.doesNotExist = doesNotExist;
function keyExists(obj, key) {
    return Object.hasOwnProperty.call(obj, key);
}
exports.keyExists = keyExists;
function keyDoesNotExist(obj, key) {
    return !Object.hasOwnProperty.call(obj, key);
}
exports.keyDoesNotExist = keyDoesNotExist;
function fileExists(path) {
    // Note: this function requires a runtime that has access to the filesystem.
    const fs = require("fs");
    try {
        fs.accessSync(path);
        return true;
    }
    catch (_) {
        return false;
    }
}
exports.fileExists = fileExists;
