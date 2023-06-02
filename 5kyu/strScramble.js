// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// My code

function scramble(str1, str2) {
    let contador = 0
    let cantPalabras = str2.length
    for (let i = 0; i < cantPalabras; i++){
      let letter = str2[i]
      if (str1.includes(letter)){
        str1 = str1.slice(0, str1.indexOf(letter)) + str1.slice(str1.indexOf(letter) + 1);
        contador++
        if (contador === cantPalabras){
          return true
        }
      }else {
          return false;
      }
    }
    return false
  }

// More performant

function scramble(str1, str2) {
    const charCount = {};
  
    // Count the occurrences of each character in str1
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Check if str2 can be formed using the characters from str1
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
  
      if (!charCount[char]) {
        // If the character is not present or has already been used up, return false
        return false;
      }
  
      // Decrement the count of the character in charCount
      charCount[char]--;
    }
  
    // If all characters of str2 have been matched, return true
    return true;
  }
  
  