// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000

export function isLeap(year: number):boolean {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true
    }
    return false
  } else if (year % 4 === 0) {
    return true
  }
  return false
}
