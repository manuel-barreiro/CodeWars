// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

export function findAverage(array: number[]): number {
  return array.length === 0 ? 0 : array.reduce((acc, cv) => acc + cv, 0) / array.length
}