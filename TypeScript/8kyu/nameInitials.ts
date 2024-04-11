// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

export function abbrevName(name: string): string {
  const nombreApellidoArr = name.split(' ')
  const inicialNombre = nombreApellidoArr[0].slice(0,1).toUpperCase()
  const inicialApellido = nombreApellidoArr[1].slice(0,1).toUpperCase()
  
  return inicialNombre + '.' + inicialApellido;
}