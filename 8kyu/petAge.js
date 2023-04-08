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