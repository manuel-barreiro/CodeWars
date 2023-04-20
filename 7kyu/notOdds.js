// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
  let odds = []
  values.forEach(x => {
    if (x % 2 == 0) {
        odds.push(x)
    }
    })
  return odds
}