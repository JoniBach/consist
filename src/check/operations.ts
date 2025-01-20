import {
  inArray,
  notInArray,
  empty,
  notEmpty,
  allMatch,
  anyMatch,
  noneMatch,
} from "./array";
import {
  isEqualTo,
  isNotEqualTo,
  isGreaterThan,
  isLessThan,
  isGreaterThanOrEqualTo,
  isLessThanOrEqualTo,
  isStrictlyEqualTo,
  isStrictlyNotEqualTo,
} from "./comparison";
import { before, after, betweenDates, sameDay } from "./date";
import {
  exists,
  doesNotExist,
  keyExists,
  keyDoesNotExist,
  fileExists,
} from "./existence";
import { and, or, not, xor, nand, nor } from "./logic";
import { checkType, valueForKey, extensionMatches } from "./misc";
import { even, odd, divisibleBy } from "./number";
import {
  startsWith,
  endsWith,
  contains,
  matches,
  regex,
  lengthEquals,
  lengthGreaterThan,
  lengthLessThan,
  validURL,
  validEmail,
  domainMatches,
} from "./string";

export type OperationFunction = (a: any, b?: any, c?: any) => boolean;
export interface OperationEntry {
  operation: string;
  function: OperationFunction;
}
export const operationList: OperationEntry[] = [
  {
    operation: "=",
    function: isEqualTo,
  },
  {
    operation: "!=",
    function: isNotEqualTo,
  },
  {
    operation: ">",
    function: isGreaterThan,
  },
  {
    operation: "<",
    function: isLessThan,
  },
  {
    operation: ">=",
    function: isGreaterThanOrEqualTo,
  },
  {
    operation: "<=",
    function: isLessThanOrEqualTo,
  },
  {
    operation: "===",
    function: isStrictlyEqualTo,
  },
  {
    operation: "!==",
    function: isStrictlyNotEqualTo,
  },
  {
    operation: "exists",
    function: exists,
  },
  {
    operation: "doesNotExist",
    function: doesNotExist,
  },
  {
    operation: "checkType",
    function: checkType,
  },
  {
    operation: "startsWith",
    function: startsWith,
  },
  {
    operation: "endsWith",
    function: endsWith,
  },
  {
    operation: "contains",
    function: contains,
  },
  {
    operation: "matches",
    function: matches,
  },
  {
    operation: "inArray",
    function: inArray,
  },
  {
    operation: "notInArray",
    function: notInArray,
  },
  {
    operation: "empty",
    function: empty,
  },
  {
    operation: "notEmpty",
    function: notEmpty,
  },
  {
    operation: "and",
    function: and,
  },
  {
    operation: "or",
    function: or,
  },
  {
    operation: "not",
    function: not,
  },
  {
    operation: "even",
    function: even,
  },
  {
    operation: "odd",
    function: odd,
  },
  {
    operation: "divisibleBy",
    function: divisibleBy,
  },
  {
    operation: "regex",
    function: regex,
  },
  {
    operation: "lengthEquals",
    function: lengthEquals,
  },
  {
    operation: "lengthGreaterThan",
    function: lengthGreaterThan,
  },
  {
    operation: "lengthLessThan",
    function: lengthLessThan,
  },
  {
    operation: "before",
    function: before,
  },
  {
    operation: "after",
    function: after,
  },
  {
    operation: "betweenDates",
    function: betweenDates,
  },
  {
    operation: "sameDay",
    function: sameDay,
  },
  {
    operation: "keyExists",
    function: keyExists,
  },
  {
    operation: "keyDoesNotExist",
    function: keyDoesNotExist,
  },
  {
    operation: "valueForKey",
    function: valueForKey,
  },
  {
    operation: "validURL",
    function: validURL,
  },
  {
    operation: "validEmail",
    function: validEmail,
  },
  {
    operation: "domainMatches",
    function: domainMatches,
  },
  {
    operation: "fileExists",
    function: fileExists,
  },
  {
    operation: "extensionMatches",
    function: extensionMatches,
  },
  {
    operation: "xor",
    function: xor,
  },
  {
    operation: "nand",
    function: nand,
  },
  {
    operation: "nor",
    function: nor,
  },
  {
    operation: "allMatch",
    function: allMatch,
  },
  {
    operation: "anyMatch",
    function: anyMatch,
  },
  {
    operation: "noneMatch",
    function: noneMatch,
  },
];
