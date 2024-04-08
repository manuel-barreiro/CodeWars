// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    if (s.split('').includes('!')) {
      let filteredStr = s.split('').filter(x => x !== '!')
      return filteredStr.join('')
    }
    else {
      return s
    }
  
  }