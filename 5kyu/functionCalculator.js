// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// Calc
function realizarOperacion(arr) {
  var num1 = parseInt(arr[0]);  // Primer número
  var operador = arr[1];  // Operador
  var num2 = parseInt(arr[2]);  // Segundo número

  var resultado;

  // Realizar la operación según el operador
  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      let resultadox = num1 / num2;
      resultado = Math.floor(resultadox)
      break;
    default:
      console.log('Operador inválido');
      return;
  }

  return resultado;
}

// Numbers
function zero(operation) {
  if (operation){
    let opStr = `0 ${operation}`
    let opArr = opStr.split('').filter(x => x !== ' ')
    return realizarOperacion(opArr) 
  } else {
    return 0
  } 
}
function one(operation) {
  if (operation){
    let opStr = `1 ${operation}`
    let opArr = opStr.split('').filter(x => x !== ' ')
    return realizarOperacion(opArr) 
  } else {
    return 1
  } 
}
function two(operation) {
  if (operation){
    let opStr = `2 ${operation}`
    let opArr = opStr.split('').filter(x => x !== ' ')
    return realizarOperacion(opArr) 
  } else {
    return 2
  } 
}
function three(operation) {
  if (operation){
    let opStr = `3 ${operation}`
    let opArr = opStr.split('').filter(x => x !== ' ')
    return realizarOperacion(opArr) 
  } else {
    return 3
  } 
}
function four(operation) {
  if (operation){
    let opStr = `4 ${operation}`
    let opArr = opStr.split('').filter(x => x !== ' ')
    return realizarOperacion(opArr) 
  } else {
    return 4
  } 
}
function five(operation) {
  if (operation){
    let opStr = `5 ${operation}`
    let opArr = opStr.split('').filter(x => x !== ' ')
    return realizarOperacion(opArr) 
  } else {
    return 5
  } 
}
function six(operation) {
  if (operation){
    let opStr = `6 ${operation}`
    let opArr = opStr.split('').filter(x => x !== ' ')
    return realizarOperacion(opArr) 
  } else {
    return 6
  } 
}
function seven(operation) {
  if (operation){
    let opStr = `7 ${operation}`
    let opArr = opStr.split('').filter(x => x !== ' ')
    return realizarOperacion(opArr) 
  } else {
    return 7
  } 
}
function eight(operation) {
  if (operation){
    let opStr = `8 ${operation}`
    let opArr = opStr.split('').filter(x => x !== ' ')
    return realizarOperacion(opArr) 
  } else {
    return 8
  } 
}
function nine(operation) {
  if (operation){
    let opStr = `9 ${operation}`
    let opArr = opStr.split('').filter(x => x !== ' ')
    return realizarOperacion(opArr) 
  } else {
    return 9
  } 
}

// Operations
function plus(numFunction) {
  return `+ ${numFunction}`
}
function minus(numFunction) {
  return `- ${numFunction}`
}
function times(numFunction) {
  return `* ${numFunction}`
}
function dividedBy(numFunction) {
  return `/ ${numFunction}`
}

