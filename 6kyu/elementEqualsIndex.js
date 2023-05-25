// DESCRIPTION:
// Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
// Return -1 if there is no such index.

// Your algorithm should be very performant.

// [input] array of integers ( with 0-based nonnegative indexing )
// [output] integer

// Examples:
// input: [-8,0,2,5]
// output: 2 # since array[2] == 2

// input: [-1,0,3,6]
// output: -1 # since no index in array satisfies array[index] == index
// Random Tests Constraints:
// Array length: 200 000

// Amount of tests: 1 000

// Time limit: 150 ms

// my sol 

function indexEqualsValue(array) {
  
  for (let index = 0; index < array.length; index++){
    if (array[index] == index) {
      return array[index]
    }
  }
  return -1;
}

// efficient sol

function indexEqualsValue(array) {
  let left = 0;
  let right = array.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] - mid < 0) {
      // The value is smaller than the index, so the desired index can only be on the right side.
      left = mid + 1;
    } else if (array[mid] - mid === 0) {
      // We found a match, but we need to continue searching for a lower index where array[index] == index.
      result = mid;
      right = mid - 1;
    } else {
      // The value is larger than the index, so the desired index can only be on the left side.
      right = mid - 1;
    }
  }

  return result;
}