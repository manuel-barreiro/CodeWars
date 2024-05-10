// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

export function duplicateEncode(word: string): string {
  word = word.toLowerCase()
  let encodedWord = ''
  for (let i = 0; i < word.length; i++) {
    let currentChar = word[i]
    for (let j = 0; j < word.length; j++) {
      if (word[j] === currentChar && i !== j) {
        encodedWord += ')'
        break
      } else if (j === (word.length-1)) {
        encodedWord += '('
      }
    }
  }
  return encodedWord
}