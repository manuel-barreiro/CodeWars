// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    let listaIndices = []
    for (let i = 0; i < string.length; i++){
      let char = string[i]
      if (char === char.toLowerCase()){
        continue
      }
      else{
        listaIndices.push(i) 
      }
    }
    let num = 0
    let listaPalabras = []
    for (let contador = 0; contador <= listaIndices.length; contador++){
        listaPalabras.push(string.slice(num,(listaIndices[contador])))
        num = listaIndices[contador]
    }
    return listaPalabras.join(' ')
}