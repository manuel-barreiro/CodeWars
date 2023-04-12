// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let strArray = []
    strArray = str.split("")
    
    reverseArray = strArray.reverse()
    
    newStr = reverseArray.join("")
    
    return newStr
    
  }