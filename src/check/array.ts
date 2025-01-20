export function inArray<T>(value: T, array: T[]): boolean {
  return array.includes(value);
}
export function notInArray<T>(value: T, array: T[]): boolean {
  return !array.includes(value);
}
export function empty(array: any[]): boolean {
  return array.length === 0;
}
export function notEmpty(array: any[]): boolean {
  return array.length > 0;
}
export function allMatch<T>(
  array: T[],
  condition: (value: T) => boolean,
): boolean {
  return array.every(condition);
}
export function anyMatch<T>(
  array: T[],
  condition: (value: T) => boolean,
): boolean {
  return array.some(condition);
}
export function noneMatch<T>(
  array: T[],
  condition: (value: T) => boolean,
): boolean {
  return !array.some(condition);
}
