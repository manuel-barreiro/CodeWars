// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    if (str === '' || str === `${" ".repeat(str.length)}`){
      return false
    }else{
      let splitBySpace = str.split(' ')
      let filterWords = splitBySpace.filter(x => x !== '')
      let capitalizeWords = filterWords.map(x => `${x[0].toUpperCase()}${x.slice(1)}`)
      let finalResult = `#${capitalizeWords.join('')}`
      if (finalResult.length > 140){
        return false
      }else {
        return finalResult
      }
    }
  }