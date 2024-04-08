// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
  
    let ages = []
    
    if (humanYears === 1) {
      let catYears = 15
      let dogYears = 15
      return ages = [humanYears, catYears, dogYears]
    }
    else if (humanYears === 2) {
      let catYears = 24
      let dogYears = 24
      return ages = [humanYears, catYears, dogYears]
    }
    else {
      let catYears = 24
      let dogYears = 24
      
      for (let i = 1; i <= (humanYears-2); i++) {
        catYears += 4
        dogYears += 5
      }
      
      ages = [humanYears, catYears, dogYears]
      
      return ages
    }
      
  }