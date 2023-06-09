// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable (sec) {
    
    let hours = sec / 3600
    let restoHours = hours - Math.floor(hours)
    let hrs = Math.floor(hours) < 10 ? `0${Math.floor(hours)}` : `${Math.floor(hours)}`
    
        
    let minutes = 60 * restoHours
    let restoMinutes = minutes - Math.floor(minutes)
    let mins = Math.floor(minutes) < 10 ? `0${Math.floor(minutes)}` : `${Math.floor(minutes)}`
    
    
    let seconds = sec - Math.floor(hours) * 3600 - Math.floor(minutes) * 60
    let segs = seconds < 10 ? `0${seconds}` : `${seconds}`
    
    return `${hrs}:${mins}:${segs}`;
    
    }