// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  
  let nombre = name.toLowerCase()
  
  if (nombre[0] === 'r') {
    return name + " plays banjo"
  }
  else {
    return name + " does not play banjo"
  }
  
}