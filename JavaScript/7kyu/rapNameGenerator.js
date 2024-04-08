// It seems as though the infamous soundcloud rapper "6ix 9ine" has been locked away for good. As sad as this may be, his name will surely live on...

// Write a function that takes a string representing a date-of-birth as an argument ("dd.mm.yy") and returns a string containing the generated Rap-Name.

// How to figure out one's Rap-Name:

// Find the average of the two digits that make up the DAY of birth. ("DD.mm.yy")
// Find the average of the two digits that make up the YEAR of birth. ("dd.mm.YY")
// Note: only integers are admissible, therefore round up averages that are decimal
// Note: if the average of the YEAR of birth is 0 (in the case of "dd.mm.00"), the format is '0ero'
// Return a single string containing both numbers represented in the following format - e.g, '3hree 6ix'
// format = the respective number replaces the first character for the word of said number. 'three' becomes '3hree'

function rapNameGen(dob){
    let num = Math.ceil((Number(dob[0]) + Number(dob[1])) / 2)
    let numOne = Math.ceil((Number(dob[6]) + Number(dob[7])) / 2)
    
    return `${num}${numberToWord(num).slice(1)} ${numOne}${numberToWord(numOne).slice(1)}`
    
    function numberToWord(num){
      if(num === 1){
        return 'one'
      }else if(num === 2){
        return 'two'
      }else if(num === 3){
        return 'three'
      }else if(num === 4){
        return 'four'
      }else if(num === 5){
        return 'five'
      }else if(num === 6){
        return 'six'
      }else if(num === 7){
        return 'seven'
      }else if(num === 8){
        return 'eight'
      }else if(num === 9){
        return 'nine'
      }else if(num === 10){
        return 'ten'
      }
      else if(num === 0){
        return 'zero'
      }
    }
  
  }