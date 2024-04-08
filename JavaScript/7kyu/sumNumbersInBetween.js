// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b){
    if (a < b){
      let firstNum = a
      let secondNum = b
      let sumador = 0
      for (let i = firstNum; i <= secondNum; i++){
      sumador += i 
      }
      return sumador
     }
    else if (a > b){
      let firstNum = b
      let secondNum = a
      let sumador = 0
      for (let i = firstNum; i <= secondNum; i++){
      sumador += i 
      }
      return sumador
    }
    else if (a === b){
      return a
    }
    
  }