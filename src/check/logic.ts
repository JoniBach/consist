export function and(...conditions: boolean[]): boolean {
  return conditions.every(Boolean);
}
export function or(...conditions: boolean[]): boolean {
  return conditions.some(Boolean);
}
export function not(condition: boolean): boolean {
  return !condition;
}
export function xor(condition1: boolean, condition2: boolean): boolean {
  return condition1 ? !condition2 : condition2;
}
export function nand(condition1: boolean, condition2: boolean): boolean {
  return !(condition1 && condition2);
}
export function nor(condition1: boolean, condition2: boolean): boolean {
  return !(condition1 || condition2);
}
