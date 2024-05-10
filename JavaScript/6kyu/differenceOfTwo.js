// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

// Examples
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]


function twosDifference(input){
  let twosDifferenceArr = []
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      let resta = input[i]-input[j]
      if (resta === -2) {
        twosDifferenceArr.push([input[i],input[j]])
      }
    }
  }
  return twosDifferenceArr.sort(([firstNumA, _a],[firstNumB, _b]) =>
       firstNumA - firstNumB
    )
 }