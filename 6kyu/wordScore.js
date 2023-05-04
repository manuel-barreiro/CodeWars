// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function wordScore(word){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let score = 0
    for (let index = 0; index <= word.length; index++){
      score += (alphabet.indexOf(word[index]) + 1)
    }
    return score
  }
  
  function high(x){
    // separar el string en palabras
    let palabras = x.split(' ')
    let listaScores = []
    palabras.forEach(palabra => {
      listaScores.push(wordScore(palabra))
    })
    return palabras[listaScores.indexOf(Math.max(...listaScores))]
  }
  