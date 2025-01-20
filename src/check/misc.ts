export function valueForKey<T>(
  obj: { [key: string]: any },
  key: string,
  condition: (value: T) => boolean,
): boolean {
  return condition(obj[key]);
}

export function extensionMatches(filePath: string, extension: string): boolean {
  const path = require("path");
  return path.extname(filePath) === extension;
}

export function checkType(value: any, type: string): boolean {
  return typeof value === type;
}
