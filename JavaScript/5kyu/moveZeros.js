// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let nonZeros = [];
    let zeros = [];
  
    // Iterate over the array and separate zeros from non-zeros
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        nonZeros.push(arr[i]);
      } else {
        zeros.push(arr[i]);
      }
    }
  
    // Concatenate non-zeros array with zeros array
    return nonZeros.concat(zeros);
  }