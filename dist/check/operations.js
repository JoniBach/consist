"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationList = void 0;
const array_1 = require("./array");
const comparison_1 = require("./comparison");
const date_1 = require("./date");
const existence_1 = require("./existence");
const logic_1 = require("./logic");
const misc_1 = require("./misc");
const number_1 = require("./number");
const string_1 = require("./string");
exports.operationList = [
    {
        operation: "=",
        function: comparison_1.isEqualTo,
    },
    {
        operation: "!=",
        function: comparison_1.isNotEqualTo,
    },
    {
        operation: ">",
        function: comparison_1.isGreaterThan,
    },
    {
        operation: "<",
        function: comparison_1.isLessThan,
    },
    {
        operation: ">=",
        function: comparison_1.isGreaterThanOrEqualTo,
    },
    {
        operation: "<=",
        function: comparison_1.isLessThanOrEqualTo,
    },
    {
        operation: "===",
        function: comparison_1.isStrictlyEqualTo,
    },
    {
        operation: "!==",
        function: comparison_1.isStrictlyNotEqualTo,
    },
    {
        operation: "exists",
        function: existence_1.exists,
    },
    {
        operation: "doesNotExist",
        function: existence_1.doesNotExist,
    },
    {
        operation: "checkType",
        function: misc_1.checkType,
    },
    {
        operation: "startsWith",
        function: string_1.startsWith,
    },
    {
        operation: "endsWith",
        function: string_1.endsWith,
    },
    {
        operation: "contains",
        function: string_1.contains,
    },
    {
        operation: "matches",
        function: string_1.matches,
    },
    {
        operation: "inArray",
        function: array_1.inArray,
    },
    {
        operation: "notInArray",
        function: array_1.notInArray,
    },
    {
        operation: "empty",
        function: array_1.empty,
    },
    {
        operation: "notEmpty",
        function: array_1.notEmpty,
    },
    {
        operation: "and",
        function: logic_1.and,
    },
    {
        operation: "or",
        function: logic_1.or,
    },
    {
        operation: "not",
        function: logic_1.not,
    },
    {
        operation: "even",
        function: number_1.even,
    },
    {
        operation: "odd",
        function: number_1.odd,
    },
    {
        operation: "divisibleBy",
        function: number_1.divisibleBy,
    },
    {
        operation: "regex",
        function: string_1.regex,
    },
    {
        operation: "lengthEquals",
        function: string_1.lengthEquals,
    },
    {
        operation: "lengthGreaterThan",
        function: string_1.lengthGreaterThan,
    },
    {
        operation: "lengthLessThan",
        function: string_1.lengthLessThan,
    },
    {
        operation: "before",
        function: date_1.before,
    },
    {
        operation: "after",
        function: date_1.after,
    },
    {
        operation: "betweenDates",
        function: date_1.betweenDates,
    },
    {
        operation: "sameDay",
        function: date_1.sameDay,
    },
    {
        operation: "keyExists",
        function: existence_1.keyExists,
    },
    {
        operation: "keyDoesNotExist",
        function: existence_1.keyDoesNotExist,
    },
    {
        operation: "valueForKey",
        function: misc_1.valueForKey,
    },
    {
        operation: "validURL",
        function: string_1.validURL,
    },
    {
        operation: "validEmail",
        function: string_1.validEmail,
    },
    {
        operation: "domainMatches",
        function: string_1.domainMatches,
    },
    {
        operation: "fileExists",
        function: existence_1.fileExists,
    },
    {
        operation: "extensionMatches",
        function: misc_1.extensionMatches,
    },
    {
        operation: "xor",
        function: logic_1.xor,
    },
    {
        operation: "nand",
        function: logic_1.nand,
    },
    {
        operation: "nor",
        function: logic_1.nor,
    },
    {
        operation: "allMatch",
        function: array_1.allMatch,
    },
    {
        operation: "anyMatch",
        function: array_1.anyMatch,
    },
    {
        operation: "noneMatch",
        function: array_1.noneMatch,
    },
];
