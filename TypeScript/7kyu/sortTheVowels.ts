// Sort the Vowels!
// In this kata, we want to sort the vowels in a special format.

// Task
// Write a function which takes a input string s and return a string in the following way:

   
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// for the purpose of this kata, the vowels are : a e i o u
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string




export function sortVowels(str?: number | string | null): string {
  if (typeof(str) !== 'string') {
    return ''
  } else {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let result = ''
    // for que vaya recorriendo el str, y en cada iteración prueba lógica para
    // chequear si es vocal o no
    // si es result += `|{vowel}\n y si no result += `{consonant}|\n`
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        //Si es la última iter no se suma /n
        if (i === (str.length-1)) {
          result += `|${str[i]}`
        } else {
          result += `|${str[i]}\n`
        }
      } else {
        //Si es la última iter no se suma /n
        if (i === (str.length-1)) {
          result += `${str[i]}|`
        } else {
          result += `${str[i]}|\n`
        }
      }
    }
    return result
  }
};