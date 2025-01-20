export function startsWith(str: string, substring: string): boolean {
  return str.startsWith(substring);
}
export function endsWith(str: string, substring: string): boolean {
  return str.endsWith(substring);
}
export function contains(str: string, substring: string): boolean {
  return str.includes(substring);
}
export function matches(str: string, regex: RegExp): boolean {
  return regex.test(str);
}

export function regex(str: string, regex: RegExp): boolean {
  return regex.test(str);
}
export function lengthEquals(str: string, length: number): boolean {
  return str.length === length;
}
export function lengthGreaterThan(str: string, length: number): boolean {
  return str.length > length;
}
export function lengthLessThan(str: string, length: number): boolean {
  return str.length < length;
}

export function validURL(str: string): boolean {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}
export function validEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function domainMatches(url: string, domain: string): boolean {
  try {
    return new URL(url).hostname === domain;
  } catch (_) {
    return false;
  }
}
