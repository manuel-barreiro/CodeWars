// DESCRIPTION:
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    let hoursToSeconds = h * 60 * 60
    let minutesToSeconds = m * 60
    let seconds = s
    
    let totalSeconds = hoursToSeconds + minutesToSeconds + seconds
    
    let result = totalSeconds * 1000
    
    return result
  }