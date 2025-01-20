export function before(date1: Date, date2: Date): boolean {
  return date1 < date2;
}
export function after(date1: Date, date2: Date): boolean {
  return date1 > date2;
}
export function betweenDates(
  date: Date,
  startDate: Date,
  endDate: Date,
): boolean {
  return date > startDate && date < endDate;
}
export function sameDay(date1: Date, date2: Date): boolean {
  return date1.toDateString() === date2.toDateString();
}
