// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!

function reverseVowels(str) {
  const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  function listaVocales(str) {
    let vocalesStr = []
    str.split('').forEach((x, i) => {
    if (vocales.includes(x)) {
      vocalesStr.push(x);
    }
  });
    return vocalesStr.reverse()
 }

  function generateNewString(str) {
      let a = 0
      let newStr = ''
      for (let i = 0; i < str.length; i++){
          let letra = str[i]
          let listaVocalesReverse = listaVocales(str)
          if (vocales.includes(letra)) {
              letra = listaVocalesReverse[a]
              a += 1
          }
          newStr += letra

      }

      return newStr
  }
  
  return generateNewString(str)
  
}