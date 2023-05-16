// Task
// A list S will be given. You need to generate a list T from it by following the given process:

// Remove the first and last element from the list S and add them to the list T.
// Reverse the list S
// Repeat the process until list S gets emptied.
// The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

// Example
// S = [1,2,3,4,5,6]
// T = []

// S = [2,3,4,5] => [5,4,3,2]
// T = [1,6]

// S = [4,3] => [3,4]
// T = [1,6,5,2]

// S = []
// T = [1,6,5,2,3,4]
// return T
// Note
// size of S goes up to 10^6
// Keep the efficiency of your code in mind.
// Do not mutate the Input.

// My code

function arrange(s) {
    let z = s
    let t = []
  
    while (z.length !== 0) {
      let first = z.shift()
      let last = z.pop()
      if (last || last === 0) {
          t.push(first,last)
      }
      else {
          t.push(first)
      }
      z.reverse()
    } 
    
    return t
  }

// Performance Optimized

function arrange(s) {
    let t = [];
    let left = 0;
    let right = s.length - 1;
    let counter = 0;

    while (left <= right) {
        if (counter % 2 === 0) {
            t.push(s[left++]);
            if (left <= right) {
                t.push(s[right--]);
            }
        } else {
            t.push(s[right--]);
            if (left <= right) {
                t.push(s[left++]);
            }
        }
        counter++;
    }

    return t;
}