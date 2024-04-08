// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    let strN = String(n)
    let splitN = strN.split('')
    let reverseArr = splitN.reverse()
    let reverseArrN = reverseArr.map(x => Number(x))
    return reverseArrN
  }