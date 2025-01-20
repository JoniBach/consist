export function even(number: number): boolean {
  return number % 2 === 0;
}
export function odd(number: number): boolean {
  return number % 2 !== 0;
}
export function divisibleBy(number: number, divisor: number): boolean {
  return number % divisor === 0;
}
