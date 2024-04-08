// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9


function squareSum(numbers){
    return numbers.map((elem) => elem**2).reduce((acc, currentVal, currentInd) => acc + currentVal, 0)
  }