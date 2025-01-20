export function exists(value: any): boolean {
  return value !== null && value !== undefined;
}
export function doesNotExist(value: any): boolean {
  return value === null || value === undefined;
}

export function keyExists(obj: object, key: string): boolean {
  return Object.hasOwnProperty.call(obj, key);
}
export function keyDoesNotExist(obj: object, key: string): boolean {
  return !Object.hasOwnProperty.call(obj, key);
}

export function fileExists(path: string): boolean {
  // Note: this function requires a runtime that has access to the filesystem.
  const fs = require("fs");
  try {
    fs.accessSync(path);
    return true;
  } catch (_) {
    return false;
  }
}
