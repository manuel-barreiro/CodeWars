// Task:
// You are given two sorted lists, with distinct elements. Find the maximum path sum while traversing through the lists.

// Points to consider for a valid path:

// A path can start from either list, and can finish in either list.
// If there is an element which is present in both lists (regardless of its index in the lists), you can choose to change your path to the other list.
// Return only the maximum path sum.

// Example:
// [0, 2, 3, 7, 10, 12]
//    [1, 5, 7, 8]
// Both lists having only 7 as common element, the possible paths would be:

// 0->2->3->7->10->12 => 34
// 0->2->3->7->8      => 20
// 1->5->7->8         => 21
// 1->5->7->10->12    => 35 (maximum path)
// Hence, the output will be 35 in the example above.

// Notes:
// The arrays may contain no common terms.
// The common element should only be counted once.
// Aim for a linear time complexity.
// Range of possible inputs:  0 <=len(l1), len(l2) <= 125000

// my solution (inneficient)

function maxSumPath(arr1,arr2){
    let pathSums = []
    const firstArrSum = arr1.reduce((acc,el) => el + acc, 0)
    const secondArrSum = arr2.reduce((acc,el) => el + acc, 0)
    pathSums.push(firstArrSum, secondArrSum)

    
    
    // find common element
    
    let commonEl = arr1.filter(el => arr2.includes(el))

    for (let i = 0; i < commonEl.length; i++){
        // first alt path
    
        let altPathOne = arr1.slice(0,arr1.indexOf(commonEl[i])+1).concat(arr2.slice(arr2.indexOf(commonEl[i])+1))
        let altPathOneSum = altPathOne.reduce((acc,el) => el + acc,0)
        
        // second alt path
        
        let altPathTwo = arr2.slice(0,arr2.indexOf(commonEl[i])+1).concat(arr1.slice(arr1.indexOf(commonEl[i])+1))
        let altPathTwoSum = altPathTwo.reduce((acc,el) => el + acc,0)

        // push altPath's sum to pathSums

        pathSums.push(altPathOneSum, altPathTwoSum)
    }
    
    

    return Math.max(...pathSums)
}

// optimized

function maxSumPath(arr1, arr2) {
  let maxSum = 0;
  let sum1 = 0;
  let sum2 = 0;
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sum1 += arr1[i];
      i++;
    } else if (arr1[i] > arr2[j]) {
      sum2 += arr2[j];
      j++;
    } else {
      // Found a common element
      maxSum += Math.max(sum1, sum2) + arr1[i];
      sum1 = 0;
      sum2 = 0;
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    sum1 += arr1[i];
    i++;
  }

  while (j < arr2.length) {
    sum2 += arr2[j];
    j++;
  }

  maxSum += Math.max(sum1, sum2);

  return maxSum;
}
