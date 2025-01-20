export function isEqualTo(a: any, b: any): boolean {
  return a == b;
}

export function isNotEqualTo(a: any, b: any): boolean {
  return a != b;
}

export function isGreaterThan(a: number, b: number): boolean {
  return a > b;
}

export function isLessThan(a: number, b: number): boolean {
  return a < b;
}

export function isGreaterThanOrEqualTo(a: number, b: number): boolean {
  return a >= b;
}

export function isLessThanOrEqualTo(a: number, b: number): boolean {
  return a <= b;
}

export function isStrictlyEqualTo(a: any, b: any): boolean {
  return a === b;
}

export function isStrictlyNotEqualTo(a: any, b: any): boolean {
  return a !== b;
}
